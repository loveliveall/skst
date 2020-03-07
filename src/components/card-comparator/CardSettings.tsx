import React from 'react';
import styled from 'styled-components';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { AppState, SEL, AC } from '@/store';

import { FlexBox, StyledButton } from '@/components/Styles';
import { getStatMultiplier } from '@/components/common/helpers';
import { getCardIconAssetPath, getCardSymbol } from '@/data/cardList';
import { PARAMETER } from '@/data/cardParameter';
import { CARD_CRIT_BASE } from '@/data/cardCritBase';
import { CARD_SKILL } from '@/data/cardSkill';
import { SKILL } from '@/data/skill';
import { SKILL_TARGET } from '@/data/skillTarget';
import { SKILL_EFFECT_TYPE, SKILL_EFFECT_CATEGORY } from '@/data/skillEffectType';
import { KIZUNA_BUFF } from '@/data/kizunaBuff';

import { critProb } from '@/utils/utils';
import { SKILL_LEVEL_MAP } from '@/data/cardSkillLevelMap';

const VerticalFlex = styled(FlexBox)`
  width: 100%;
  flex-direction: column;
  align-items: center;
`;
const Flex = styled(FlexBox)`
  align-items: center;
`;
const Button = styled(StyledButton)`
  padding: 4px 8px 4px 8px;
  margin: 2px;
`;
const StyledInput = styled.input`
  margin: 4px;
`;
const IconImgButton = styled.img`
  padding: 4px;
  width: 60px;
  height: 60px;
  cursor: pointer;
`;
const SmallImg = styled.img`
  padding: 4px;
  width: 36px;
  height: 36px;
`;
const DimTd = styled.td`
  color: #777;
`;
const StyledTable = styled.table`
  border: 1px solid black;
  border-collapse: collapse;

  td, th {
    text-align: center;
    padding: 4px 8px 4px 8px;
    white-space: nowrap;
  }
`;

interface PropsFromState {
  songAttributeId: ReturnType<typeof SEL.simulatorSongAttributeId>,
  liveEffect: ReturnType<typeof SEL.simulatorLiveEffect>,
  cardTable: ReturnType<typeof SEL.dbCardTable>,
  cardComparatorSettings: ReturnType<typeof SEL.cardComparatorCardSettings>,
}
interface PropsFromDispatch {
  openCardModal: (key: number | null) => void,
  setKizunaLv: (key: number, kizunaLv: number) => void,
  setUncap: (key: number, uncap: number) => void,
  removeCard: (key: number) => void,
}
type CardSettingsProps = PropsFromState & PropsFromDispatch;

