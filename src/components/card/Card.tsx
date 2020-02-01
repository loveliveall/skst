import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { CARD } from '@/data/cardList';
import { MEMBER } from '@/data/memberMetadata';
import { RARITY, ATTRIBUTE, ROLE } from '@/data/cardMetadata';

import StatTable from './StatTable';
import StatRankTable from './StatRankTable';

interface MatchProps {
  id: string,
}
type CardProps = RouteComponentProps<MatchProps>;

const Card: React.FC<CardProps> = ({
  match,
}) => {
  const cardId = Number(match.params.id);
  const card = CARD[cardId];
  if (card === undefined) return null;
  const member = MEMBER[card.memberId];
  const rarity = RARITY[card.rarityId];
  return (
    <div>
      <div>{`#${cardId} ${rarity.symbol} ${member.name}`}</div>
      <StatTable id={cardId} />
      <div>모든 카드 대상 스탯 순위</div>
      <StatRankTable id={cardId} sameAttribute={false} sameRole={false} />
      <div>{`동속성(${ATTRIBUTE[card.attributeId].name}) 대상 스탯 순위`}</div>
      <StatRankTable id={cardId} sameAttribute sameRole={false} />
      <div>{`동타입(${ROLE[card.roleId].symbol}) 대상 스탯 순위`}</div>
      <StatRankTable id={cardId} sameAttribute={false} sameRole />
      <div>{`동속성(${ATTRIBUTE[card.attributeId].name}) 및 동타입(${ROLE[card.roleId].symbol}) 대상 스탯 순위`}</div>
      <StatRankTable id={cardId} sameAttribute sameRole />
    </div>
  );
};

export default withRouter(Card);
