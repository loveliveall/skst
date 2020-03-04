import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Modal from 'react-modal';
import { FlexBox, StyledButton } from '@/components/Styles';

import { AppState, SEL, AC } from '@/store';
import { getCardIconAssetPath, getCardSymbol } from '@/data/cardList';
import { RARITY } from '@/data/cardMetadata';
import { MEMBER } from '@/data/memberMetadata';

const VFlexBox = styled(FlexBox)`
  width: 100%;
  flex-direction: column;
`;
const FlexItem = styled.div`
  padding: 2px;
  border-bottom: 1px solid #ddd;
`;
const IconImgButton = styled.img`
  padding: 4px;
  width: 60px;
  height: 60px;
  cursor: pointer;
`;

interface PropsFromState {
  decks: ReturnType<typeof SEL.simulatorDeckSettings>,
  cardSelectModal: ReturnType<typeof SEL.simulatorCardSelectModal>,
  cardTable: ReturnType<typeof SEL.dbCardTable>,
}
interface PropsFromDispatch {
  applyCardSelection: (key: number, slotIdx: number, cardId: number) => void,
  closeModal: () => void,
}
type CardSelectModalProps = PropsFromState & PropsFromDispatch;

const CardSelectModal: React.FC<CardSelectModalProps> = ({
  cardSelectModal, cardTable, applyCardSelection, closeModal, decks,
}) => {
  const targetDeck = decks.find((deck) => deck.key === cardSelectModal.key);
  const oriCardId = targetDeck?.deck[cardSelectModal.slotIdx].cardId;
  return (
    <Modal
      isOpen={cardSelectModal.open}
      style={{
        overlay: {
          zIndex: 10,
        },
      }}
      ariaHideApp={false}
    >
      <VFlexBox>
        <FlexItem>
          <StyledButton
            onClick={closeModal}
            style={{ float: 'right' }}
          >
            닫기
          </StyledButton>
        </FlexItem>
        {Object.keys(MEMBER).map(Number).map((id) => (
          <FlexItem key={id}>
            <FlexBox>
              {Object.keys(RARITY).map(Number).map((rarityId) => Object.keys(cardTable).map(Number).filter(
                (cardId) => cardTable[cardId].memberId === id && cardTable[cardId].rarityId === rarityId,
              ).map((cardId) => (
                <IconImgButton
                  key={cardId}
                  src={getCardIconAssetPath(cardId, true)}
                  alt={`${getCardSymbol(cardId, true)}-icon`}
                  title={getCardSymbol(cardId, false)}
                  onClick={() => {
                    applyCardSelection(cardSelectModal.key, cardSelectModal.slotIdx, cardId);
                    closeModal();
                  }}
                  style={{
                    filter: oriCardId === cardId ? 'grayscale(100%)' : 'grayscale(0%)',
                  }}
                />
              )))}
            </FlexBox>
          </FlexItem>
        ))}
      </VFlexBox>
    </Modal>
  );
};

const mapStateToProps = (state: AppState): PropsFromState => ({
  decks: SEL.simulatorDeckSettings(state),
  cardSelectModal: SEL.simulatorCardSelectModal(state),
  cardTable: SEL.dbCardTable(state),
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
