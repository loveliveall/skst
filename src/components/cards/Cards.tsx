import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { AC } from '@/store';
import { FlexBox, FixedWrapper, StyledButton } from '@/components/Styles';
import CardFilter from '@/components/cards/CardFilter';
import CardTable from '@/components/cards/CardTable';

const VerticalFlex = styled(FlexBox)`
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const FixedWithPad = styled(FixedWrapper)`
  padding: 4px;
`;

interface PropsFromDispatch {
  applySetting: () => void,
}
type CardsProps = PropsFromDispatch;

const Cards: React.FC<CardsProps> = ({
  applySetting,
}) => (
  <VerticalFlex>
    <FixedWithPad>
      <CardFilter />
    </FixedWithPad>
    <StyledButton
      onClick={() => applySetting()}
    >
      설정 적용
    </StyledButton>
    <FixedWithPad>
      <CardTable />
    </FixedWithPad>
  </VerticalFlex>
);

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => ({
  applySetting: () => {
    dispatch(AC.cards.applySettings());
  },
});

export default connect(null, mapDispatchToProps)(Cards);
