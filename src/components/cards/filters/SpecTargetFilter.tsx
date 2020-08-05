import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import styled from 'styled-components';
import { AppState, AC, SEL } from '@/store';
import { FlexBox, StyledButton } from '@/components/Styles';

import {
  SkillTargetInfo,
  isAttributeTarget,
  isRoleTarget,
  isGroupTarget,
  isGradeTarget,
  isUnitTarget,
} from '@/store/cards/types';
import { SKILL_TARGET } from '@/data/skillTarget';
import { ATTRIBUTE, ROLE } from '@/data/cardMetadata';
import { GROUP, UNIT } from '@/data/memberMetadata';

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
  specTarget: ReturnType<typeof SEL.cardsSpecTargetFilter>,
}
interface PropsFromDispatch {
  addSpecTarget: (key: number, target: SkillTargetInfo) => void,
  editSpecTarget: (key: number, target: SkillTargetInfo) => void,
  removeSpecTarget: (key: number) => void,
}
type SpecTargetFilterProps = PropsFromState & PropsFromDispatch;

const SpecTargetFilter: React.FC<SpecTargetFilterProps> = ({
  specTarget, addSpecTarget, editSpecTarget, removeSpecTarget,
}) => {
  const onAddClick = () => {
    addSpecTarget(new Date().getTime(), { id: 0 });
  };
  const onTargetChangeClick = (key: number) => (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = Number(event.target.value);
    if (selected === 3) {
      editSpecTarget(key, { id: 3, attributeId: null });
    } else if (selected === 4) {
      editSpecTarget(key, { id: 4, roleId: null });
    } else if (selected === 6) {
      editSpecTarget(key, { id: 6, groupId: null });
    } else if (selected === 7) {
      editSpecTarget(key, { id: 7, grade: null });
    } else if (selected === 8) {
      editSpecTarget(key, { id: 8, unitId: null });
    } else {
      editSpecTarget(key, { id: selected });
    }
  };
  return (
    <VerticalFlex>
      {specTarget.map((item) => {
        const { target } = item;
        return (
          <PaddedDiv key={item.key}>
            <RightMarginSelect
              id={`target-filter-${item.key}`}
              value={target.id}
              onChange={onTargetChangeClick(item.key)}
            >
              {Object.keys(SKILL_TARGET).map(Number).map((targetId) => (
                <option value={targetId} key={targetId}>
                  {SKILL_TARGET[targetId].krName}
                </option>
              ))}
            </RightMarginSelect>
            {isAttributeTarget(target) && (
              <RightMarginSelect
                id={`target-attribute-filter-${item.key}`}
                value={target.attributeId || 'all'}
                onChange={(event) => {
                  const selected = event.target.value;
                  if (selected === 'all') editSpecTarget(item.key, { ...target, attributeId: null });
                  else editSpecTarget(item.key, { ...target, attributeId: Number(selected) });
                }}
              >
                <option value="all">모두</option>
                {Object.keys(ATTRIBUTE).map(Number).map((attributeId) => (
                  <option value={attributeId} key={attributeId}>
                    {ATTRIBUTE[attributeId].name}
                  </option>
                ))}
              </RightMarginSelect>
            )}
            {isRoleTarget(target) && (
              <RightMarginSelect
                id={`target-role-filter-${item.key}`}
                value={target.roleId || 'all'}
                onChange={(event) => {
                  const selected = event.target.value;
                  if (selected === 'all') editSpecTarget(item.key, { ...target, roleId: null });
                  else editSpecTarget(item.key, { ...target, roleId: Number(selected) });
                }}
              >
                <option value="all">모두</option>
                {Object.keys(ROLE).map(Number).map((roleId) => (
                  <option value={roleId} key={roleId}>
                    {ROLE[roleId].name}
                  </option>
                ))}
              </RightMarginSelect>
            )}
            {isGroupTarget(target) && (
              <RightMarginSelect
                id={`target-group-filter-${item.key}`}
                value={target.groupId || 'all'}
                onChange={(event) => {
                  const selected = event.target.value;
                  if (selected === 'all') editSpecTarget(item.key, { ...target, groupId: null });
                  else editSpecTarget(item.key, { ...target, groupId: Number(selected) });
                }}
              >
                <option value="all">모두</option>
                {Object.keys(GROUP).map(Number).map((groupId) => (
                  <option value={groupId} key={groupId}>
                    {GROUP[groupId].name}
                  </option>
                ))}
              </RightMarginSelect>
            )}
            {isGradeTarget(target) && (
              <RightMarginSelect
                id={`target-grade-filter-${item.key}`}
                value={target.grade || 'all'}
                onChange={(event) => {
                  const selected = event.target.value;
                  if (selected === 'all') editSpecTarget(item.key, { ...target, grade: null });
                  else editSpecTarget(item.key, { ...target, grade: Number(selected) });
                }}
              >
                <option value="all">모두</option>
                {[1, 2, 3].map((grade) => (
                  <option value={grade} key={grade}>
                    {`${grade}학년`}
                  </option>
                ))}
              </RightMarginSelect>
            )}
            {isUnitTarget(target) && (
              <RightMarginSelect
                id={`target-unit-filter-${item.key}`}
                value={target.unitId ?? 'all'}
                onChange={(event) => {
                  const selected = event.target.value;
                  if (selected === 'all') editSpecTarget(item.key, { ...target, unitId: null });
                  else editSpecTarget(item.key, { ...target, unitId: Number(selected) });
                }}
              >
                <option value="all">모두</option>
                {Object.keys(UNIT).map(Number).map((unitId) => (
                  <option value={unitId} key={unitId}>
                    {UNIT[unitId].name}
                  </option>
                ))}
              </RightMarginSelect>
            )}
            <Button onClick={() => removeSpecTarget(item.key)}>제거</Button>
          </PaddedDiv>
        );
      })}
      <PaddedDiv>
        <Button onClick={onAddClick}>필터 추가</Button>
      </PaddedDiv>
    </VerticalFlex>
  );
};

const mapStateToProps = (state: AppState): PropsFromState => ({
  specTarget: SEL.cardsSpecTargetFilter(state),
});

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => ({
  addSpecTarget: (key, effectTargetId) => {
    dispatch(AC.cards.addSpecTargetFilter(key, effectTargetId));
  },
  editSpecTarget: (key, effectTargetId) => {
    dispatch(AC.cards.editSpecTargetFilter(key, effectTargetId));
  },
  removeSpecTarget: (key) => {
    dispatch(AC.cards.removeSpecTargetFilter(key));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SpecTargetFilter);
