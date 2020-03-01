import { createFSA, TActions } from '../redux-utils/utils';

export const DeckSimulatorActionTypes = {
  SONG_ATTRIBUTE_ID_SET: 'DECK_SIMULATOR_SONG_ATTRIBUTE_ID_SET',
  LIVE_EFFECT_ADD: 'DECK_SIMULATOR_LIVE_EFFECT_ADD',
  LIVE_EFFECT_TARGET_EDIT: 'DECK_SIMULATOR_LIVE_EFFECT_TARGET_EDIT',
  LIVE_EFFECT_TYPE_EDIT: 'DECK_SIMULATOR_LIVE_EFFECT_TYPE_EDIT',
  LIVE_EFFECT_AMOUNT_EDIT: 'DECK_SIMULATOR_LIVE_EFFECT_AMOUNT_EDIT',
  LIVE_EFFECT_REMOVE: 'DECK_SIMULATOR_LIVE_EFFECT_REMOVE',
  DECK_ADD: 'DECK_SIMULATOR_DECK_ADD',
  DECK_SLOT_CARD_ID_EDIT: 'DECK_SIMULATOR_DECK_SLOT_CARD_ID_EDIT',
  DECK_SLOT_SPEC_LV_EDIT: 'DECK_SIMULATOR_DECK_SLOT_SPEC_LV_EDIT',
  DECK_SLOT_APPL_EDIT: 'DECK_SIMULATOR_DECK_SLOT_APPL_EDIT',
  DECK_SLOT_STAM_EDIT: 'DECK_SIMULATOR_DECK_SLOT_STAM_EDIT',
  DECK_SLOT_TECH_EDIT: 'DECK_SIMULATOR_DECK_SLOT_TECH_EDIT',
  DECK_REMOVE: 'DECK_SIMULATOR_DECK_REMOVE',
  CARD_SELECT_MODAL_OPEN: 'DECK_SIMULATOR_CARD_SELECT_MODAL_OPEN',
  CARD_SELECT_MODAL_CLOSE: 'DECK_SIMULATOR_CARD_SELECT_MODAL_CLOSE',
} as const;

export const DeckSimulatorActionCreators = {
  setSongAttributeId: (attributeId: number | null) => createFSA(
    DeckSimulatorActionTypes.SONG_ATTRIBUTE_ID_SET, { attributeId },
  ),
  addLiveEffect: (key: number, effectTargetId: number, effectTypeId: number, amount: number) => createFSA(
    DeckSimulatorActionTypes.LIVE_EFFECT_ADD, {
      key, effectTargetId, effectTypeId, amount,
    },
  ),
  editLiveEffectTarget: (key: number, effectTargetId: number) => createFSA(
    DeckSimulatorActionTypes.LIVE_EFFECT_TARGET_EDIT, { key, effectTargetId },
  ),
  editLiveEffectType: (key: number, effectTypeId: number) => createFSA(
    DeckSimulatorActionTypes.LIVE_EFFECT_TYPE_EDIT, { key, effectTypeId },
  ),
  editLiveEffectAmount: (key: number, amount: number) => createFSA(
    DeckSimulatorActionTypes.LIVE_EFFECT_AMOUNT_EDIT, { key, amount },
  ),
  removeLiveEffect: (key: number) => createFSA(
    DeckSimulatorActionTypes.LIVE_EFFECT_REMOVE, { key },
  ),
  addDeck: (key: number) => createFSA(
    DeckSimulatorActionTypes.DECK_ADD, { key },
  ),
  editDeckSlotCardId: (key: number, slotIdx: number, cardId: number | null) => createFSA(
    DeckSimulatorActionTypes.DECK_SLOT_CARD_ID_EDIT, { key, slotIdx, cardId },
  ),
  editDeckSlotSpecLv: (key: number, slotIdx: number, specLv: number) => createFSA(
    DeckSimulatorActionTypes.DECK_SLOT_SPEC_LV_EDIT, { key, slotIdx, specLv },
  ),
  editDeckSlotAppl: (key: number, slotIdx: number, appl: number) => createFSA(
    DeckSimulatorActionTypes.DECK_SLOT_APPL_EDIT, { key, slotIdx, appl },
  ),
  editDeckSlotStam: (key: number, slotIdx: number, stam: number) => createFSA(
    DeckSimulatorActionTypes.DECK_SLOT_STAM_EDIT, { key, slotIdx, stam },
  ),
  editDeckSlotTech: (key: number, slotIdx: number, tech: number) => createFSA(
    DeckSimulatorActionTypes.DECK_SLOT_TECH_EDIT, { key, slotIdx, tech },
  ),
  removeDeck: (key: number) => createFSA(
    DeckSimulatorActionTypes.DECK_REMOVE, { key },
  ),
  openCardSelectModal: (key: number, slotIdx: number) => createFSA(
    DeckSimulatorActionTypes.CARD_SELECT_MODAL_OPEN, { key, slotIdx },
  ),
  closeCardSelectModal: () => createFSA(
    DeckSimulatorActionTypes.CARD_SELECT_MODAL_CLOSE, {},
  ),
};

export type DeckSimulatorActions = TActions<typeof DeckSimulatorActionCreators>;
