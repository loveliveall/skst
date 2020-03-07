import { CardsActionCreators } from './cards/actions';
import { CardComparatorActionCreators } from './card-comparator/actions';
import { DBActionCreators } from './db/actions';
import { DeckSimulatorActionCreators } from './deck-simulator/actions';

export const AC = {
  cards: CardsActionCreators,
  cardComparator: CardComparatorActionCreators,
  db: DBActionCreators,
  deckSimulator: DeckSimulatorActionCreators,
};
