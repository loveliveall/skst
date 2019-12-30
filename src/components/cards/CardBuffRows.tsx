import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import styled from 'styled-components';
import { FlexBox } from '@/components/Styles';
import { AppState, AC, SEL } from '@/store';

import { ATTRIBUTE } from '@/data/cardMetadata';

const CentralizedBox = styled(FlexBox)`
  align-items: center;
  justify-content: center;
`;

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
  diffAttrDebuf: ReturnType<typeof SEL.cardsDiffAttrDebuf>,
}
interface PropsFromDispatch {
  setRoleEffect: (value: boolean) => void,
  setAttributeId: (id: number | null) => void,
  setDiffAttrDebuf: (percent: number) => void,
}
type CardEffectRows = PropsFromState & PropsFromDispatch;

const CardEffectRows: React.FC<CardEffectRows> = ({
  roleEffect, attributeId, diffAttrDebuf,
  setRoleEffect, setAttributeId, setDiffAttrDebuf,
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
      <td>곡속성</td>
      <td>
        <CentralizedBox>
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
          <div>
            <span>(타속성 어필</span>
            <input
              type="number"
              min="0"
              max="100"
              disabled={attributeId === null}
              value={diffAttrDebuf}
              onChange={(event) => setDiffAttrDebuf(Number(event.target.value))}
            />
            <span>% 감소)</span>
          </div>
        </CentralizedBox>
      </td>
    </tr>
  </>
);

const mapStateToProps = (state: AppState): PropsFromState => ({
  roleEffect: SEL.cardsRoleEffectBuff(state),
  attributeId: SEL.cardsAttributeBuff(state),
  diffAttrDebuf: SEL.cardsDiffAttrDebuf(state),
});

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => ({
  setRoleEffect: (value) => {
    dispatch(AC.cards.setRoleEffectBuff(value));
  },
  setAttributeId: (id) => {
    dispatch(AC.cards.setBuffAttributeId(id));
  },
  setDiffAttrDebuf: (percent) => {
    dispatch(AC.cards.setDiffAttrDebuff(percent));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CardEffectRows);
