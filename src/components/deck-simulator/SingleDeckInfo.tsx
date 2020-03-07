import React from 'react';
import styled from 'styled-components';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { critProb } from '@/utils/utils';
import { AppState, SEL, AC } from '@/store';
import { FlexBox, StyledButton } from '@/components/Styles';
import { getStatMultiplier } from '@/components/common/helpers';

import { getCardIconAssetPath, getCardSymbol, CARD } from '@/data/cardList';
import { CARD_SKILL } from '@/data/cardSkill';
import { CARD_CRIT_BASE } from '@/data/cardCritBase';
import { SKILL } from '@/data/skill';
import { SKILL_EFFECT_TYPE, SKILL_EFFECT_CATEGORY } from '@/data/skillEffectType';

const NoWrapFlexBox = styled(FlexBox)`
  flex-wrap: nowrap;
`;
const StyledInput = styled.input`
  width: 80px;
  margin-right: 4px;
  margin-left: 4px;
`;
const StyledSelect = styled.select`
  width: 80px;
  margin-right: 4px;
  margin-left: 4px;
`;
const Button = styled(StyledButton)`
  padding: 4px 8px 4px 8px;
  margin: 2px;
`;
const FlexItem = styled.div`
  padding: 2px;
  white-space: nowrap;
`;
const VerticalFlex = styled(FlexBox)`
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
`;
const IconImgButton = styled.img`
  padding: 4px;
  width: 60px;
  height: 60px;
  cursor: pointer;
`;
const SmallImg = styled.img`
  padding: 4px;
  width: 24px;
  height: 24px;
`;
const StyledTable = styled.table`
  border: 1px solid black;
  border-collapse: collapse;

  td, th {
    text-align: center;
    padding: 4px;
    white-space: nowrap;
  }
`;
const DimTd = styled.td`
  color: #777;
`;

interface OwnProps {
  deckKey: number,
}
interface PropsFromState {
  deckInfo: ReturnType<typeof SEL.simulatorSingleDeck>,
  songAttributeId: ReturnType<typeof SEL.simulatorSongAttributeId>,
  liveEffect: ReturnType<typeof SEL.simulatorLiveEffect>,
}
interface PropsFromDispatch {
  openCardSelectModal: (slotIdx: number) => void,
  removeDeck: () => void,
  duplicateDeck: () => void,
  editDeckSlotSpecLv: (slotIdx: number, specLv: number) => void,
  editDeckSlotAppl: (slotIdx: number, appl: number) => void,
  editDeckSlotStam: (slotIdx: number, stam: number) => void,
  editDeckSlotTech: (slotIdx: number, tech: number) => void,
}
type SingleDeckInfoProps = OwnProps & PropsFromState & PropsFromDispatch;

