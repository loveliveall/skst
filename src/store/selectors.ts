import equal from 'fast-deep-equal';

import { AppState } from './reducer';

export const SEL = {
  cardsMemberFilter: (state: AppState) => state.cards.filterDraft.member,
  cardsAttributeFilter: (state: AppState) => state.cards.filterDraft.attribute,
  cardsRoleFilter: (state: AppState) => state.cards.filterDraft.role,
  cardsUncapFilter: (state: AppState) => state.cards.filterDraft.uncap,
  cardsList: (state: AppState) => state.cards.list,
  filterInSync: (state: AppState) => equal(state.cards.filter, state.cards.filterDraft),
};
