import equal from 'fast-deep-equal';

import { AppState } from './reducer';
import { initialFilter, initialBuff } from './cards/reducers';

export const SEL = {
  cardsMemberFilter: (state: AppState) => state.cards.filterDraft.member,
  cardsAttributeFilter: (state: AppState) => state.cards.filterDraft.attribute,
  cardsRoleFilter: (state: AppState) => state.cards.filterDraft.role,
  cardsRarityFilter: (state: AppState) => state.cards.filterDraft.rarity,
  cardsSpecCategoryFilter: (state: AppState) => state.cards.filterDraft.specCategory,
  cardsSpecTargetFilter: (state: AppState) => state.cards.filterDraft.specTarget,
  cardsIndivPCategoryFilter: (state: AppState) => state.cards.filterDraft.indivPCategory,
  cardsIndivPTargetFilter: (state: AppState) => state.cards.filterDraft.indivPTarget,
  cardsUncapFilter: (state: AppState) => state.cards.filterDraft.uncap,
  cardsRoleEffectBuff: (state: AppState) => state.cards.buffDraft.roleEffect,
  cardsIndivPEffectBuff: (state: AppState) => state.cards.buffDraft.indivPEffect,
  cardsAttributeBuff: (state: AppState) => state.cards.buffDraft.attributeId,
  cardsDiffAttrDebuf: (state: AppState) => state.cards.buffDraft.diffAttrDebuf,
  filterInSync: (state: AppState) => equal(state.cards.filter, state.cards.filterDraft)
    && equal(state.cards.buff, state.cards.buffDraft),
  filterInitial: (state: AppState) => equal(state.cards.filter, initialFilter)
    && equal(state.cards.buff, initialBuff),
  cardsFilter: (state: AppState) => state.cards.filter,
  cardsBuff: (state: AppState) => state.cards.buff,

  dbIsJPEdition: (state: AppState) => state.db.isJPEdition,
  dbCardTable: (state: AppState) => state.db.cardTable,
  dbGachaTable: (state: AppState) => state.db.gachaTable,
  dbEventTable: (state: AppState) => state.db.eventTable,

  simulatorSongAttributeId: (state: AppState) => state.deckSimulator.songAttributeId,
  simulatorLiveEffect: (state: AppState) => state.deckSimulator.liveEffect,
  simulatorDeckSettings: (state: AppState) => state.deckSimulator.deckSettings,
  simulatorSingleDeck: (state: AppState, key: number) => state.deckSimulator.deckSettings.find(
    (item) => item.key === key,
  ),
  simulatorCardSelectModal: (state: AppState) => state.deckSimulator.cardSelectModal,
};