const SingleDeckInfo: React.FC<SingleDeckInfoProps> = ({
  openCardSelectModal,
  deckInfo, removeDeck, duplicateDeck, editDeckSlotSpecLv,
  editDeckSlotAppl, editDeckSlotStam, editDeckSlotTech,
  songAttributeId, liveEffect,
}) => {
  if (deckInfo === undefined) return null;
  const { deck } = deckInfo;
  const STATS = ['appl', 'stam', 'tech'] as const;
  const STAT_NAME = {
    appl: '어필',
    stam: '스태미너',
    tech: '테크닉',
  };
  const STAT_EDITOR = {
    appl: editDeckSlotAppl,
    stam: editDeckSlotStam,
    tech: editDeckSlotTech,
  };
  const adjustedStats = deck.map((slot) => STATS.reduce((acc, curr) => {
    let targetCard;
    if (slot.cardId !== null && CARD[slot.cardId] !== undefined) {
      targetCard = CARD[slot.cardId];
    }
    const statMultiplier = getStatMultiplier(targetCard, liveEffect, curr);

    let statVal = slot[curr];
    statVal = Math.floor(statVal * (statMultiplier.baseStat / 100));
    statVal = Math.floor(statVal * (statMultiplier.stat / 100));
    if (slot.cardId !== null) {
      const card = CARD[slot.cardId];
      if (card !== undefined && card.attributeId === songAttributeId) {
        statVal = Math.floor(statVal * (120 / 100));
      }
    }
    return {
      ...acc,
      [curr]: statVal,
    };
  }, {
    cardId: slot.cardId, appl: 0, stam: 0, tech: 0,
  }));

  const subUnitVoMul = [0, 1, 2].map((id) => deck.slice(3 * id, 3 * id + 3).reduce((acc, curr) => {
    if (curr.cardId !== null) {
      const card = CARD[curr.cardId];
      if (card !== undefined) {
        if (card.roleId === 1) return acc + 5; // Vo
        if (card.roleId === 4) return acc - 5; // Sk
      }
    }
    return acc;
  }, 100));

  const otherStats = adjustedStats.map((stat, slotIdx) => {
    const voMul = subUnitVoMul[Math.floor(slotIdx / 3)];
    const critBase = stat.cardId === null ? 0 : CARD_CRIT_BASE[stat.cardId].value;
    const crit = critProb(stat.appl, stat.tech, critBase) / 100;
    return {
      critPercent: crit * 100,
      voltage: Math.floor(stat.appl * (voMul / 100)),
      voltageInCrit: Math.floor((stat.appl + 0.5 * stat.appl * crit) * (voMul / 100)),
      spDamage: Math.floor(stat.appl + 1.2 * stat.tech),
    };
  });
  return (
    <NoWrapFlexBox>
      <FlexItem>
        <StyledTable>
          <thead>
            <tr>
              <td />
              <td colSpan={3} style={{ backgroundColor: '#FF7D97' }}>빨간 작전</td>
              <td colSpan={3} style={{ backgroundColor: '#9EE49A' }}>초록 작전</td>
              <td colSpan={3} style={{ backgroundColor: '#7DCEFF' }}>파란 작전</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>카드</td>
              {deck.map((slot, slotIdx) => (
                // eslint-disable-next-line react/no-array-index-key
                <td key={`${deckInfo.key}-${slotIdx}-char`}>
                  {slot.cardId === null ? (
                    <Button onClick={() => openCardSelectModal(slotIdx)}>선택</Button>
                  ) : (
                    <IconImgButton
                      src={getCardIconAssetPath(slot.cardId, true)}
                      alt={`${getCardSymbol(slot.cardId, true)}-icon`}
                      title={getCardSymbol(slot.cardId, false)}
                      onClick={() => openCardSelectModal(slotIdx)}
                    />
                  )}
                </td>
              ))}
            </tr>
            <tr>
              <td>특기 Lv.</td>
              {deck.map((slot, slotIdx) => (
                // eslint-disable-next-line react/no-array-index-key
                <td key={`${deckInfo.key}-${slotIdx}-spec`}>
                  <StyledSelect
                    id="slot-spec-lv"
                    value={slot.specialityLv}
                    onChange={(event) => editDeckSlotSpecLv(slotIdx, Number(event.target.value))}
                  >
                    {[1, 2, 3, 4, 5].map((lv) => (
                      <option value={lv} key={lv}>
                        {lv}
                      </option>
                    ))}
                  </StyledSelect>
                </td>
              ))}
            </tr>
            {STATS.map((stat) => (
              <tr key={stat}>
                <td>{STAT_NAME[stat]}</td>
                {deck.map((slot, slotIdx) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <td key={`${deckInfo.key}-${slotIdx}-${stat}`}>
                    <StyledInput
                      id={`slot-${stat}`}
                      type="number"
                      value={slot[stat]}
                      min="0"
                      onChange={(event) => STAT_EDITOR[stat](slotIdx, Number(event.target.value))}
                    />
                  </td>
                ))}
              </tr>
            ))}
            {STATS.map((stat) => (
              <tr key={stat}>
                <td>{`보정 ${STAT_NAME[stat]}`}</td>
                {deck.map((_, slotIdx) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <td key={`${deckInfo.key}-${slotIdx}`}>
                    {adjustedStats[slotIdx][stat]}
                  </td>
                ))}
              </tr>
            ))}
            <tr>
              <DimTd>크리티컬률 추정</DimTd>
              {otherStats.map((stat, slotIdx) => (
                // eslint-disable-next-line react/no-array-index-key
                <DimTd key={`${deckInfo.key}-${slotIdx}`}>
                  {`${stat.critPercent.toFixed(2)}%`}
                </DimTd>
              ))}
            </tr>
            <tr>
              <td>
                보정 특기 효과량
                <br />
                (작전 효과 미반영)
              </td>
              {deck.map((slot, slotIdx) => {
                const key = `${deckInfo.key}-${slotIdx}`;
                const { cardId } = slot;
                if (cardId === null) return <td key={key} />;
                const adjustedStat = adjustedStats[slotIdx];
                const speciality = SKILL[CARD_SKILL[cardId].specialityId].detail;
                const specType = SKILL_EFFECT_TYPE[speciality.effectTypeId];
                const effectValue = speciality.effectValue[slot.specialityLv - 1];
                const displayStr = (() => {
                  if (specType.scaleType === 'fixed') return `${effectValue}`;
                  if (specType.scaleType === 'percent') {
                    if (specType.baseStat === undefined) {
                      return `${effectValue / 100}%`;
                    }
                    return `${Math.floor(adjustedStat[specType.baseStat] * (effectValue / 10000))}`;
                  }
                  return '';
                })();
                return (
                  <td key={key}>
                    <div>
                      <SmallImg
                        src={SKILL_EFFECT_CATEGORY[specType.effectCategoryId].iconAssetPath}
                        alt={specType.desc}
                        title={specType.desc}
                      />
                    </div>
                    <div>
                      {displayStr}
                    </div>
                  </td>
                );
              })}
            </tr>
            <tr>
              <td>
                보정 볼티지
                <br />
                (작전 효과 반영)
              </td>
              {otherStats.map((stat, slotIdx) => (
                // eslint-disable-next-line react/no-array-index-key
                <td key={`${deckInfo.key}-${slotIdx}-vol`}>
                  {stat.voltage}
                </td>
              ))}
            </tr>
            <tr>
              <DimTd>(크리티컬 추정 추가)</DimTd>
              {otherStats.map((stat, slotIdx) => (
                // eslint-disable-next-line react/no-array-index-key
                <DimTd key={`${deckInfo.key}-${slotIdx}`}>
                  {stat.voltageInCrit}
                </DimTd>
              ))}
            </tr>
            <tr>
              <td>
                작전 평균 볼티지
                <br />
                (작전 효과 반영)
              </td>
              {[0, 1, 2].map((id) => (
                <td key={id} colSpan={3}>
                  {otherStats.slice(3 * id, 3 * id + 3).reduce((acc, curr) => acc + curr.voltage, 0) / 3}
                </td>
              ))}
            </tr>
            <tr>
              <DimTd>(크리티컬 추정 추가)</DimTd>
              {[0, 1, 2].map((id) => (
                <DimTd key={id} colSpan={3}>
                  {otherStats.slice(3 * id, 3 * id + 3).reduce((acc, curr) => acc + curr.voltageInCrit, 0) / 3}
                </DimTd>
              ))}
            </tr>
            <tr>
              <td>보정 SP 특기</td>
              {otherStats.map((stat, slotIdx) => (
                // eslint-disable-next-line react/no-array-index-key
                <td key={`${deckInfo.key}-${slotIdx}-sp`}>
                  {stat.spDamage}
                </td>
              ))}
            </tr>
            <tr>
              <td>SP 특기 순위</td>
              {otherStats.map((stat, slotIdx) => (
                // eslint-disable-next-line react/no-array-index-key
                <td key={`${deckInfo.key}-${slotIdx}-sp-rank`}>
                  {otherStats.reduce((acc, curr) => acc + (curr.spDamage > stat.spDamage ? 1 : 0), 1)}
                </td>
              ))}
            </tr>
          </tbody>
        </StyledTable>
      </FlexItem>
      <FlexItem>
        <VerticalFlex>
          <Button onClick={duplicateDeck}>복제</Button>
          <Button onClick={removeDeck}>제거</Button>
        </VerticalFlex>
      </FlexItem>
    </NoWrapFlexBox>
  );
};

