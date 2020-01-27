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
  indivPTarget: ReturnType<typeof SEL.cardsIndivPTargetFilter>,
}
interface PropsFromDispatch {
  addIndivPTarget: (key: number, target: SkillTargetInfo) => void,
  editIndivPTarget: (key: number, target: SkillTargetInfo) => void,
  removeIndivPTarget: (key: number) => void,
}
type IndivPTargetFilterProps = PropsFromState & PropsFromDispatch;

const IndivPTargetFilter: React.FC<IndivPTargetFilterProps> = ({
  indivPTarget, addIndivPTarget, editIndivPTarget, removeIndivPTarget,
}) => {
  const onAddClick = () => {
    addIndivPTarget(new Date().getTime(), { id: 0 });
  };
  const onTargetChangeClick = (key: number) => (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = Number(event.target.value);
    if (selected === 3) {
      editIndivPTarget(key, { id: 3, attributeId: null });
    } else if (selected === 4) {
      editIndivPTarget(key, { id: 4, roleId: null });
    } else if (selected === 6) {
      editIndivPTarget(key, { id: 6, groupId: null });
    } else if (selected === 7) {
      editIndivPTarget(key, { id: 7, grade: null });
    } else if (selected === 8) {
      editIndivPTarget(key, { id: 8, unitId: null });
    } else {
      editIndivPTarget(key, { id: selected });
    }
  };
  return (
    <VerticalFlex>
      {indivPTarget.map((item) => (
        <PaddedDiv key={item.key}>
          <RightMarginSelect
            id={`target-filter-${item.key}`}
            value={item.target.id}
            onChange={onTargetChangeClick(item.key)}
          >
            {Object.keys(SKILL_TARGET).map(Number).map((targetId) => (
              <option value={targetId} key={targetId}>
                {SKILL_TARGET[targetId].krName}
              </option>
            ))}
          </RightMarginSelect>
          {isAttributeTarget(item.target) && (
            <RightMarginSelect
              id={`target-attribute-filter-${item.key}`}
              value={item.target.attributeId || 'all'}
              onChange={(event) => {
                const selected = event.target.value;
                if (selected === 'all') editIndivPTarget(item.key, { ...item.target, attributeId: null });
                else editIndivPTarget(item.key, { ...item.target, attributeId: Number(selected) });
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
          {isRoleTarget(item.target) && (
            <RightMarginSelect
              id={`target-role-filter-${item.key}`}
              value={item.target.roleId || 'all'}
              onChange={(event) => {
                const selected = event.target.value;
                if (selected === 'all') editIndivPTarget(item.key, { ...item.target, roleId: null });
                else editIndivPTarget(item.key, { ...item.target, roleId: Number(selected) });
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
          {isGroupTarget(item.target) && (
            <RightMarginSelect
              id={`target-group-filter-${item.key}`}
              value={item.target.groupId || 'all'}
              onChange={(event) => {
                const selected = event.target.value;
                if (selected === 'all') editIndivPTarget(item.key, { ...item.target, groupId: null });
                else editIndivPTarget(item.key, { ...item.target, groupId: Number(selected) });
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
          {isGradeTarget(item.target) && (
            <RightMarginSelect
              id={`target-grade-filter-${item.key}`}
              value={item.target.grade || 'all'}
              onChange={(event) => {
                const selected = event.target.value;
                if (selected === 'all') editIndivPTarget(item.key, { ...item.target, grade: null });
                else editIndivPTarget(item.key, { ...item.target, grade: Number(selected) });
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
          {isUnitTarget(item.target) && (
            <RightMarginSelect
              id={`target-unit-filter-${item.key}`}
              value={item.target.unitId || 'all'}
              onChange={(event) => {
                const selected = event.target.value;
                if (selected === 'all') editIndivPTarget(item.key, { ...item.target, unitId: null });
                else editIndivPTarget(item.key, { ...item.target, unitId: Number(selected) });
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
          <Button onClick={() => removeIndivPTarget(item.key)}>제거</Button>
        </PaddedDiv>
      ))}
      <PaddedDiv>
        <Button onClick={onAddClick}>필터 추가</Button>
      </PaddedDiv>
    </VerticalFlex>
  );
};

const mapStateToProps = (state: AppState): PropsFromState => ({
  indivPTarget: SEL.cardsIndivPTargetFilter(state),
});

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => ({
  addIndivPTarget: (key, effectTargetId) => {
    dispatch(AC.cards.addIndivPTargetFilter(key, effectTargetId));
  },
  editIndivPTarget: (key, effectTargetId) => {
    dispatch(AC.cards.editIndivPTargetFilter(key, effectTargetId));
  },
  removeIndivPTarget: (key) => {
    dispatch(AC.cards.removeIndivPTargetFilter(key));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(IndivPTargetFilter);