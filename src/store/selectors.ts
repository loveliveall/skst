import equal from 'fast-deep-equal';

import { AppState } from './reducer';

export const SEL = {
  cardsMemberFilter: (state: AppState) => state.cards.filterDraft.member,
  cardsAttributeFilter: (state: AppState) => state.cards.filterDraft.attribute,
  cardsRoleFilter: (state: AppState) => state.cards.filterDraft.role,
  cardsRarityFilter: (state: AppState) => state.cards.filterDraft.rarity,
  cardsUncapFilter: (state: AppState) => state.cards.filterDraft.uncap,
  cardsRoleEffectBuff: (state: AppState) => state.cards.buffDraft.roleEffect,
  cardsAttributeBuff: (state: AppState) => state.cards.buffDraft.attributeId,
  cardsDiffAttrDebuf: (state: AppState) => state.cards.buffDraft.diffAttrDebuf,
  cardsList: (state: AppState) => state.cards.list,
  filterInSync: (state: AppState) => equal(state.cards.filter, state.cards.filterDraft)
    && equal(state.cards.buff, state.cards.buffDraft),
};
