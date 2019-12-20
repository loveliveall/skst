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

const AlignedP = styled.p`
  text-align: center;
  line-height: 1.5em;
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
    <AlignedP>
      이 표에 있는 모든 기본 스탯 값은 만렙 및 해당 한돌 수치의 모든 특훈 개방 상태 스탯입니다.
      <br />
      실제 인게임에서는 인연 보정치 등의 다양한 원인으로 인해 표와 값이 다를 수 있습니다.
      <br />
      크리티컬에 관해 알려진 정보가 적어 기대 볼티지 계산에서 크리티컬은 배제되어 있습니다.
    </AlignedP>
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
