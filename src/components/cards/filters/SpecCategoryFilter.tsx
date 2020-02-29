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
  specCategory: ReturnType<typeof SEL.cardsSpecCategoryFilter>,
}
interface PropsFromDispatch {
  addSpecCategory: (key: number, effectCategoryId: number) => void,
  editSpecCategory: (key: number, effectCategoryId: number) => void,
  removeSpecCategory: (key: number) => void,
}
type SpecCategoryFilterProps = PropsFromState & PropsFromDispatch;

const SpecCategoryFilter: React.FC<SpecCategoryFilterProps> = ({
  specCategory, addSpecCategory, editSpecCategory, removeSpecCategory,
}) => {
  const onAddClick = () => {
    addSpecCategory(new Date().getTime(), LIVE_SKILL_CATEGORIES[0]);
  };
  return (
    <VerticalFlex>
      {specCategory.map((item) => (
        <PaddedDiv key={item.key}>
          <RightMarginSelect
            id={`category-filter-${item.key}`}
            value={item.categoryId}
            onChange={(event) => editSpecCategory(item.key, Number(event.target.value))}
          >
            {LIVE_SKILL_CATEGORIES.map((categoryId) => (
              <option value={categoryId} key={categoryId}>
                {SKILL_EFFECT_CATEGORY[categoryId].desc}
              </option>
            ))}
          </RightMarginSelect>
          <Button onClick={() => removeSpecCategory(item.key)}>제거</Button>
        </PaddedDiv>
      ))}
      <PaddedDiv>
        <Button onClick={onAddClick}>필터 추가</Button>
      </PaddedDiv>
    </VerticalFlex>
  );
};

const mapStateToProps = (state: AppState): PropsFromState => ({
  specCategory: SEL.cardsSpecCategoryFilter(state),
});

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => ({
  addSpecCategory: (key, effectCategoryId) => {
    dispatch(AC.cards.addSpecCategoryFilter(key, effectCategoryId));
  },
  editSpecCategory: (key, effectCategoryId) => {
    dispatch(AC.cards.editSpecCategoryFilter(key, effectCategoryId));
  },
  removeSpecCategory: (key) => {
    dispatch(AC.cards.removeSpecCategoryFilter(key));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SpecCategoryFilter);
