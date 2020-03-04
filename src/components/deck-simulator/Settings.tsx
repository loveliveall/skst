import React from 'react';
import styled from 'styled-components';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { FlexBox, StyledButton } from '@/components/Styles';

import { AppState, SEL, AC } from '@/store';
import { ATTRIBUTE } from '@/data/cardMetadata';
import { LIVE_EFFECT_TARGET } from '@/data/liveEffectTarget';
import { LIVE_EFFECT_TYPE } from '@/data/liveEffectType';

const VerticalFlex = styled(FlexBox)`
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const FlexItem = styled.div`
  padding: 2px;
  white-space: nowrap;
`;

const StyledSelect = styled.select`
  margin-right: 4px;
  margin-left: 4px;
`;
const StyledInput = styled.input`
  margin-right: 4px;
  margin-left: 4px;
`;
const Button = styled(StyledButton)`
  padding: 4px 8px 4px 8px;
`;

interface PropsFromState {
  songAttributeId: ReturnType<typeof SEL.simulatorSongAttributeId>,
  liveEffect: ReturnType<typeof SEL.simulatorLiveEffect>,
}
interface PropsFromDispatch {
  setSongAttributeId: (id: number | null) => void,
  addLiveEffect: () => void,
  editLiveEffectTarget: (key: number, targetId: number) => void,
  editLiveEffectType: (key: number, typeId: number) => void,
  editLiveEffectAmount: (key: number, amount: number) => void,
  removeLiveEffect: (key: number) => void,
}
type SettingsProps = PropsFromState & PropsFromDispatch;

const Settings: React.FC<SettingsProps> = ({
  songAttributeId, setSongAttributeId,
  liveEffect, addLiveEffect, editLiveEffectTarget, editLiveEffectType, editLiveEffectAmount, removeLiveEffect,
}) => (
  <VerticalFlex>
    <FlexItem>
      <strong>곡 속성 (동속성 +20%)</strong>
      <StyledSelect
        id="simulator-song-attribute"
        value={songAttributeId ?? 'none'}
        onChange={(event) => {
          const v = event.target.value;
          if (v === 'none') setSongAttributeId(null);
          else setSongAttributeId(Number(v));
        }}
      >
        <option value="none">무속성</option>
        {Object.keys(ATTRIBUTE).map(Number).map((attributeId) => (
          <option value={attributeId} key={attributeId}>
            {ATTRIBUTE[attributeId].name}
          </option>
        ))}
      </StyledSelect>
    </FlexItem>
    <FlexItem>
      <VerticalFlex>
        <FlexItem>
          <strong>라이브 곡에 의한 효과</strong>
        </FlexItem>
        {liveEffect.map((item) => (
          <FlexItem key={item.key}>
            <StyledSelect
              id="simulator-live-effect-target"
              value={item.effectTargetId}
              onChange={(event) => editLiveEffectTarget(item.key, Number(event.target.value))}
            >
              {Object.keys(LIVE_EFFECT_TARGET).map(Number).map((targetId) => (
                <option value={targetId} key={targetId}>
                  {LIVE_EFFECT_TARGET[targetId].name}
                </option>
              ))}
            </StyledSelect>
            <StyledSelect
              id="simulator-live-effect-type"
              value={item.effectTypeId}
              onChange={(event) => editLiveEffectType(item.key, Number(event.target.value))}
            >
              {Object.keys(LIVE_EFFECT_TYPE).map(Number).map((typeId) => (
                <option value={typeId} key={typeId}>
                  {LIVE_EFFECT_TYPE[typeId].desc}
                </option>
              ))}
            </StyledSelect>
            <StyledInput
              id="simulator-live-effect-amount"
              type="number"
              value={item.amount}
              onChange={(event) => editLiveEffectAmount(item.key, Number(event.target.value))}
            />
            <Button
              onClick={() => removeLiveEffect(item.key)}
            >
              제거
            </Button>
          </FlexItem>
        ))}
        <FlexItem>
          <Button
            onClick={() => addLiveEffect()}
          >
            추가
          </Button>
        </FlexItem>
      </VerticalFlex>
    </FlexItem>
  </VerticalFlex>
);

const mapStateToProps = (state: AppState): PropsFromState => ({
  songAttributeId: SEL.simulatorSongAttributeId(state),
  liveEffect: SEL.simulatorLiveEffect(state),
});

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => ({
  setSongAttributeId: (id) => {
    dispatch(AC.deckSimulator.setSongAttributeId(id));
  },
  addLiveEffect: () => {
    dispatch(AC.deckSimulator.addLiveEffect(new Date().getTime(), 0, 1, 0));
  },
  editLiveEffectTarget: (key, targetId) => {
    dispatch(AC.deckSimulator.editLiveEffectTarget(key, targetId));
  },
  editLiveEffectType: (key, typeId) => {
    dispatch(AC.deckSimulator.editLiveEffectType(key, typeId));
  },
  editLiveEffectAmount: (key, amount) => {
    dispatch(AC.deckSimulator.editLiveEffectAmount(key, amount));
  },
  removeLiveEffect: (key) => {
    dispatch(AC.deckSimulator.removeLiveEffect(key));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
