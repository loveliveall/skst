import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { FixedWrapper, FlexBox } from '@/components/Styles';

import { CARD, getCardIconAssetPath, getCardSymbol } from '@/data/cardList';
import { MEMBER } from '@/data/memberMetadata';
import { RARITY, ATTRIBUTE, ROLE } from '@/data/cardMetadata';

import CardInfoTable from './CardInfoTable';
import StatTable from './StatTable';
import StatRankTable from './StatRankTable';

const VerticalFlex = styled(FlexBox)`
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const RowWrapper = styled(FixedWrapper)`
  padding-top: 4px;
  padding-bottom: 4px;
`;

const CardIconImg = styled.img`
  padding: 4px;
  width: 96px;
  height: 96px;
`;

const PaddedDiv = styled.div`
  padding: 4px;
`;

interface MatchProps {
  id: string,
}
type CardProps = RouteComponentProps<MatchProps>;

const Card: React.FC<CardProps> = ({
  match,
}) => {
  window.scrollTo(0, 0);
  const cardId = Number(match.params.id);
  const card = CARD[cardId];
  if (card === undefined) return null;
  const member = MEMBER[card.memberId];
  const rarity = RARITY[card.rarityId];
  return (
    <VerticalFlex>
      <RowWrapper>
        <h2>{`#${cardId} ${rarity.symbol} ${member.name}`}</h2>
      </RowWrapper>
      <RowWrapper>
        <FlexBox>
          <div>
            <VerticalFlex>
              <CardIconImg
                src={getCardIconAssetPath(cardId, false)}
                alt={`${getCardSymbol(cardId, false)}-icon`}
                title={`${rarity.symbol} ${member.shortName}`}
              />
              <div>각성 전</div>
            </VerticalFlex>
          </div>
          <div>
            <VerticalFlex>
              <CardIconImg
                src={getCardIconAssetPath(cardId, true)}
                alt={`${getCardSymbol(cardId, true)}-icon`}
                title={`${rarity.symbol} ${member.shortName}`}
              />
              <div>각성 후</div>
            </VerticalFlex>
          </div>
        </FlexBox>
      </RowWrapper>
      <RowWrapper>
        <CardInfoTable id={cardId} />
      </RowWrapper>
      <RowWrapper>
        <PaddedDiv><strong>한계돌파별 스탯표 (만렙 및 모든 특훈 개방 기준)</strong></PaddedDiv>
      </RowWrapper>
      <RowWrapper>
        <StatTable id={cardId} />
      </RowWrapper>
      <RowWrapper>
        <VerticalFlex>
          <PaddedDiv><strong>스탯 순위표</strong></PaddedDiv>
          <PaddedDiv>동일 한돌 대상 카드 중 특정 스탯이 전체에서 몇 위를 차지하는지에 대한 표입니다</PaddedDiv>
          <PaddedDiv>괄호 안은 동일 스탯을 가진 카드의 수 입니다</PaddedDiv>
        </VerticalFlex>
      </RowWrapper>
      <RowWrapper>
        <PaddedDiv style={{ paddingBottom: '0px' }}>모든 카드 대상 순위표</PaddedDiv>
      </RowWrapper>
      <RowWrapper>
        <StatRankTable id={cardId} sameAttribute={false} sameRole={false} />
      </RowWrapper>
      <RowWrapper>
        <PaddedDiv style={{ paddingBottom: '0px' }}>
          {`동속성(${ATTRIBUTE[card.attributeId].name}) 대상 스탯 순위표`}
        </PaddedDiv>
      </RowWrapper>
      <RowWrapper>
        <StatRankTable id={cardId} sameAttribute sameRole={false} />
      </RowWrapper>
      <RowWrapper>
        <PaddedDiv style={{ paddingBottom: '0px' }}>
          {`동타입(${ROLE[card.roleId].symbol}) 대상 스탯 순위표`}
        </PaddedDiv>
      </RowWrapper>
      <RowWrapper>
        <StatRankTable id={cardId} sameAttribute={false} sameRole />
      </RowWrapper>
      <RowWrapper>
        <PaddedDiv style={{ paddingBottom: '0px' }}>
          {`동속성(${ATTRIBUTE[card.attributeId].name}) 및 동타입(${ROLE[card.roleId].symbol}) 대상 스탯 순위표`}
        </PaddedDiv>
      </RowWrapper>
      <RowWrapper>
        <StatRankTable id={cardId} sameAttribute sameRole />
      </RowWrapper>
    </VerticalFlex>
  );
};

export default withRouter(Card);
