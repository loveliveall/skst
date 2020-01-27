import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import styled from 'styled-components';
import { FlexBox } from '@/components/Styles';
import { AppState, AC, SEL } from '@/store';

import { ATTRIBUTE } from '@/data/cardMetadata';

const CentralizedBox = styled(FlexBox)`
  align-items: center;
`;

const VerticalFlex = styled(FlexBox)`
  width: 100%;
  flex-direction: column;
  align-items: center;
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
  indivPEffect: ReturnType<typeof SEL.cardsIndivPEffectBuff>,
  attributeId: ReturnType<typeof SEL.cardsAttributeBuff>,
  diffAttrDebuf: ReturnType<typeof SEL.cardsDiffAttrDebuf>,
}
interface PropsFromDispatch {
  setRoleEffect: (value: boolean) => void,
  setIndivPEffect: (value: boolean) => void,
  setAttributeId: (id: number | null) => void,
  setDiffAttrDebuf: (targetParam: 'appl' | 'baseAppl', percent: number) => void,
}
type CardEffectRows = PropsFromState & PropsFromDispatch;

const CardEffectRows: React.FC<CardEffectRows> = ({
  roleEffect, indivPEffect, attributeId, diffAttrDebuf,
  setRoleEffect, setIndivPEffect, setAttributeId, setDiffAttrDebuf,
}) => (
  <>
    <tr>
      <td rowSpan={4}>효과</td>
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
      <td>개성(패시브)</td>
      <td>
        <StyledInput
          type="checkbox"
          checked={indivPEffect}
          onChange={() => setIndivPEffect(!indivPEffect)}
        />
        개성(패시브)에 의한 스탯 버프 적용
      </td>
    </tr>
    <tr>
      <td>
        <VerticalFlex>
          <div>곡속성</div>
          <div>(동속 +20%)</div>
        </VerticalFlex>
      </td>
      <td>
        <CentralizedBox>
          <SmallImg
            className={attributeId === null ? 'on' : 'off'}
            src="/images/icons/null.png"
            alt="null-icon"
            title="속성 없음"
            onClick={() => setAttributeId(null)}
          />
          {Object.keys(ATTRIBUTE).map(Number).map((id) => (
            <SmallImg
              key={id}
              className={attributeId === id ? 'on' : 'off'}
              src={ATTRIBUTE[id].iconAssetPath}
              alt={`${ATTRIBUTE[id].symbol}-icon`}
              title={ATTRIBUTE[id].name}
              onClick={() => setAttributeId(id)}
            />
          ))}
        </CentralizedBox>
      </td>
    </tr>
    <tr>
      <td>타속성 디버프</td>
      <td>
        <CentralizedBox>
          <div>
            <select
              id="diff-attr-debuf-param"
              value={diffAttrDebuf.targetParam}
              disabled={attributeId === null}
              onChange={(event) => setDiffAttrDebuf(event.target.value as 'appl' | 'baseAppl', diffAttrDebuf.value)}
            >
              <option value="appl">어필 감소</option>
              <option value="baseAppl">기본 어필 감소</option>
            </select>
          </div>
          <div>
            <input
              type="number"
              min="0"
              max="100"
              disabled={attributeId === null}
              value={diffAttrDebuf.value}
              onChange={(event) => setDiffAttrDebuf(diffAttrDebuf.targetParam, Number(event.target.value))}
            />
            <span>%</span>
          </div>
        </CentralizedBox>
      </td>
    </tr>
  </>
);

const mapStateToProps = (state: AppState): PropsFromState => ({
  roleEffect: SEL.cardsRoleEffectBuff(state),
  indivPEffect: SEL.cardsIndivPEffectBuff(state),
  attributeId: SEL.cardsAttributeBuff(state),
  diffAttrDebuf: SEL.cardsDiffAttrDebuf(state),
});

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => ({
  setRoleEffect: (value) => {
    dispatch(AC.cards.setRoleEffectBuff(value));
  },
  setIndivPEffect: (value) => {
    dispatch(AC.cards.setIndivPEffectBuff(value));
  },
  setAttributeId: (id) => {
    dispatch(AC.cards.setBuffAttributeId(id));
  },
  setDiffAttrDebuf: (targetParam, percent) => {
    dispatch(AC.cards.setDiffAttrDebuff(targetParam, percent));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CardEffectRows);
