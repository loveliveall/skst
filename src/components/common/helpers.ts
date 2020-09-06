import { CARD } from '@/data/cardList';
import { LIVE_EFFECT_TARGET } from '@/data/liveEffectTarget';
import { MEMBER } from '@/data/memberMetadata';
import { LIVE_EFFECT_TYPE } from '@/data/liveEffectType';

import { SEL } from '@/store';

export function getStatMultiplier(
  card: typeof CARD[number] | undefined,
  liveEffect: ReturnType<typeof SEL.simulatorLiveEffect>,
  stat: 'appl' | 'stam' | 'tech',
  cleanse: boolean,
) {
  const filteredLiveEffect = liveEffect.filter((item) => {
    const effectTarget = LIVE_EFFECT_TARGET[item.effectTargetId];
    if (effectTarget.detail !== undefined) {
      if (card === undefined) return false;
      const member = MEMBER[card.memberId];
      const effectDetail = effectTarget.detail;
      if (effectDetail.category === 'attribute'
      && !(effectDetail.exclude && effectDetail.categoryId !== card.attributeId)
      && !(!effectDetail.exclude && effectDetail.categoryId === card.attributeId)) return false;
      if (effectDetail.category === 'role'
      && !(effectDetail.exclude && effectDetail.categoryId !== card.roleId)
      && !(!effectDetail.exclude && effectDetail.categoryId === card.roleId)) return false;
      if (effectDetail.category === 'group'
      && !(effectDetail.exclude && effectDetail.categoryId !== member.groupId)
      && !(!effectDetail.exclude && effectDetail.categoryId === member.groupId)) return false;
      if (effectDetail.category === 'grade'
      && !(effectDetail.exclude && effectDetail.categoryId !== member.grade)
      && !(!effectDetail.exclude && effectDetail.categoryId === member.grade)) return false;
      if (effectDetail.category === 'unit'
      && !(effectDetail.exclude && effectDetail.categoryId !== member.unitId)
      && !(!effectDetail.exclude && effectDetail.categoryId === member.unitId)) return false;
    }
    return true;
  });
  return filteredLiveEffect.reduce((multiplier, item) => {
    const effectType = LIVE_EFFECT_TYPE[item.effectTypeId];
    const _delta = (effectType.type === 'inc' ? 1 : -1) * item.amount; // eslint-disable-line no-underscore-dangle
    const delta = _delta < 0 && cleanse ? 0 : _delta;
    if (effectType.stat === 'all') {
      return {
        ...multiplier,
        stat: multiplier.stat + delta,
      };
    }
    if (stat === 'appl' && effectType.stat === 'baseAppl') {
      return {
        ...multiplier,
        baseStat: multiplier.baseStat + delta,
      };
    }
    if (stat === 'appl' && effectType.stat === 'appl') {
      return {
        ...multiplier,
        stat: multiplier.stat + delta,
      };
    }
    return multiplier;
  }, { baseStat: 100, stat: 100 }); // %
}
