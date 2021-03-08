export function getCritProb(tech: number, critOffset: number): number {
  // 0.003 * tech + critOffset is crit prob in % value
  // However, critOffset value is 100 times larger than % value in this app (i.e., 1500 for 15%)
  // so we do (0.3 * tech + critOffset) / 100 which finally results in % value
  return (0.3 * tech + critOffset) / 100;
}

export function statModifier(
  baseAppl: number, baseStam: number, baseTech: number,
  passiveApplBuff: number, passiveStamBuff: number, passiveTechBuff: number, // Percent value (i.e., 20 means 20%), sum of all passive buffs applied
  accApplSum: number, accStamSum: number, accTechSum: number, // Attribute revision applied (i.e., x1.1 on same attribute)
  eventApplBuff: number, eventStamBuff: number, eventTechBuff: number, // Percent value (i.e., 20 means 20%), sum of all event buffs applied
  baseApplMod: number, // Percent value (i.e., 20 means +20%, -20 means -20%), sum of all base appl modifiers
  applMod: number, // Analogous with above
  applSpecialMod: number, // Analogous with above
  critDamageBuff: number, // Analogous with above
  critOffset: number, // 0 or 1500, for now
  judgementMod: number, // 1.2, 1.1, 1.0, 0.8, 0
  comboMod: number, // 1.0, 1.01, 1.02, 1.03, 1.05
  acBaseApplMod: number, // Percent value (i.e., 20 means +20%, -20 means -20%), sum of all AC base appl modifiers
  isSPTime: boolean,
  voltageModRatio: number, // Analogus to acBaseApplMod
  voltageModFixed: number, // Fixed amount
  isACTime: boolean,
  stratMod: number, // +10% will be 1.1
  staminaRemain: number, // 100 to 0
  acBaseVolMod: number, // Analogus to acBaseApplMod
  maxVoltage: number,
  isSameAttr: boolean,
) {
  // Ref. https://www.notion.so/Deep-Dive-02a4e8b610f847f7a106f9b8cc7e75c7
  // Step 1. Live base parameter calculation
  //   Step 1-2. Use base parameter
  let liveBaseAppl = baseAppl;
  let liveBaseStam = baseStam;
  let liveBaseTech = baseTech;
  //   Step 1-3. Apply passive skill
  liveBaseAppl = Math.floor((1 + passiveApplBuff / 100) * liveBaseAppl);
  liveBaseStam = Math.floor((1 + passiveStamBuff / 100) * liveBaseStam);
  liveBaseTech = Math.floor((1 + passiveTechBuff / 100) * liveBaseTech);
  //   Step 1-4. Apply accessory parameters
  liveBaseAppl += accApplSum;
  liveBaseStam += accStamSum;
  liveBaseTech += accTechSum;

  // Step 2. Live parameter calculation
  let liveAppl = liveBaseAppl;
  let liveStam = liveBaseStam;
  let liveTech = liveBaseTech;
  //   Step 2-1. Event effect
  liveAppl = Math.floor((1 + eventApplBuff / 100) * liveAppl);
  liveStam = Math.floor((1 + eventStamBuff / 100) * liveStam);
  liveTech = Math.floor((1 + eventTechBuff / 100) * liveTech);
  //   Step 2-2. Base appeal add/sub
  liveAppl = Math.floor((1 + baseApplMod / 100) * liveAppl);
  //   Step 2-3. Appeal add/sub
  liveAppl = Math.floor((1 + applMod / 100) * liveAppl);
  //   Step 2-4. Appeal add/sub (special)
  liveAppl = Math.floor((1 + applSpecialMod / 100) * liveAppl);

  // Step 3. Voltage calculation
  let voltage = liveAppl;
  let critVoltage = liveAppl;
  //   Step 3-1. Apply critical
  critVoltage = Math.floor((1.5 + critDamageBuff / 100) * critVoltage);
  // NOTE: WE DO NOTHING ABOUT CRITICAL RATE BUFF/DEBUFF SINCE IT IS NOT FULLY DETERMINED
  const critProb = getCritProb(Math.floor(liveTech * (isSameAttr ? 1.2 : 1.0)), critOffset);

  //   Step 3-2. Apply judgement
  voltage = Math.floor(judgementMod * voltage);
  critVoltage = Math.floor(judgementMod * critVoltage);
  //   Step 3-3. Apply combo
  voltage = Math.floor(comboMod * voltage);
  critVoltage = Math.floor(comboMod * critVoltage);
  //   Step 3-4. Apply AC base appeal add/sub
  voltage = Math.floor((1 + acBaseApplMod / 100) * voltage);
  critVoltage = Math.floor((1 + acBaseApplMod / 100) * critVoltage);
  //   Step 3-5. Apply SP time bonus
  voltage = Math.floor(voltage * (isSPTime ? 1.1 : 1.0));
  critVoltage = Math.floor(critVoltage * (isSPTime ? 1.1 : 1.0));
  //   Step 3-6. Add voltage
  voltage = Math.floor((1 + voltageModRatio / 100) * voltage + voltageModFixed);
  critVoltage = Math.floor((1 + voltageModRatio / 100) * critVoltage + voltageModFixed);
  //   Step 3-7. Apply AC time bonus
  voltage = Math.floor(voltage * (isACTime ? 1.1 : 1.0));
  critVoltage = Math.floor(critVoltage * (isACTime ? 1.1 : 1.0));
  //   Step 3-8. Apply strat effect
  voltage = Math.floor(voltage * stratMod);
  critVoltage = Math.floor(critVoltage * stratMod);
  //   Step 3-9. Apply attribute effect
  voltage = Math.floor(voltage * (isSameAttr ? 1.2 : 1.0));
  critVoltage = Math.floor(critVoltage * (isSameAttr ? 1.2 : 1.0));
  //   Step 3-10. Apply stamina effect
  const staminaMod = (() => {
    if (staminaRemain >= 70) return 1.0;
    if (staminaRemain >= 30) return 0.8;
    return 0.6;
  })();
  voltage = Math.floor(voltage * staminaMod);
  critVoltage = Math.floor(critVoltage * staminaMod);
  //   Step 3-11. Apply AC base voltage modifier
  voltage = Math.floor((1 + acBaseVolMod / 100) * voltage);
  critVoltage = Math.floor((1 + acBaseVolMod / 100) * critVoltage);
  //   Step 3-12. Apply max voltage
  voltage = Math.min(voltage, maxVoltage);
  critVoltage = Math.min(critVoltage, maxVoltage);
  return {
    a: Math.floor(liveAppl * (isSameAttr ? 1.2 : 1.0)),
    s: Math.floor(liveStam * (isSameAttr ? 1.2 : 1.0)),
    t: Math.floor(liveTech * (isSameAttr ? 1.2 : 1.0)),
    critProb,
    voltage,
    critVoltage,
  };
}
