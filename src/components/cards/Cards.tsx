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

const AlignedDiv = styled.div`
  line-height: 1.5em;
  word-break: keep-all;
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
    <AlignedDiv>
      <ul>
        <li>
          이 표에 있는 모든 기본 스탯 값은 만렙 및 해당 한돌 수치의 모든 특훈 개방 상태 스탯입니다.
        </li>
        <li>
          실제 인게임에서는 인연 보정치 등의 다양한 원인으로 인해 표와 값이 다를 수 있습니다.
        </li>
        <li>
          크리티컬에 관한 정보는 명확히 알려진 것이 없으나,&nbsp;
          <a href="https://gall.dcinside.com/sunshine/3111751" target="_blank" rel="noopener noreferrer">
            이 글
          </a>
          에 따라 ((테크닉 / 340) + (보정치))% 식을 사용하고 있습니다.
        </li>
        <li>
          기대 볼티지는 위 크리티컬률 추정에 기본 크리 배수인 1.5배를 가정해 산출한 기댓값 입니다.
        </li>
        <li>
          크리티컬 보정치 값 및 한돌별 스탯 값의 작성에는&nbsp;
          <a href="http://kachagain.com/sifas/cards.php" target="_blank" rel="noopener noreferrer">
            이 사이트
          </a>
          를 참고하고 있습니다.
        </li>
        <li>
          <strong>카드 아이콘을 클릭해 상세 정보를 볼 수 있습니다.</strong>
        </li>
      </ul>
    </AlignedDiv>
    <FixedWithPad>
      <CardTable />
    </FixedWithPad>
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