const mapStateToProps = (state: AppState, ownProps: OwnProps): PropsFromState => ({
  deckInfo: SEL.simulatorSingleDeck(state, ownProps.deckKey),
  songAttributeId: SEL.simulatorSongAttributeId(state),
  liveEffect: SEL.simulatorLiveEffect(state),
});

const mapDispatchToProps = (dispatch: Dispatch, ownProps: OwnProps): PropsFromDispatch => ({
  openCardSelectModal: (slotIdx) => {
    dispatch(AC.deckSimulator.openCardSelectModal(ownProps.deckKey, slotIdx));
  },
  removeDeck: () => {
    dispatch(AC.deckSimulator.removeDeck(ownProps.deckKey));
  },
  duplicateDeck: () => {
    dispatch(AC.deckSimulator.duplicateDeck(ownProps.deckKey));
  },
  editDeckSlotSpecLv: (slotIdx, specLv) => {
    dispatch(AC.deckSimulator.editDeckSlotSpecLv(ownProps.deckKey, slotIdx, specLv));
  },
  editDeckSlotAppl: (slotIdx, appl) => {
    dispatch(AC.deckSimulator.editDeckSlotAppl(ownProps.deckKey, slotIdx, appl));
  },
  editDeckSlotStam: (slotIdx, stam) => {
    dispatch(AC.deckSimulator.editDeckSlotStam(ownProps.deckKey, slotIdx, stam));
  },
  editDeckSlotTech: (slotIdx, tech) => {
    dispatch(AC.deckSimulator.editDeckSlotTech(ownProps.deckKey, slotIdx, tech));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleDeckInfo);
