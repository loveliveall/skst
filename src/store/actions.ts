import { CardsActionCreators } from './cards/actions';
import { DBActionCreators } from './db/actions';
import { DeckSimulatorActionCreators } from './deck-simulator/actions';

export const AC = {
  cards: CardsActionCreators,
  db: DBActionCreators,
  deckSimulator: DeckSimulatorActionCreators,
};
