import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import styled from 'styled-components';
import { AppState, AC, SEL } from '@/store';
import { FlexBox, StyledButton } from '@/components/Styles';

import { PASSIVE_SKILL_CATEGORIES, SKILL_EFFECT_CATEGORY } from '@/data/skillEffectType';

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
  indivPCategory: ReturnType<typeof SEL.cardsIndivPCategoryFilter>,
}
interface PropsFromDispatch {
  addIndivPCategory: (key: number, effectCategoryId: number) => void,
  editIndivPCategory: (key: number, effectCategoryId: number) => void,
  removeIndivPCategory: (key: number) => void,
}
type IndivPCategoryFilterProps = PropsFromState & PropsFromDispatch;

const IndivPCategoryFilter: React.FC<IndivPCategoryFilterProps> = ({
  indivPCategory, addIndivPCategory, editIndivPCategory, removeIndivPCategory,
}) => {
  const onAddClick = () => {
    addIndivPCategory(new Date().getTime(), PASSIVE_SKILL_CATEGORIES[0]);
  };
  return (
    <VerticalFlex>
      {indivPCategory.map((item) => (
        <PaddedDiv key={item.key}>
          <RightMarginSelect
            id={`category-filter-${item.key}`}
            value={item.categoryId}
            onChange={(event) => editIndivPCategory(item.key, Number(event.target.value))}
          >
            {PASSIVE_SKILL_CATEGORIES.map((categoryId) => (
              <option value={categoryId} key={categoryId}>
                {SKILL_EFFECT_CATEGORY[categoryId].desc}
              </option>
            ))}
          </RightMarginSelect>
          <Button onClick={() => removeIndivPCategory(item.key)}>제거</Button>
        </PaddedDiv>
      ))}
      <PaddedDiv>
        <Button onClick={onAddClick}>필터 추가</Button>
      </PaddedDiv>
    </VerticalFlex>
  );
};

const mapStateToProps = (state: AppState): PropsFromState => ({
  indivPCategory: SEL.cardsIndivPCategoryFilter(state),
});

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => ({
  addIndivPCategory: (key, effectCategoryId) => {
    dispatch(AC.cards.addIndivPCategoryFilter(key, effectCategoryId));
  },
  editIndivPCategory: (key, effectCategoryId) => {
    dispatch(AC.cards.editIndivPCategoryFilter(key, effectCategoryId));
  },
  removeIndivPCategory: (key) => {
    dispatch(AC.cards.removeIndivPCategoryFilter(key));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(IndivPCategoryFilter);
