import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import CardModal from '@/components/common/CardSelectModal';

import { AppState, SEL, AC } from '@/store';

interface PropsFromState {
  decks: ReturnType<typeof SEL.simulatorDeckSettings>,
  cardSelectModal: ReturnType<typeof SEL.simulatorCardSelectModal>,
}
interface PropsFromDispatch {
  applyCardSelection: (key: number, slotIdx: number, cardId: number) => void,
  closeModal: () => void,
}
type CardSelectModalProps = PropsFromState & PropsFromDispatch;

const CardSelectModal: React.FC<CardSelectModalProps> = ({
  cardSelectModal, applyCardSelection, closeModal, decks,
}) => {
  const targetDeck = decks.find((deck) => deck.key === cardSelectModal.key);
  const oriCardId = targetDeck?.deck[cardSelectModal.slotIdx].cardId;
  return (
    <CardModal
      open={cardSelectModal.open}
      prevCardId={oriCardId === null ? undefined : oriCardId}
      closeModal={closeModal}
      applyCardSelection={(cardId) => applyCardSelection(cardSelectModal.key, cardSelectModal.slotIdx, cardId)}
    />
  );
};

const mapStateToProps = (state: AppState): PropsFromState => ({
  decks: SEL.simulatorDeckSettings(state),
  cardSelectModal: SEL.simulatorCardSelectModal(state),
});
const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => ({
  applyCardSelection: (key, slotIdx, cardId) => {
    dispatch(AC.deckSimulator.editDeckSlotCardId(key, slotIdx, cardId));
  },
  closeModal: () => {
    dispatch(AC.deckSimulator.closeCardSelectModal());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CardSelectModal);
