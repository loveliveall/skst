import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import styled from 'styled-components';
import { AppState, AC, SEL } from '@/store';

import { ATTRIBUTE } from '@/data/cardMetadata';

const StyledInput = styled.input`
  margin: 4px;
`;

const SmallImg = styled.img`
  padding: 2px;
  width: 32px;
  height: 32px;
  &.on {
    opacity: 1;
  }
  &.off {
    opacity: 0.1;
  }
  &:hover {
    cursor: pointer;
  }
  &.on:hover {
    opacity: 0.7;
  }
  &.off:hover {
    opacity: 0.3;
  }
`;

interface PropsFromState {
  roleEffect: ReturnType<typeof SEL.cardsRoleEffectBuff>,
  attributeId: ReturnType<typeof SEL.cardsAttributeBuff>,
}
interface PropsFromDispatch {
  setRoleEffect: (value: boolean) => void,
  setAttributeId: (id: number | null) => void,
}
type CardEffectRows = PropsFromState & PropsFromDispatch;

const CardEffectRows: React.FC<CardEffectRows> = ({
  roleEffect, attributeId, setRoleEffect, setAttributeId,
}) => (
  <>
    <tr>
      <td rowSpan={2}>효과</td>
      <td>타입 효과</td>
      <td>
        <StyledInput
          type="checkbox"
          checked={roleEffect}
          onChange={() => setRoleEffect(!roleEffect)}
        />
        Vo +5%, Sk -5% 볼티지
      </td>
    </tr>
    <tr>
      <td>동속성</td>
      <td>
        <SmallImg
          className={attributeId === null ? 'on' : 'off'}
          src="/images/icons/null.png"
          alt="null-icon"
          onClick={() => setAttributeId(null)}
        />
        {Object.keys(ATTRIBUTE).map(Number).map((id) => (
          <SmallImg
            key={id}
            className={attributeId === id ? 'on' : 'off'}
            src={ATTRIBUTE[id].iconAssetPath}
            alt="attribute-icon"
            onClick={() => setAttributeId(id)}
          />
        ))}
      </td>
    </tr>
  </>
);

const mapStateToProps = (state: AppState): PropsFromState => ({
  roleEffect: SEL.cardsRoleEffectBuff(state),
  attributeId: SEL.cardsAttributeBuff(state),
});

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => ({
  setRoleEffect: (value) => {
    dispatch(AC.cards.setRoleEffectBuff(value));
  },
  setAttributeId: (id) => {
    dispatch(AC.cards.setBuffAttributeId(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CardEffectRows);
