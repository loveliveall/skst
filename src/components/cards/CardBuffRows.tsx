import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import styled from 'styled-components';
import { AppState, AC, SEL } from '@/store';

const StyledInput = styled.input`
  margin: 4px;
`;

interface PropsFromState {
  roleEffect: ReturnType<typeof SEL.cardsRoleEffectBuff>,
}
interface PropsFromDispatch {
  setRoleEffect: (value: boolean) => void,
}
type CardEffectRows = PropsFromState & PropsFromDispatch;

const CardEffectRows: React.FC<CardEffectRows> = ({
  roleEffect, setRoleEffect,
}) => (
  <>
    <tr>
      <td rowSpan={1}>효과</td>
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
  </>
);

const mapStateToProps = (state: AppState): PropsFromState => ({
  roleEffect: SEL.cardsRoleEffectBuff(state),
});

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => ({
  setRoleEffect: (value) => {
    dispatch(AC.cards.setRoleEffectBuff(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CardEffectRows);
