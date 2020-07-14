import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { AppState, SEL } from '@/store';
import { ATTRIBUTE, ROLE, RARITY } from '@/data/cardMetadata';
import { MEMBER, GROUP, UNIT } from '@/data/memberMetadata';
import { getSkillInfoKR } from '@/data/skill';
import { CARD_SKILL } from '@/data/cardSkill';
import { SKILL_EFFECT_CATEGORY } from '@/data/skillEffectType';
import { CARD_CRIT_BASE } from '@/data/cardCritBase';
import { FlexBox } from '../Styles';

const VerticalFlex = styled(FlexBox)`
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const SkillInfoBox = styled(FlexBox)`
  align-items: center;
  flex-wrap: initial;
`;

const StyledTable = styled.table`
  border: 1px solid black;
  border-collapse: collapse;
  width: 100%;

  td, th {
    text-align: center;
    padding: 8px;
    border: 1px solid black;
    white-space: nowrap;
  }
`;

const TitleTh = styled.th`
  background-color: lightgray;
  width: 15%;
`;

const Icon = styled.img`
  width: 32px;
  height: 32px;
`;

const SkillIcon = styled.img`
  width: 40px;
  height: 40px;
  padding-right: 8px;
`;

const TextDiv = styled.div`
  padding: 1px;
`;

const SingleTd = styled.td`
  width: 85%;
`;
const DoubleTd = styled.td`
  width: 35%;
