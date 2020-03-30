import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { critProb } from '@/utils/utils';

import { AppState, SEL } from '@/store';
import {
  isAttributeTarget,
  isRoleTarget,
  isGroupTarget,
  isGradeTarget,
  isUnitTarget,
} from '@/store/cards/types';
import Table from '@/components/common/Table';
import { FlexBox } from '@/components/Styles';

import {
  getCardIconAssetPath, getCardSymbol, getFullCardList, isInsuf,
} from '@/data/cardList';
import { ATTRIBUTE, ROLE, RARITY } from '@/data/cardMetadata';
import { MEMBER } from '@/data/memberMetadata';
import { CARD_SKILL } from '@/data/cardSkill';
import { SKILL_LEVEL_MAP } from '@/data/cardSkillLevelMap';
import { CARD_CRIT_BASE } from '@/data/cardCritBase';
import { SKILL, shortSkillTextKr, skillTargetTextKr } from '@/data/skill';
import { SKILL_EFFECT_CATEGORY, SKILL_EFFECT_TYPE } from '@/data/skillEffectType';

const CardIconImg = styled.img`
  padding: 4px;
  width: 64px;
  height: 64px;
`;

const SmallIconImg = styled.img`
  padding: 4px;
  width: 32px;
  height: 32px;
`;

const VerticalFlex = styled(FlexBox)`
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const DetailText = styled.div`
  padding: 1px;
  font-size: 0.7em;
`;

const ToolTipText = styled.div`
  font-size: 0.8em;
  color: gray;
