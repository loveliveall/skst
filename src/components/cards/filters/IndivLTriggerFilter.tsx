import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import styled from 'styled-components';
import { AppState, AC, SEL } from '@/store';
import { FlexBox, StyledButton } from '@/components/Styles';

import { SKILL_TRIGGER_TYPE } from '@/data/skillTriggerType';

const VerticalFlex = styled(FlexBox)`
  width: 100%;
  flex-direction: column;
  align-items: center;
`;
const Button = styled(StyledButton)`
  padding: 4px 8px 4px 8px;
`;
const PaddedDiv = styled.div`
  padding: 1px;
`;
const RightMarginSelect = styled.select`
  margin-right: 4px;
`;

interface PropsFromState {
  indivLTrigger: ReturnType<typeof SEL.cardsIndivLTriggerFilter>,
}
interface PropsFromDispatch {
  addIndivLTrigger: (key: number, triggerId: number) => void,
  editIndivLTrigger: (key: number, triggerId: number) => void,
  removeIndivLTrigger: (key: number) => void,
}
type IndivLTriggerFilterProps = PropsFromState & PropsFromDispatch;

const IndivLTriggerFilter: React.FC<IndivLTriggerFilterProps> = ({
  indivLTrigger, addIndivLTrigger, editIndivLTrigger, removeIndivLTrigger,
}) => {
  const onAddClick = () => {
    addIndivLTrigger(new Date().getTime(), 0);
  };
  return (
    <VerticalFlex>
      {indivLTrigger.map((item) => (
        <PaddedDiv key={item.key}>
          <RightMarginSelect
            id={`trigger-filter-${item.key}`}
            value={item.triggerId}
            onChange={(event) => editIndivLTrigger(item.key, Number(event.target.value))}
          >
            {Object.keys(SKILL_TRIGGER_TYPE).map(Number).map((triggerId) => {
              let txt = SKILL_TRIGGER_TYPE[triggerId].krDesc;
              if (triggerId === 1001) txt = `일정 ${txt}`;
              return (
                <option value={triggerId} key={triggerId}>
                  {txt}
                </option>
              );
            })}
          </RightMarginSelect>
          <Button onClick={() => removeIndivLTrigger(item.key)}>제거</Button>
        </PaddedDiv>
      ))}
      <PaddedDiv>
        <Button onClick={onAddClick}>필터 추가</Button>
      </PaddedDiv>
    </VerticalFlex>
  );
};

const mapStateToProps = (state: AppState): PropsFromState => ({
  indivLTrigger: SEL.cardsIndivLTriggerFilter(state),
});

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => ({
  addIndivLTrigger: (key, triggerId) => {
    dispatch(AC.cards.addIndivLTriggerFilter(key, triggerId));
  },
  editIndivLTrigger: (key, triggerId) => {
    dispatch(AC.cards.editIndivLTriggerFilter(key, triggerId));
  },
  removeIndivLTrigger: (key) => {
    dispatch(AC.cards.removeIndivLTriggerFilter(key));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(IndivLTriggerFilter);
