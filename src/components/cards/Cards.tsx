import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { AppState, AC, SEL } from '@/store';
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

const ActionButton = styled(StyledButton)`
  margin: 2px;
`;

interface PropsFromState {
  inSync: ReturnType<typeof SEL.filterInSync>,
}
interface PropsFromDispatch {
  applySetting: () => void,
  resetSetting: () => void,
}
type CardsProps = PropsFromState & PropsFromDispatch;

const Cards: React.FC<CardsProps> = ({
  inSync, applySetting, resetSetting,
}) => (
  <VerticalFlex>
    <FixedWithPad>
      <CardFilter />
    </FixedWithPad>
    <FlexBox>
      <ActionButton
        disabled={inSync}
        onClick={() => applySetting()}
      >
        설정 적용
      </ActionButton>
      <ActionButton
        disabled={inSync}
        onClick={() => resetSetting()}
      >
        초기화
      </ActionButton>
    </FlexBox>
    <FixedWithPad>
      <CardTable />
    </FixedWithPad>
  </VerticalFlex>
);

const mapStateToProps = (state: AppState): PropsFromState => ({
  inSync: SEL.filterInSync(state),
});

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => ({
  applySetting: () => {
    dispatch(AC.cards.applySettings());
  },
  resetSetting: () => {
    dispatch(AC.cards.resetSettings());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