`;

interface PropsFromState {
  filter: ReturnType<typeof SEL.cardsFilter>,
  buff: ReturnType<typeof SEL.cardsBuff>,
  cardTable: ReturnType<typeof SEL.dbCardTable>,
  gachaTable: ReturnType<typeof SEL.dbGachaTable>,
}
type CardTableProps = PropsFromState;

const CardTable: React.FC<CardTableProps> = ({
  filter, buff, cardTable, gachaTable,
}) => {
  const list = getFullCardList(cardTable).filter((card) => {
    if (filter.uncap !== null && card.uncap !== filter.uncap) return false;
    if (filter.outfitSeriesId !== null && card.outfitSeriesId !== filter.outfitSeriesId) return false;
    if (!filter.attribute[card.attributeId]) return false;
    if (!filter.role[card.roleId]) return false;
    if (!filter.rarity[card.rarityId]) return false;
    if (!filter.member[card.memberId]) return false;

    // Speciality filtering
    const specDetail = SKILL[CARD_SKILL[card.id].specialityId].detail;
    // Filter by skill category
    if (filter.specCategory.length !== 0) {
      const specCategoryId = SKILL_EFFECT_TYPE[specDetail.effectTypeId].effectCategoryId;
      const sat = filter.specCategory.some((item) => item.categoryId === specCategoryId);
      if (!sat) return false;
    }
    // Filter by skill target
    if (filter.specTarget.length !== 0) {
      const specTargetId = specDetail.skillTargetId;
      const sat = filter.specTarget.some((item) => {
        const { target } = item;
        if (target.id !== specTargetId) return false;
        /* eslint-disable max-len */
        if (isAttributeTarget(target) && target.attributeId !== null && target.attributeId !== card.attributeId) return false;
        if (isRoleTarget(target) && target.roleId !== null && target.roleId !== card.roleId) return false;
        if (isGroupTarget(target) && target.groupId !== null && target.groupId !== MEMBER[card.memberId].groupId) return false;
        if (isGradeTarget(target) && target.grade !== null && target.grade !== MEMBER[card.memberId].grade) return false;
        if (isUnitTarget(target) && target.unitId !== null && target.unitId !== MEMBER[card.memberId].unitId) return false;
        /* eslint-enable max-len */
        return true;
      });
      if (!sat) return false;
    }

    // Passive skill filtering
    const ipDetail = SKILL[CARD_SKILL[card.id].individuality.passiveId].detail;
    // Filter by skill category
    if (filter.indivPCategory.length !== 0) {
      const ipCategoryId = SKILL_EFFECT_TYPE[ipDetail.effectTypeId].effectCategoryId;
      const sat = filter.indivPCategory.some((item) => item.categoryId === ipCategoryId);
      if (!sat) return false;
    }
    // Filter by skill target
    if (filter.indivPTarget.length !== 0) {
      const ipTargetId = ipDetail.skillTargetId;
      const sat = filter.indivPTarget.some((item) => {
        const { target } = item;
        if (target.id !== ipTargetId) return false;
        /* eslint-disable max-len */
        if (isAttributeTarget(target) && target.attributeId !== null && target.attributeId !== card.attributeId) return false;
        if (isRoleTarget(target) && target.roleId !== null && target.roleId !== card.roleId) return false;
        if (isGroupTarget(target) && target.groupId !== null && target.groupId !== MEMBER[card.memberId].groupId) return false;
        if (isGradeTarget(target) && target.grade !== null && target.grade !== MEMBER[card.memberId].grade) return false;
        if (isUnitTarget(target) && target.unitId !== null && target.unitId !== MEMBER[card.memberId].unitId) return false;
        /* eslint-enable max-len */
        return true;
      });
      if (!sat) return false;
    }

    // Live skill filtering
    const { liveId } = CARD_SKILL[card.id].individuality;
    if (liveId === undefined) {
      // Only when no filter for live skill exists
      const sat = filter.indivLCategory.length === 0 && filter.indivLTarget.length === 0;
      if (!sat) return false;
    } else {
      const ilDetail = SKILL[liveId].detail;
      // Filter by skill category
      if (filter.indivLCategory.length !== 0) {
        const ilCategoryId = SKILL_EFFECT_TYPE[ilDetail.effectTypeId].effectCategoryId;
        const sat = filter.indivLCategory.some((item) => item.categoryId === ilCategoryId);
        if (!sat) return false;
      }
      // Filter by skill target
      if (filter.indivLTarget.length !== 0) {
        const ilTargetId = ilDetail.skillTargetId;
        const sat = filter.indivLTarget.some((item) => {
          const { target } = item;
          if (target.id !== ilTargetId) return false;
          /* eslint-disable max-len */
          if (isAttributeTarget(target) && target.attributeId !== null && target.attributeId !== card.attributeId) return false;
          if (isRoleTarget(target) && target.roleId !== null && target.roleId !== card.roleId) return false;
          if (isGroupTarget(target) && target.groupId !== null && target.groupId !== MEMBER[card.memberId].groupId) return false;
          if (isGradeTarget(target) && target.grade !== null && target.grade !== MEMBER[card.memberId].grade) return false;
          if (isUnitTarget(target) && target.unitId !== null && target.unitId !== MEMBER[card.memberId].unitId) return false;
          /* eslint-enable max-len */
          return true;
        });
        if (!sat) return false;
      }
    }

    return true;
  }).map((card) => {
    // Base Stat Multiplier (%)
    let baseApplMul = 100;
    let baseStamMul = 100;
    let baseTechMul = 100;
    // Stat Multiplier (%)
    let applMul = 100;
    let stamMul = 100;
    let techMul = 100;
    // Different attribute debuf
    if (buff.attributeId !== null && buff.attributeId !== card.attributeId) {
      if (buff.diffAttrDebuf.targetParam === 'baseAppl') {
        baseApplMul -= buff.diffAttrDebuf.value;
      } else {
        applMul -= buff.diffAttrDebuf.value;
      }
    }
    // Same attribute buff
    if (buff.attributeId === card.attributeId) {
      applMul += 20;
      stamMul += 20;
      techMul += 20;
    }
    // Individuality passive effect
    if (buff.indivPEffect) {
      const ipDetail = SKILL[CARD_SKILL[card.id].individuality.passiveId].detail;
      const ipLevel = SKILL_LEVEL_MAP[card.id].individuality.passive[card.uncap];
      if (ipDetail.skillTargetId !== 2) { // Exclude itself
        const amount = ipDetail.effectValue[ipLevel - 1] / 100;
        switch (ipDetail.effectTypeId) {
          case 200101:
            baseApplMul += amount;
            break;
          case 200201:
            baseStamMul += amount;
            break;
          case 200301:
            baseTechMul += amount;
            break;
          default:
            console.error('Should not reach here');
        }
      }
    }

    const appl = Math.floor(Math.floor(card.appl * (baseApplMul / 100)) * (applMul / 100));
    const stam = Math.floor(Math.floor(card.stam * (baseStamMul / 100)) * (stamMul / 100));
    const tech = Math.floor(Math.floor(card.tech * (baseTechMul / 100)) * (techMul / 100));

    const voltageMul = (() => {
      if (!buff.roleEffect) return 1; // Not applying role effect
      if (card.roleId === 1) return 1.05; // Vo
      if (card.roleId === 4) return 0.95; // Sk
      return 1;
    })();
    const critPercent = critProb(appl, tech, CARD_CRIT_BASE[card.id].value);
    const newVoltage = Math.floor((appl + 0.5 * appl * (critPercent / 100)) * voltageMul);
    return {
      ...card,
      appl,
      stam,
      tech,
      expectedVoltage: newVoltage,
      critProb: critPercent,
    };
  });
  return (
    <Table
      column={[
        {
          title: 'ID',
          render: (rowData) => (
            <span style={{ backgroundColor: isInsuf(rowData.id) ? '#d1d1d1' : 'transparent' }}>
              {`${rowData.id}${isInsuf(rowData.id) ? '?' : ''}`}
            </span>
          ),
          customSort: (a, b) => a.id - b.id,
        },
        {
          title: '아이콘',
          render: (rowData) => (
            <>
              <Link to={`card/${rowData.id}`}>
                <CardIconImg
                  src={getCardIconAssetPath(rowData.id, false)}
                  alt={`${getCardSymbol(rowData.id, false)}-icon`}
                  title={`${RARITY[rowData.rarityId].symbol} ${MEMBER[rowData.memberId].shortName}`}
                />
              </Link>
              <Link to={`card/${rowData.id}`}>
                <CardIconImg
                  src={getCardIconAssetPath(rowData.id, true)}
                  alt={`${getCardSymbol(rowData.id, true)}-icon`}
                  title={`${RARITY[rowData.rarityId].symbol} ${MEMBER[rowData.memberId].shortName}`}
                />
              </Link>
            </>
          ),
        },
        {
          title: '이름',
          render: (rowData) => (
            <VerticalFlex>
              <VerticalFlex style={{ paddingBottom: '4px' }}>
                <ToolTipText>{rowData.title}</ToolTipText>
                <ToolTipText>{rowData.awakenTitle}</ToolTipText>
              </VerticalFlex>
              <div>{MEMBER[rowData.memberId].name}</div>
            </VerticalFlex>
          ),
          customSort: (a, b) => a.memberId - b.memberId,
        },
        {
          title: '레어도',
          render: (rowData) => <span>{RARITY[rowData.rarityId].symbol}</span>,
          customSort: (a, b) => a.rarityId - b.rarityId,
        },
        {
          title: '속성',
          render: (rowData) => (
            <SmallIconImg
              src={ATTRIBUTE[rowData.attributeId].iconAssetPath}
              alt={`${ATTRIBUTE[rowData.attributeId].symbol}-icon`}
              title={ATTRIBUTE[rowData.attributeId].name}
            />
          ),
          customSort: (a, b) => a.attributeId - b.attributeId,
        },
        {
          title: '타입',
          render: (rowData) => (
            <SmallIconImg
              src={ROLE[rowData.roleId].iconAssetPath}
              alt={`${ROLE[rowData.roleId].symbol}-icon`}
              title={ROLE[rowData.roleId].name}
            />
          ),
          customSort: (a, b) => a.roleId - b.roleId,
        },
        {
          title: '한돌',
          render: (rowData) => <span>{rowData.uncap}</span>,
          customSort: (a, b) => a.uncap - b.uncap,
        },
        {
          title: '어필',
          render: (rowData) => <span>{rowData.appl}</span>,
          customSort: (a, b) => a.appl - b.appl,
        },
        {
          title: '스태',
          render: (rowData) => <span>{rowData.stam}</span>,
          customSort: (a, b) => a.stam - b.stam,
        },
        {
          title: '테크닉',
          render: (rowData) => <span>{rowData.tech}</span>,
          customSort: (a, b) => a.tech - b.tech,
        },
        {
          title: '크리율',
          render: (rowData) => (
            <span style={{ color: '#777' }}>
              {`${rowData.critProb.toFixed(2)}%`}
            </span>
          ),
          customSort: (a, b) => a.critProb - b.critProb,
        },
        {
          title: '기대 볼티지',
          render: (rowData) => <span style={{ color: '#777' }}>{rowData.expectedVoltage}</span>,
          customSort: (a, b) => a.expectedVoltage - b.expectedVoltage,
        },
        {
          title: '특기',
          render: (rowData) => {
            const levelMap = SKILL_LEVEL_MAP[rowData.id].speciality;
            const specialityDetail = SKILL[CARD_SKILL[rowData.id].specialityId].detail;
            const { effectTypeId } = specialityDetail;
            const categoryId = SKILL_EFFECT_TYPE[effectTypeId].effectCategoryId;
            return (
              <VerticalFlex>
                <div>
                  <SmallIconImg
                    src={SKILL_EFFECT_CATEGORY[categoryId].iconAssetPath}
                    alt={SKILL_EFFECT_CATEGORY[categoryId].desc}
                    title={SKILL_EFFECT_CATEGORY[categoryId].desc}
                  />
                </div>
                <DetailText>
                  {shortSkillTextKr(specialityDetail, levelMap[rowData.uncap])}
                </DetailText>
                <DetailText>
                  {skillTargetTextKr(specialityDetail)}
                </DetailText>
              </VerticalFlex>
            );
          },
          customSort: (a, b) => {
            const aDetail = SKILL[CARD_SKILL[a.id].specialityId].detail;
            const aEffect = SKILL_EFFECT_TYPE[aDetail.effectTypeId];
            const bDetail = SKILL[CARD_SKILL[b.id].specialityId].detail;
            const bEffect = SKILL_EFFECT_TYPE[bDetail.effectTypeId];
            if (aEffect.effectCategoryId - bEffect.effectCategoryId !== 0) {
              return aEffect.effectCategoryId - bEffect.effectCategoryId;
            }
            if (aEffect.scaleType !== bEffect.scaleType) {
              return aEffect.scaleType === 'percent' ? 1 : -1;
            }
            const aLevel = SKILL_LEVEL_MAP[a.id].speciality[a.uncap];
            const bLevel = SKILL_LEVEL_MAP[b.id].speciality[b.uncap];
            return aDetail.effectValue[aLevel - 1] - bDetail.effectValue[bLevel - 1];
          },
        },
        {
          title: '개성 (패시브)',
          render: (rowData) => {
            const levelMap = SKILL_LEVEL_MAP[rowData.id].individuality.passive;
            const passiveDetail = SKILL[CARD_SKILL[rowData.id].individuality.passiveId].detail;
            const { effectTypeId } = passiveDetail;
            const categoryId = SKILL_EFFECT_TYPE[effectTypeId].effectCategoryId;
            return (
              <VerticalFlex>
                <div>
                  <SmallIconImg
                    src={SKILL_EFFECT_CATEGORY[categoryId].iconAssetPath}
                    alt={SKILL_EFFECT_CATEGORY[categoryId].desc}
                    title={SKILL_EFFECT_CATEGORY[categoryId].desc}
                  />
                </div>
                <DetailText>
                  {shortSkillTextKr(passiveDetail, levelMap[rowData.uncap])}
                </DetailText>
                <DetailText>
                  {skillTargetTextKr(passiveDetail)}
                </DetailText>
              </VerticalFlex>
            );
          },
          customSort: (a, b) => {
            const aDetail = SKILL[CARD_SKILL[a.id].individuality.passiveId].detail;
            const aEffect = SKILL_EFFECT_TYPE[aDetail.effectTypeId];
            const bDetail = SKILL[CARD_SKILL[b.id].individuality.passiveId].detail;
            const bEffect = SKILL_EFFECT_TYPE[bDetail.effectTypeId];
            if (aEffect.effectCategoryId - bEffect.effectCategoryId !== 0) {
              return aEffect.effectCategoryId - bEffect.effectCategoryId;
            }
            if (aEffect.scaleType !== bEffect.scaleType) {
              return aEffect.scaleType === 'percent' ? 1 : -1;
            }
            const aLevel = SKILL_LEVEL_MAP[a.id].individuality.passive[a.uncap];
            const bLevel = SKILL_LEVEL_MAP[b.id].individuality.passive[b.uncap];
            return aDetail.effectValue[aLevel - 1] - bDetail.effectValue[bLevel - 1];
          },
        },
        {
          title: '개성 (라이브)',
          render: (rowData) => {
            const { liveId } = CARD_SKILL[rowData.id].individuality;
            if (liveId === undefined) return <span />;
            const liveDetail = SKILL[liveId].detail;
            const { effectTypeId } = liveDetail;
            const categoryId = SKILL_EFFECT_TYPE[effectTypeId].effectCategoryId;
            return (
              <VerticalFlex>
                <div>
                  <SmallIconImg
                    src={SKILL_EFFECT_CATEGORY[categoryId].iconAssetPath}
                    alt={SKILL_EFFECT_CATEGORY[categoryId].desc}
                    title={SKILL_EFFECT_CATEGORY[categoryId].desc}
                  />
                </div>
                <DetailText>
                  {SKILL_EFFECT_CATEGORY[categoryId].desc}
                </DetailText>
                <DetailText>
                  {skillTargetTextKr(liveDetail)}
                </DetailText>
              </VerticalFlex>
            );
          },
          customSort: (a, b) => {
            const aLiveId = CARD_SKILL[a.id].individuality.liveId;
            const bLiveId = CARD_SKILL[b.id].individuality.liveId;
            if (aLiveId === undefined) return -1;
            if (bLiveId === undefined) return 1;
            const aDetail = SKILL[aLiveId].detail;
            const aEffect = SKILL_EFFECT_TYPE[aDetail.effectTypeId];
            const bDetail = SKILL[bLiveId].detail;
            const bEffect = SKILL_EFFECT_TYPE[bDetail.effectTypeId];
            if (aEffect.effectCategoryId - bEffect.effectCategoryId !== 0) {
              return aEffect.effectCategoryId - bEffect.effectCategoryId;
            }
            if (aEffect.scaleType !== bEffect.scaleType) {
              return aEffect.scaleType === 'percent' ? 1 : -1;
            }
            return aDetail.effectValue[0] - bDetail.effectValue[0];
          },
        },
        {
          title: '첫 출현',
          render: (rowData) => {
            if (rowData.fromId[0] === 'gacha') {
              const prefix = '가챠';
              const gachaType = gachaTable[rowData.fromId[1]].type;
              if (gachaType === 'normal') return <span>{`${prefix} (일반)`}</span>;
              if (gachaType === 'event') return <span>{`${prefix} (이벤트)`}</span>;
              if (gachaType === 'pickup') return <span>{`${prefix} (픽업)`}</span>;
              if (gachaType === 'fes') return <span>{`${prefix} (페스)`}</span>;
            }
            if (rowData.fromId[0] === 'event') {
              return <span>이벤트</span>;
            }
            return <span />;
          },
          customSort: (a, b) => {
            if (a.fromId[0] > b.fromId[0]) {
              return 1;
            }
            if (a.fromId[0] < b.fromId[0]) {
              return -1;
            }
            return a.fromId[1] - b.fromId[1];
          },
        },
      ]}
      data={list}
      pageSize={50}
    />
  );
};

const mapStateToProps = (state: AppState): PropsFromState => ({
  filter: SEL.cardsFilter(state),
  buff: SEL.cardsBuff(state),
  cardTable: SEL.dbCardTable(state),
  gachaTable: SEL.dbGachaTable(state),
});

export default connect(mapStateToProps)(CardTable);
