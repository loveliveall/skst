import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { AppState, SEL } from '@/store';
import Table from '@/components/common/Table';
import { FlexBox } from '@/components/Styles';

import { getCardIconAssetPath, getCardSymbol } from '@/data/cardList';
import { ATTRIBUTE, ROLE, RARITY } from '@/data/cardMetadata';
import { MEMBER } from '@/data/memberMetadata';
import { GACHA } from '@/data/gacha';
import { CARD_SKILL } from '@/data/cardSkill';
import { SKILL_LEVEL_MAP } from '@/data/cardSkillLevelMap';
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
  list: ReturnType<typeof SEL.cardsList>,
}
type CardTable = PropsFromState;

const CardTable: React.FC<CardTable> = ({ list }) => (
  <Table
    column={[
      {
        title: 'ID',
        render: (rowData) => <span>{rowData.id}</span>,
        customSort: (a, b) => a.id - b.id,
      },
      {
        title: '아이콘',
        render: (rowData) => (
          <>
            <CardIconImg
              src={getCardIconAssetPath(rowData.id, false)}
              alt={`${getCardSymbol(rowData.id, false)}-icon`}
              title={`${RARITY[rowData.rarityId].symbol} ${MEMBER[rowData.memberId].shortName}`}
            />
            <CardIconImg
              src={getCardIconAssetPath(rowData.id, true)}
              alt={`${getCardSymbol(rowData.id, true)}-icon`}
              title={`${RARITY[rowData.rarityId].symbol} ${MEMBER[rowData.memberId].shortName}`}
            />
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
        title: '스태미너',
        render: (rowData) => <span>{rowData.stam}</span>,
        customSort: (a, b) => a.stam - b.stam,
      },
      {
        title: '테크닉',
        render: (rowData) => <span>{rowData.tech}</span>,
        customSort: (a, b) => a.tech - b.tech,
      },
      {
        title: '기대 볼티지',
        render: (rowData) => <span>{rowData.expectedVoltage}</span>,
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
            const gachaType = GACHA[rowData.fromId[1]].type;
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
    maxWidth="calc(100vw - 20px)"
  />
);

const mapStateToProps = (state: AppState): PropsFromState => ({
  list: SEL.cardsList(state),
});

export default connect(mapStateToProps)(CardTable);
