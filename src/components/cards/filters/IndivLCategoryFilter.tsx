import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import styled from 'styled-components';
import { AppState, AC, SEL } from '@/store';
import { FlexBox, StyledButton } from '@/components/Styles';

import { LIVE_SKILL_CATEGORIES, SKILL_EFFECT_CATEGORY } from '@/data/skillEffectType';

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
  indivLCategory: ReturnType<typeof SEL.cardsIndivLCategoryFilter>,
}
interface PropsFromDispatch {
  addIndivLCategory: (key: number, effectCategoryId: number) => void,
  editIndivLCategory: (key: number, effectCategoryId: number) => void,
  removeIndivLCategory: (key: number) => void,
}
type IndivLCategoryFilterProps = PropsFromState & PropsFromDispatch;

const IndivLCategoryFilter: React.FC<IndivLCategoryFilterProps> = ({
  indivLCategory, addIndivLCategory, editIndivLCategory, removeIndivLCategory,
}) => {
  const onAddClick = () => {
    addIndivLCategory(new Date().getTime(), LIVE_SKILL_CATEGORIES[0]);
  };
  return (
    <VerticalFlex>
      {indivLCategory.map((item) => (
        <PaddedDiv key={item.key}>
          <RightMarginSelect
            id={`category-filter-${item.key}`}
            value={item.categoryId}
            onChange={(event) => editIndivLCategory(item.key, Number(event.target.value))}
          >
            {LIVE_SKILL_CATEGORIES.map((categoryId) => (
              <option value={categoryId} key={categoryId}>
                {SKILL_EFFECT_CATEGORY[categoryId].desc}
              </option>
            ))}
          </RightMarginSelect>
          <Button onClick={() => removeIndivLCategory(item.key)}>제거</Button>
        </PaddedDiv>
      ))}
      <PaddedDiv>
        <Button onClick={onAddClick}>필터 추가</Button>
      </PaddedDiv>
    </VerticalFlex>
  );
};

const mapStateToProps = (state: AppState): PropsFromState => ({
  indivLCategory: SEL.cardsIndivLCategoryFilter(state),
});

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => ({
  addIndivLCategory: (key, effectCategoryId) => {
    dispatch(AC.cards.addIndivLCategoryFilter(key, effectCategoryId));
  },
  editIndivLCategory: (key, effectCategoryId) => {
    dispatch(AC.cards.editIndivLCategoryFilter(key, effectCategoryId));
  },
  removeIndivLCategory: (key) => {
    dispatch(AC.cards.removeIndivLCategoryFilter(key));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(IndivLCategoryFilter);
