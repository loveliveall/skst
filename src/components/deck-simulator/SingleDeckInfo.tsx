import React from 'react';
import styled from 'styled-components';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { AppState, SEL, AC } from '@/store';
import { FlexBox, StyledButton } from '@/components/Styles';

import { getCardIconAssetPath, getCardSymbol } from '@/data/cardList';
import { LIVE_EFFECT_TARGET } from '@/data/liveEffectTarget';
import { LIVE_EFFECT_TYPE } from '@/data/liveEffectType';
import { MEMBER } from '@/data/memberMetadata';

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
`;
const FlexItem = styled.div`
  padding: 2px;
  white-space: nowrap;
`;
const SingleFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2px;
`;
const IconImgButton = styled.img`
  padding: 4px;
  width: 60px;
  height: 60px;
  cursor: pointer;
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

interface OwnProps {
  deckKey: number,
}
interface PropsFromState {
  cardTable: ReturnType<typeof SEL.dbCardTable>,
  deckInfo: ReturnType<typeof SEL.simulatorSingleDeck>,
  songAttributeId: ReturnType<typeof SEL.simulatorSongAttributeId>,
  liveEffect: ReturnType<typeof SEL.simulatorLiveEffect>,
}
interface PropsFromDispatch {
  openCardSelectModal: (slotIdx: number) => void,
  removeDeck: () => void,
  editDeckSlotSpecLv: (slotIdx: number, specLv: number) => void,
  editDeckSlotAppl: (slotIdx: number, appl: number) => void,
  editDeckSlotStam: (slotIdx: number, stam: number) => void,
  editDeckSlotTech: (slotIdx: number, tech: number) => void,
}
type SingleDeckInfoProps = OwnProps & PropsFromState & PropsFromDispatch;

const SingleDeckInfo: React.FC<SingleDeckInfoProps> = ({
  cardTable, openCardSelectModal,
  deckInfo, removeDeck, editDeckSlotSpecLv,
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
    const filteredLiveEffect = liveEffect.filter((item) => {
      const effectTarget = LIVE_EFFECT_TARGET[item.effectTargetId];
      if (effectTarget.detail !== undefined) {
        // We need card info in this case
        if (slot.cardId === null) return false;
        const card = cardTable[slot.cardId];
        if (card === undefined) return false;
        const member = MEMBER[card.memberId];
        const effectDetail = effectTarget.detail;
        if (effectDetail.category === 'attribute'
        && !(effectDetail.exclude && effectDetail.categoryId !== card.attributeId)
        && !(!effectDetail.exclude && effectDetail.categoryId === card.attributeId)) return false;
        if (effectDetail.category === 'role'
        && !(effectDetail.exclude && effectDetail.categoryId !== card.roleId)
        && !(!effectDetail.exclude && effectDetail.categoryId === card.roleId)) return false;
        if (effectDetail.category === 'group'
        && !(effectDetail.exclude && effectDetail.categoryId !== member.groupId)
        && !(!effectDetail.exclude && effectDetail.categoryId === member.groupId)) return false;
        if (effectDetail.category === 'grade'
        && !(effectDetail.exclude && effectDetail.categoryId !== member.grade)
        && !(!effectDetail.exclude && effectDetail.categoryId === member.grade)) return false;
        if (effectDetail.category === 'unit'
        && !(effectDetail.exclude && effectDetail.categoryId !== member.unitId)
        && !(!effectDetail.exclude && effectDetail.categoryId === member.unitId)) return false;
      }
      return true;
    });
    const statMultiplier = filteredLiveEffect.reduce((multiplier, item) => {
      const effectType = LIVE_EFFECT_TYPE[item.effectTypeId];
      const delta = (effectType.type === 'inc' ? 1 : -1) * item.amount;
      if (curr === 'appl' && effectType.stat === 'baseAppl') {
        return {
          ...multiplier,
          baseStat: multiplier.baseStat + delta,
        };
      }
      if (curr === 'appl' && effectType.stat === 'appl') {
        return {
          ...multiplier,
          stat: multiplier.stat + delta,
        };
      }
      return multiplier;
    }, { baseStat: 100, stat: 100 }); // %

    let statVal = slot[curr];
    statVal = Math.floor(statVal * (statMultiplier.baseStat / 100));
    statVal = Math.floor(statVal * (statMultiplier.stat / 100));
    if (slot.cardId !== null) {
      const card = cardTable[slot.cardId];
      if (card !== undefined && card.attributeId === songAttributeId) {
        statVal = Math.floor(statVal * (120 / 100));
      }
    }
    return {
      ...acc,
      [curr]: statVal,
    };
  }, { appl: 0, stam: 0, tech: 0 }));
  const subUnitVoMul = [0, 1, 2].map((id) => deck.slice(3 * id, 3 * id + 3).reduce((acc, curr) => {
    if (curr.cardId !== null) {
      const card = cardTable[curr.cardId];
      if (card !== undefined) {
        if (card.roleId === 1) return acc + 5; // Vo
        if (card.roleId === 4) return acc - 5; // Sk
      }
    }
    return acc;
  }, 100));
  const otherStats = adjustedStats.map((stat, slotIdx) => ({
    voltage: Math.floor(stat.appl * (subUnitVoMul[Math.floor(slotIdx / 3)] / 100)),
    spDamage: Math.floor(stat.appl + 1.2 * stat.tech),
  }));
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
              <td>
                보정 볼티지
                <br />
                (작전 효과 고려)
              </td>
              {otherStats.map((stat, slotIdx) => (
                // eslint-disable-next-line react/no-array-index-key
                <td key={`${deckInfo.key}-${slotIdx}-vol`}>
                  {stat.voltage}
                </td>
              ))}
            </tr>
            <tr>
              <td>작전 평균 볼티지</td>
              {[0, 1, 2].map((id) => (
                <td key={id} colSpan={3}>
                  {otherStats.slice(3 * id, 3 * id + 3).reduce((acc, curr) => acc + curr.voltage, 0) / 3}
                </td>
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
      <SingleFlex>
        <Button onClick={removeDeck}>제거</Button>
      </SingleFlex>
    </NoWrapFlexBox>
  );
};

const mapStateToProps = (state: AppState, ownProps: OwnProps): PropsFromState => ({
  cardTable: SEL.dbCardTable(state),
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