`;

interface OwnProps {
  id: number,
}
interface PropsFromState {
  cardTable: ReturnType<typeof SEL.dbCardTable>,
  gachaTable: ReturnType<typeof SEL.dbGachaTable>,
  eventTable: ReturnType<typeof SEL.dbEventTable>,
}
type CardInfoTableProps = OwnProps & PropsFromState;

const CardInfoTable: React.FC<CardInfoTableProps> = ({
  id, cardTable, gachaTable, eventTable,
}) => {
  const card = cardTable[id];
  const attribute = ATTRIBUTE[card.attributeId];
  const role = ROLE[card.roleId];
  const rarity = RARITY[card.rarityId];
  const member = MEMBER[card.memberId];
  const group = GROUP[member.groupId];
  const unit = UNIT[member.unitId];

  const specialityInfo = getSkillInfoKR(CARD_SKILL[id].specialityId);
  const specialityCategory = SKILL_EFFECT_CATEGORY[specialityInfo.effectCategoryId];
  const passiveInfo = getSkillInfoKR(CARD_SKILL[id].individuality.passiveId);
  const passiveCategory = SKILL_EFFECT_CATEGORY[passiveInfo.effectCategoryId];
  const { liveId } = CARD_SKILL[id].individuality;
  const liveInfo = liveId === undefined ? undefined : getSkillInfoKR(liveId);

  const fromString = (() => {
    if (card.fromId[0] === 'gacha') {
      const gacha = gachaTable[card.fromId[1]];
      return `가챠: ${gacha.name} (${gacha.startDate} - ${gacha.endDate})`;
    }
    const event = eventTable[card.fromId[1]];
    return `이벤트: ${event.name} (${event.startDate} - ${event.endDate})`;
  })();

  return (
    <StyledTable>
      <tbody>
        <tr>
          <TitleTh>각성 전</TitleTh>
          <SingleTd colSpan={3}>{card.title}</SingleTd>
        </tr>
        <tr>
          <TitleTh>각성 후</TitleTh>
          <SingleTd colSpan={3}>{card.awakenTitle}</SingleTd>
        </tr>
        <tr>
          <TitleTh>레어도</TitleTh>
          <SingleTd colSpan={3}>{rarity.symbol}</SingleTd>
        </tr>
        <tr>
          <TitleTh>속성</TitleTh>
          <DoubleTd>
            <Icon
              src={attribute.iconAssetPath}
              alt={`${attribute.symbol}-icon`}
              title={attribute.name}
            />
          </DoubleTd>
          <TitleTh>타입</TitleTh>
          <DoubleTd>
            <Icon
              src={role.iconAssetPath}
              alt={`${role.symbol}-icon`}
              title={role.name}
            />
          </DoubleTd>
        </tr>
        <tr>
          <TitleTh>첫 출현</TitleTh>
          <SingleTd colSpan={3}>{fromString}</SingleTd>
        </tr>
        <tr>
          <TitleTh>특기</TitleTh>
          <SingleTd colSpan={3}>
            <SkillInfoBox>
              <SkillIcon
                src={specialityCategory.iconAssetPath}
                alt={specialityCategory.desc}
                title={specialityCategory.desc}
              />
              <div>
                <VerticalFlex>
                  {specialityInfo.effectString.map((str) => (
                    <TextDiv key={str}>{str}</TextDiv>
                  ))}
                  {specialityInfo.targetString !== '' && (
                    <TextDiv>{`대상: ${specialityInfo.targetString}`}</TextDiv>
                  )}
                  <TextDiv>{`발동 확률: ${specialityInfo.probString}`}</TextDiv>
                </VerticalFlex>
              </div>
            </SkillInfoBox>
          </SingleTd>
        </tr>
        <tr>
          <TitleTh>개성(패시브)</TitleTh>
          <SingleTd colSpan={3}>
            <SkillInfoBox>
              <SkillIcon
                src={passiveCategory.iconAssetPath}
                alt={passiveCategory.desc}
                title={passiveCategory.desc}
              />
              <div>
                <VerticalFlex>
                  <TextDiv>
                    {`${passiveInfo.effectString}${passiveInfo.targetString === ''
                      ? '' : `, 대상: ${passiveInfo.targetString}`}`}
                  </TextDiv>
                  {passiveInfo.probString !== '' && <TextDiv>{`발동 확률: ${passiveInfo.probString}`}</TextDiv>}
                </VerticalFlex>
              </div>
            </SkillInfoBox>
          </SingleTd>
        </tr>
        <tr>
          <TitleTh>개성(라이브)</TitleTh>
          <SingleTd colSpan={3}>
            {liveInfo === undefined ? '없음' : (
              <SkillInfoBox>
                <SkillIcon
                  src={SKILL_EFFECT_CATEGORY[liveInfo.effectCategoryId].iconAssetPath}
                  alt={SKILL_EFFECT_CATEGORY[liveInfo.effectCategoryId].desc}
                  title={SKILL_EFFECT_CATEGORY[liveInfo.effectCategoryId].desc}
                />
                <div>
                  <VerticalFlex>
                    <TextDiv>{liveInfo.triggerString}</TextDiv>
                    <TextDiv>
                      {`${liveInfo.effectString}${liveInfo.targetString === ''
                        ? '' : `, 대상: ${liveInfo.targetString}`}`}
                    </TextDiv>
                    {liveInfo.probString !== '' && <TextDiv>{`발동 확률: ${liveInfo.probString}`}</TextDiv>}
                  </VerticalFlex>
                </div>
              </SkillInfoBox>
            )}
          </SingleTd>
        </tr>
        <tr>
          <TitleTh>그룹</TitleTh>
          <DoubleTd>{group.name}</DoubleTd>
          <TitleTh>학년</TitleTh>
          <DoubleTd>{`${member.grade}학년`}</DoubleTd>
        </tr>
        <tr>
          <TitleTh>유닛</TitleTh>
          <DoubleTd>{unit.name}</DoubleTd>
          <TitleTh>크리 보정</TitleTh>
          <DoubleTd>{`${CARD_CRIT_BASE[id].value}%p`}</DoubleTd>
        </tr>
      </tbody>
    </StyledTable>
  );
};

const mapStateToProps = (state: AppState): PropsFromState => ({
  cardTable: SEL.dbCardTable(state),
  gachaTable: SEL.dbGachaTable(state),
  eventTable: SEL.dbEventTable(state),
});

export default connect(mapStateToProps)(CardInfoTable);
