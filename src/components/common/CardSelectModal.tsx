import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { FlexBox, StyledButton } from '@/components/Styles';

import { AppState, SEL } from '@/store';
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

interface OwnProps {
  open: boolean,
  prevCardId: number | undefined,
  closeModal: () => void,
  applyCardSelection: (cardId: number) => void,
}
interface PropsFromState {
  cardTable: ReturnType<typeof SEL.dbCardTable>,
}
type CardSelectModalProps = OwnProps & PropsFromState;

const CardSelectModal: React.FC<CardSelectModalProps> = ({
  open, prevCardId, cardTable, applyCardSelection, closeModal,
}) => (
  <Modal
    isOpen={open}
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
                  applyCardSelection(cardId);
                  closeModal();
                }}
                style={{
                  filter: prevCardId === cardId ? 'grayscale(100%)' : 'grayscale(0%)',
                }}
              />
            )))}
          </FlexBox>
        </FlexItem>
      ))}
    </VFlexBox>
  </Modal>
);

const mapStateToProps = (state: AppState): PropsFromState => ({
  cardTable: SEL.dbCardTable(state),
});

export default connect(mapStateToProps)(CardSelectModal);
