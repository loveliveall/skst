import React from 'react';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { AppState, AC, SEL } from '@/store';
import { FlexBox, FixedWrapper, StyledButton } from '@/components/Styles';
import CardFilterRows from '@/components/cards/CardFilterRows';
import CardBuffRows from '@/components/cards/CardBuffRows';
import CardTable from '@/components/cards/CardTable';

const VerticalFlex = styled(FlexBox)`
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const FixedWithPad = styled(FixedWrapper)`
  padding: 4px;
`;

const StyledTable = styled.table`
  border: 1px solid black;
  border-collapse: collapse;

  td, th {
    text-align: center;
    padding: 4px;
    border: 1px solid black;
    white-space: nowrap;
  }
`;

const ActionButton = styled(StyledButton)`
  margin: 2px;
`;

const AlignedP = styled.p`
  line-height: 1.5em;
`;

interface PropsFromState {
  inSync: ReturnType<typeof SEL.filterInSync>,
  isInitial: ReturnType<typeof SEL.filterInitial>,
}
interface PropsFromDispatch {
  applySetting: () => void,
  rollbackSetting: () => void,
  resetSetting: () => void,
}
type CardsProps = PropsFromState & PropsFromDispatch;

const Cards: React.FC<CardsProps> = ({
  inSync, isInitial, applySetting, rollbackSetting, resetSetting,
}) => (
  <VerticalFlex>
    <FixedWithPad>
      <StyledTable>
        <tbody>
          <CardFilterRows />
          <CardBuffRows />
        </tbody>
      </StyledTable>
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
        onClick={() => rollbackSetting()}
      >
        되돌리기
      </ActionButton>
      <ActionButton
        disabled={isInitial}
        onClick={() => resetSetting()}
      >
        초기화
      </ActionButton>
    </FlexBox>
    <AlignedP>
      <ul>
        <li>
          이 표에 있는 모든 기본 스탯 값은 만렙 및 해당 한돌 수치의 모든 특훈 개방 상태 스탯입니다.
        </li>
        <li>
          실제 인게임에서는 인연 보정치 등의 다양한 원인으로 인해 표와 값이 다를 수 있습니다.
        </li>
        <li>
          크리티컬에 관한 정보는 명확히 알려진 것이 없으나,&nbsp;
          <a href="https://twitter.com/mmthom35/status/1189561036912783360" target="_blank" rel="noopener noreferrer">
            이 트윗
          </a>
          의 추정에 따라
          <br />
          어필 &gt; 테크닉일 경우 (테크닉/340)%, 그 외의 경우 (테크닉/200)% 식을 사용하고 있습니다.
          <br />
          역시나&nbsp;
          <a href="https://gall.dcinside.com/sunshine/3107809" target="_blank" rel="noopener noreferrer">
            이 글
          </a>
          에서 아닌 것이 증명 되었지만 별 수 있겠습니까 다른 추정 식이 없는데. 대충 주의해서 씁시다.
        </li>
        <li>
          기대 볼티지는 위 크리티컬률 추정에 기본 크리 배수인 1.5배를 가정해 산출한 기댓값 입니다.
        </li>
      </ul>
    </AlignedP>
    <CardTable />
  </VerticalFlex>
);

const mapStateToProps = (state: AppState): PropsFromState => ({
  inSync: SEL.filterInSync(state),
  isInitial: SEL.filterInitial(state),
});

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => ({
  applySetting: () => {
    dispatch(AC.cards.applySettings());
  },
  rollbackSetting: () => {
    dispatch(AC.cards.rollbackSettings());
  },
  resetSetting: () => {
    dispatch(AC.cards.resetSettings());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
