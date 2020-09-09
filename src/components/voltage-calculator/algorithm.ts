import { critProb } from '@/utils/utils';

import { SlotSetting } from '@/store/voltage-calculator/reducers';
import { ACCESSORY_PARAMETERS } from '@/data/accessoryParameters';

function buffStat(stat: number, percent: number) {
  return Math.floor(stat * (1 + percent / 100));
}

export function getFormationStat(info: SlotSetting) {
  // Calculate formation stat: (raw stat) * (formation/guest buff) + (accessory stat (10% buff on same attr))
  let appl = info.rawAppl;
  let tech = info.rawTech;
  appl = buffStat(appl, info.formationApplPercents + info.guestApplPercents);
  tech = buffStat(tech, info.formationTechPercents + info.guestTechPercents);
  const accessoryStatSum = info.accessories.reduce((acc, curr) => {
    const { isSameAttr, id } = curr;
    const { appl: accessoryAppl, tech: accessoryTech } = ACCESSORY_PARAMETERS[id].stat;
    return {
      appl: acc.appl + (isSameAttr ? buffStat(accessoryAppl, 10) : accessoryAppl),
      tech: acc.tech + (isSameAttr ? buffStat(accessoryTech, 10) : accessoryTech),
    };
  }, { appl: 0, tech: 0 });
  appl += accessoryStatSum.appl;
  tech += accessoryStatSum.tech;
  return {
    appl,
    tech,
  };
}

interface VoltageInfo {
  critProb: number,
  voltage: number,
  critVoltage: number,
  expVoltage: number,
}

export function getVoltageInfo(info: SlotSetting, cleanse: boolean): VoltageInfo {
  // Step 1. Calculate formation stat
  const {
    appl: formationAppl,
    tech: formationTech,
  } = getFormationStat(info);

  // Step 2. Calculate each factors
  // 1. Base stat buff/debuff
  const baseApplPercent = info.baseApplBuff - info.baseApplDebuff;
  const baseTechPercent = info.baseTechBuff - info.baseTechDebuff;
  // 2. Stat buff/debuff
  const applPercent = info.applBuff - (cleanse ? 0 : info.applDebuff);
  const techPercent = info.techBuff - (cleanse ? 0 : info.techDebuff);
  // 3. Critical factor
  const critFactor = 1.5 + info.critDamageAddPercent / 100;
  // 4. Judgement factor / combo factor / voltage buff
  const { judgementFactor, comboFactor, voltageBuffPercent } = info;
  // 5. SP factor
  const spFactor = info.isSP ? 1.1 : 1.0;
  // 6. AC factor
  const acFactor = info.isAC ? 1.1 : 1.0;
  // 7. Subunit Vo factor
  const { subunitVoFactor } = info;
  // 8. Attribute factor
  const attrFactor = info.isSameAttr ? (1.2 + info.sameAttrBonusPercent / 100) : 1.0;
  // 9. Stamina factor
  const { staminaFactor } = info;

  const beforeCritCalc = (stat: number) => {
    let val = stat;
    val = buffStat(val, baseApplPercent);
    val = buffStat(val, applPercent);
    return val;
  };
  const afterCritCalc = (stat: number) => {
    let val = stat;
    val = Math.floor(val * judgementFactor);
    val = Math.floor(val * comboFactor);
    val = buffStat(val, voltageBuffPercent);
    val = Math.floor(val * spFactor);
    val = Math.floor(val * acFactor);
    val = Math.floor(val * subunitVoFactor);
    val = Math.floor(val * attrFactor);
    val = Math.floor(val * staminaFactor);
    return val;
  };

  // Step 3. Calculate voltage
  let voltage = formationAppl;
  voltage = beforeCritCalc(voltage);
  voltage = afterCritCalc(voltage);
  voltage = Math.min(info.maxDamage, voltage); // Max damage cutoff

  // Step 4. Calculate crit voltage
  let critVoltage = formationAppl;
  critVoltage = beforeCritCalc(critVoltage);
  critVoltage = Math.floor(critVoltage * critFactor);
  critVoltage = afterCritCalc(critVoltage);
  critVoltage = Math.min(info.maxDamage, critVoltage); // Max damage cutoff

  // Step 5. Calculate crit prob
  let effectiveAppl = formationAppl;
  let effectiveTech = formationTech;
  effectiveAppl = buffStat(effectiveAppl, baseApplPercent);
  effectiveTech = buffStat(effectiveTech, baseTechPercent);
  effectiveAppl = buffStat(effectiveAppl, applPercent);
  effectiveTech = buffStat(effectiveTech, techPercent);
  effectiveAppl = Math.floor(effectiveAppl * attrFactor);
  effectiveTech = Math.floor(effectiveTech * attrFactor);
  let criticalProb = critProb(effectiveAppl, effectiveTech, info.critBasePercent) + info.critProbAddPercent;
  criticalProb = Math.max(criticalProb, 0);
  criticalProb = Math.min(100, criticalProb);

  return {
    critProb: criticalProb,
    voltage,
    critVoltage,
    expVoltage: voltage * (1 - criticalProb / 100) + critVoltage * (criticalProb / 100),
  };
}
