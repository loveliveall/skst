import { CARD } from '@/data/cardList';
import { RARITY, RARITYID } from '@/data/cardMetadata';
import { MEMBER } from '@/data/memberMetadata';
import { CardSource, CARD_SOURCE } from '@/data/cardSource';
import { GACHA, GachaType } from '@/data/gacha';
import {
  SKILL_TRIGGER_TYPE,
  SKILL_CONDITION_TYPE,
  SKILL_TARGET,
  SKILL_EFFECT,
  EFFECT_CATEGORY,
  SKILL_LEVEL_MAP,
} from '@/data/skillMetadata';
import {
  Skill,
  SkillCondition,
  SkillEffect,
} from '@/data/types';

export function choice<T>(arr: T[]): T {
  if (arr.length === 0) throw Error('Cannot choice from empty array');
  return arr[Math.floor(Math.random() * arr.length)]!; // We can assert non-nullity if length >= 1
}

export function defaultCmp<T>(a: T, b: T): number {
  if (a < b) return -1;
  if (a === b) return 0;
  return 1;
}

export function getCardIconAssetPath(id: number, isAwaken: boolean): string {
  const card = CARD[id];
  if (card === undefined) throw Error(`Card ${id} not found`);
  const prefix = '/images/card-icons';
  const lowerSymbol = RARITY[card.rarityId].symbol.toLowerCase();
  const { enName } = MEMBER[card.memberId]!;
  const base = `${prefix}/${id}_${lowerSymbol}_${enName}`;
  return isAwaken ? `${base}_awaken.png` : `${base}.png`;
}

export function getCardSymbol(id: number, isAwaken: boolean): string {
  const card = CARD[id];
  if (card === undefined) throw Error(`Card ${id} not found`);
  const lowerSymbol = RARITY[card.rarityId].symbol.toLowerCase();
  const { enName } = MEMBER[card.memberId]!;
  const base = `${id}-${lowerSymbol}-${enName}`;
  return isAwaken ? `${base}-awaken` : base;
}

export function getCardTitle(id: number, isAwaken: boolean): string {
  const card = CARD[id];
  if (card === undefined) throw Error(`Card ${id} not found`);
  const rarity = RARITY[card.rarityId].symbol;
  const member = MEMBER[card.memberId]!;
  const base = `#${id} ${rarity} ${member.shortName}`;
  return isAwaken ? `${base} 각성` : base;
}

export function getCardSrc(cardId: number): CardSource[number] {
  const src = CARD_SOURCE[cardId];
  if (src === undefined) throw Error(`Source for card ${cardId} not found`);
  return src;
}

export function gachaTypeToLabel(gachaType: GachaType): string {
  if (gachaType === 'allstar') return '일반';
  if (gachaType === 'pickup') return '픽업';
  if (gachaType === 'event') return '이벤트';
  if (gachaType === 'fes') return '페스';
  if (gachaType === 'party') return '파티';
  return 'N/A';
}

export function getSkillLevelMap(cardId: number) {
  const card = CARD[cardId];
  if (card === undefined) throw Error(`Card ${cardId} not found`);
  if (card.rarityId === RARITYID.R) return SKILL_LEVEL_MAP[1]!;
  if (card.rarityId === RARITYID.SR) return SKILL_LEVEL_MAP[2]!;
  if (card.rarityId === RARITYID.UR) {
    const src = getCardSrc(cardId);
    if (src.type === 'gacha' && GACHA[src.gachaId]?.type === 'party') {
      return SKILL_LEVEL_MAP[4]!;
    }
    return SKILL_LEVEL_MAP[3]!;
  }
  throw Error(`MUST NOT REACH HERE. Card ${cardId}`);
}

function processTrigger(triggerTypeId: number, conditions: SkillCondition[]) {
  const triggerType = (() => {
    if (triggerTypeId === 255) return null;
    const tType = SKILL_TRIGGER_TYPE[triggerTypeId];
    if (tType === undefined) throw Error(`Trigger type ${triggerTypeId} not found`);
    return tType.str;
  })();
  const condition = (() => {
    if (conditions.length === 0) return null;
    return conditions.map((cond) => {
      const typeId = cond.type;
      const cType = SKILL_CONDITION_TYPE[typeId];
      if (cType === undefined) throw Error(`Condition type ${typeId} not found`);
      if ([2, 3, 5].includes(typeId)) {
        let { value } = cond;
        if (typeId === 2) value /= 100;
        return cType.str.replace('X', `${value}`);
      }
      if (typeId === 6) return cType.str;
      return 'N/A';
    }).join(', ');
  })();
  return {
    triggerType,
    condition,
  };
}