const CardSettings: React.FC<CardSettingsProps> = ({
  songAttributeId, liveEffect,
  cardTable, cardComparatorSettings,
  openCardModal, setKizunaLv, setUncap, removeCard,
}) => (
  <StyledTable>
    <thead>
      <tr>
        <th>카드</th>
        <th>인연 Lv.</th>
        <th>한돌</th>
        <th>어필</th>
        <th>스태미너</th>
        <th>테크닉</th>
        <th>크리율</th>
        <th>기대 볼티지</th>
        <th>특기 효과량</th>
        <th>개성(패시브)</th>
        <td />
      </tr>
    </thead>
    <tbody>
      {cardComparatorSettings.map((cardSetting) => {
        const { cardId, kizunaLv, uncap } = cardSetting.card;
        const card = cardTable[cardId];
        if (card === undefined) return <tr key={cardSetting.key} />;
        const stat = (['appl', 'stam', 'tech'] as const).reduce((acc, curr) => {
          const statMultiplier = getStatMultiplier(card, liveEffect, curr);
          let val = PARAMETER[cardId][uncap][curr];
          // Applying kizuna buff
          val = Math.floor(val * (1 + KIZUNA_BUFF[kizunaLv] / 10000));
          // Applying base stat buff
          val = Math.floor(val * (statMultiplier.baseStat / 100));
          // Applying stat buff
          val = Math.floor(val * (statMultiplier.stat / 100));
          // Applying same attribute buff
          if (card.attributeId === songAttributeId) {
            val = Math.floor(val * 1.2);
          }
          return {
            ...acc,
            [curr]: val,
          };
        }, { appl: 0, stam: 0, tech: 0 });
        const critPercent = critProb(stat.appl, stat.tech, CARD_CRIT_BASE[cardId].value);
        const vol = Math.floor(stat.appl + 0.5 * stat.appl * (critPercent / 100));
        const speciality = SKILL[CARD_SKILL[cardId].specialityId].detail;
        const indivP = SKILL[CARD_SKILL[cardId].individuality.passiveId].detail;
        const specType = SKILL_EFFECT_TYPE[speciality.effectTypeId];
        const indivPType = SKILL_EFFECT_TYPE[indivP.effectTypeId];
        const specialityLv = SKILL_LEVEL_MAP[cardId].speciality[uncap];
        const indivPLv = SKILL_LEVEL_MAP[cardId].individuality.passive[uncap];
        const specEffectValue = speciality.effectValue[specialityLv - 1];
        const indivPEffectValue = indivP.effectValue[indivPLv - 1];
        const specDisplayStr = (() => {
          if (specType.scaleType === 'fixed') return `${specEffectValue}`;
          if (specType.scaleType === 'percent') {
            if (specType.baseStat === undefined) {
              return `${specEffectValue / 100}%`;
            }
            return `${Math.floor(stat[specType.baseStat] * (specEffectValue / 10000))}`;
          }
          return '';
        })();
        const indivPDisplayStr = (() => {
          if (indivPType.scaleType === 'fixed') return `${indivPEffectValue}`;
          if (indivPType.scaleType === 'percent') return `${indivPEffectValue / 100}%`;
          return '';
        })();
        return (
          <tr key={cardSetting.key}>
            <td>
              <IconImgButton
                src={getCardIconAssetPath(cardId, true)}
                alt={`${getCardSymbol(cardId, true)}-icon`}
                title={getCardSymbol(cardId, false)}
                onClick={() => openCardModal(cardSetting.key)}
              />
            </td>
            <td>
              <StyledInput
                type="number"
                min="1"
                max="80"
                value={kizunaLv}
                onChange={(event) => {
                  let val = Number(event.target.value);
                  if (val > 80) val = 80;
                  if (val < 1) val = 1;
                  setKizunaLv(cardSetting.key, val);
                }}
              />
            </td>
            <td>
              <select
                id="uncap-set"
                value={uncap}
                onChange={(event) => setUncap(cardSetting.key, Number(event.target.value))}
              >
                {[0, 1, 2, 3, 4, 5].map((u) => (
                  <option key={u} value={u}>{u}</option>
                ))}
              </select>
            </td>
            <td>{stat.appl}</td>
            <td>{stat.stam}</td>
            <td>{stat.tech}</td>
            <DimTd>{`${critPercent.toFixed(2)}%`}</DimTd>
            <DimTd>{vol}</DimTd>
            <td>
              <Flex>
                <SmallImg
                  src={SKILL_EFFECT_CATEGORY[specType.effectCategoryId].iconAssetPath}
                  alt={specType.desc}
                  title={specType.desc}
                />
                <div>
                  <VerticalFlex>
                    <span>{SKILL_TARGET[speciality.skillTargetId].krName}</span>
                    <span>{specDisplayStr}</span>
                  </VerticalFlex>
                </div>
              </Flex>
            </td>
            <td>
              <Flex>
                <SmallImg
                  src={SKILL_EFFECT_CATEGORY[indivPType.effectCategoryId].iconAssetPath}
                  alt={indivPType.desc}
                  title={indivPType.desc}
                />
                <div>
                  <VerticalFlex>
                    <span>{SKILL_TARGET[indivP.skillTargetId].krName}</span>
                    <span>{indivPDisplayStr}</span>
                  </VerticalFlex>
                </div>
              </Flex>
            </td>
            <td>
              <Button
                onClick={() => removeCard(cardSetting.key)}
              >
                제거
              </Button>
            </td>
          </tr>
        );
      })}
      <tr>
        <td colSpan={11}>
          <Button
            onClick={() => openCardModal(null)}
          >
            추가
          </Button>
        </td>
      </tr>
    </tbody>
  </StyledTable>
);

const mapStateToProps = (state: AppState): PropsFromState => ({
  songAttributeId: SEL.simulatorSongAttributeId(state),
  liveEffect: SEL.simulatorLiveEffect(state),
  cardTable: SEL.dbCardTable(state),
  cardComparatorSettings: SEL.cardComparatorCardSettings(state),
});

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => ({
  openCardModal: (key) => {
    dispatch(AC.cardComparator.openCardSelectModal(key));
  },
  setKizunaLv: (key, kizunaLv) => {
    dispatch(AC.cardComparator.editCardKizuna(key, kizunaLv));
  },
  setUncap: (key, uncap) => {
    dispatch(AC.cardComparator.editCardUncap(key, uncap));
  },
  removeCard: (key) => {
    dispatch(AC.cardComparator.removeCard(key));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CardSettings);
