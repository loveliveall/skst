import { AppState } from './reducer';

export const SEL = {
  cardsMemberFilter: (state: AppState) => state.cards.filter.member,
  cardsAttributeFilter: (state: AppState) => state.cards.filter.attribute,
  cardsRoleFilter: (state: AppState) => state.cards.filter.role,
  cardsUncapFilter: (state: AppState) => state.cards.filter.uncap,
  cardsList: (state: AppState) => state.cards.list,
};