function processEffectFinishType(finishTypeId: number, finishTypeValue: number) {
  if (finishTypeId === 1) return '게임 종료까지';
  if (finishTypeId === 2) return `${finishTypeValue} 노트 동안`; // Duration
  if (finishTypeId === 3) return null; // Instant
  if (finishTypeId === 4) return '어필 찬스 종료까지';
  if (finishTypeId === 7) {
    if (finishTypeValue === 1) return '다음';
    return `다음 ${finishTypeValue}회의`;
  }
  if (finishTypeId === 255) return null; // Not finish
  throw new Error(`Finish type ${finishTypeId} not handled`);
}

export function isPercentValue(effect: SkillEffect) {
  const skillEffect = SKILL_EFFECT[effect.type];
  if (skillEffect === undefined) throw Error(`Effect type ${effect.type} not found`);
  if (skillEffect.scaleType === 'value') return false;
  if (skillEffect.scaleType === 'mixed') {
    if (effect.calcType === 1) return false;
  }
  return true;
}

function getSingleEffectStr(effect: SkillEffect) {
  const finishStr = processEffectFinishType(effect.finishType, effect.finishValue);
  const skillEffect = SKILL_EFFECT[effect.type];
  if (skillEffect === undefined) throw Error(`Effect type ${effect.type} not found`);
  const isPercent = isPercentValue(effect);
  const values = (isPercent ? effect.values.map((e) => e / 100) : effect.values).join(' / ');
  const suffix = effect.calcType === 3 ? '(특수)' : '';
  const onlyEffectStr = `${skillEffect.str.replace('X', `${values}${isPercent ? '%' : ''}`)}${suffix}`;
  return finishStr === null ? onlyEffectStr : `${finishStr} ${onlyEffectStr}`;
}
function getEffectCategoryId(effectTypes: number[]) {
  const type1 = effectTypes[0];
  if (type1 === undefined) throw Error('effectTypes must not be empty list');
  const type2 = effectTypes[1];
  if (type2 === undefined) {
    // Single effect type
    if ([17, 26, 28, 119].includes(type1)) return 1;
    if ([20].includes(type1)) return 2;
    if ([21, 40].includes(type1)) return 3;
    if ([6].includes(type1)) return 4;
    if ([5, 97, 134, 116].includes(type1)) return 5;
    if ([106].includes(type1)) return 6;
    if ([4, 94, 113, 114].includes(type1)) return 7;
    if ([22, 33].includes(type1)) return 8;
    if ([19, 29].includes(type1)) return 9;
    if ([3, 91, 92, 112].includes(type1)) return 10;
    if ([23, 25, 108].includes(type1)) return 11;
    if ([60].includes(type1)) return 12;
    if ([18].includes(type1)) return 13;
    if ([2, 90, 109, 110].includes(type1)) return 14;
    if ([118].includes(type1)) return 15;

    if ([10].includes(type1)) return 2001;
    if ([9].includes(type1)) return 2002;
    if ([11].includes(type1)) return 2003;
    throw Error(`Effect type ${type1} does not have effect category`);
  }
  // Dual effect type
  if (type1 === 91 && type2 === 108) return 1001;
  if (type1 === 17 && type2 === 90) return 1002;
  if (type1 === 116 && type2 === 114) return 1003;

  if (type1 === 10 && type2 === 9) return 3001;
  // TODO: Merge this
  if (type1 === 10 && type2 === 11) return 3002;
  if (type1 === 11 && type2 === 10) return 3002;
  if (type1 === 11 && type2 === 9) return 3003;
  throw Error(`Effect type ${type1}, ${type2} does not have effect category`);
}
function processEffects(effects: SkillEffect[]) {
  const effectTypes = effects.map((e) => e.type);
  const effectCategoryId = getEffectCategoryId(effectTypes);
  const effectCategory = EFFECT_CATEGORY[effectCategoryId];
  if (effectCategory === undefined) throw Error(`Effect category ${effectCategoryId} not found`);
  return {
    effectCategoryId,
    effectCategory,
    effectStrs: effects.map((e) => getSingleEffectStr(e)),
  };
}

export function processSkill(skill: Skill) {
  // TODO: Effect processing logic
  const { triggerType, condition } = processTrigger(skill.triggerTypeId, skill.conditions);
  const targets = skill.targetIds.map((tId) => {
    const t = SKILL_TARGET[tId];
    if (t === undefined) throw Error(`Skill target ${tId} not found`);
    return t.str;
  }).filter((e) => e !== '');
  const { effectStrs, effectCategory, effectCategoryId } = processEffects(skill.effects);
  return {
    triggerTypeId: skill.triggerTypeId,
    triggerType,
    triggerProb: skill.triggerProb / 100,
    targetIds: skill.targetIds,
    targets,
    condition,
    effectStrs,
    effectCategoryId,
    effectCategory,
  };
}
