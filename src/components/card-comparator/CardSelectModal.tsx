import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import CardModal from '@/components/common/CardSelectModal';

import { AppState, SEL, AC } from '@/store';

interface PropsFromState {
  cardSettings: ReturnType<typeof SEL.cardComparatorCardSettings>,
  cardSelectModal: ReturnType<typeof SEL.cardComparatorCardSelectModal>,
}
interface PropsFromDispatch {
  addCard: (cardId: number) => void,
  editCard: (key: number, cardId: number) => void,
  closeModal: () => void,
}
type CardSelectModalProps = PropsFromState & PropsFromDispatch;

const CardSelectModal: React.FC<CardSelectModalProps> = ({
  cardSettings, cardSelectModal, addCard, editCard, closeModal,
}) => {
  const targetKey = cardSelectModal.key;
  if (targetKey === null) {
    // New card
    return (
      <CardModal
        open={cardSelectModal.open}
        prevCardId={undefined}
        closeModal={closeModal}
        applyCardSelection={(cardId) => addCard(cardId)}
      />
    );
  }
  const targetCard = cardSettings.find((cardSetting) => cardSetting.key === targetKey);
  const oriCardId = targetCard?.card.cardId;
  return (
    <CardModal
      open={cardSelectModal.open}
      prevCardId={oriCardId}
      closeModal={closeModal}
      applyCardSelection={(cardId) => editCard(targetKey, cardId)}
    />
  );
};

const mapStateToProps = (state: AppState): PropsFromState => ({
  cardSettings: SEL.cardComparatorCardSettings(state),
  cardSelectModal: SEL.cardComparatorCardSelectModal(state),
});
const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => ({
  addCard: (cardId) => {
    dispatch(AC.cardComparator.addCard(Math.random(), cardId));
  },
  editCard: (key, cardId) => {
    dispatch(AC.cardComparator.editCardId(key, cardId));
  },
  closeModal: () => {
    dispatch(AC.cardComparator.closeCardSelectModal());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CardSelectModal);
