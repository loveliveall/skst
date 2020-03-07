import { createFSA, TActions } from '../redux-utils/utils';

export const CardComparatorActionTypes = {
  CARD_ADD: 'CARD_COMPARATOR_CARD_ADD',
  CARD_ID_EDIT: 'CARD_COMPARATOR_CARD_ID_EDIT',
  CARD_UNCAP_EDIT: 'CARD_COMPARATOR_CARD_UNCAP_EDIT',
  CARD_KIZUNA_EDIT: 'CARD_COMPARATOR_CARD_KIZUNA_EDIT',
  CARD_REMOVE: 'CARD_COMPARATOR_CARD_REMOVE',

  SELECT_MODAL_OPEN: 'CARD_COMPARATOR_SELECT_MODAL_OPEN',
  SELECT_MODAL_CLOSE: 'CARD_COMPARATOR_SELECT_MODAL_CLOSE',
} as const;

export const CardComparatorActionCreators = {
  addCard: (key: number, cardId: number) => createFSA(
    CardComparatorActionTypes.CARD_ADD, { key, cardId },
  ),
  editCardId: (key: number, cardId: number) => createFSA(
    CardComparatorActionTypes.CARD_ID_EDIT, { key, cardId },
  ),
  editCardUncap: (key: number, uncap: number) => createFSA(
    CardComparatorActionTypes.CARD_UNCAP_EDIT, { key, uncap },
  ),
  editCardKizuna: (key: number, kizunaLv: number) => createFSA(
    CardComparatorActionTypes.CARD_KIZUNA_EDIT, { key, kizunaLv },
  ),
  removeCard: (key: number) => createFSA(
    CardComparatorActionTypes.CARD_REMOVE, { key },
  ),
  openCardSelectModal: (key: number | null) => createFSA(
    CardComparatorActionTypes.SELECT_MODAL_OPEN, { key },
  ),
  closeCardSelectModal: () => createFSA(
    CardComparatorActionTypes.SELECT_MODAL_CLOSE, {},
  ),
};

export type CardComparatorActions = TActions<typeof CardComparatorActionCreators>;
