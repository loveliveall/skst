import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';

import { CARD } from '@/data/cardList';
import { MEMBER } from '@/data/memberMetadata';
import { RARITY } from '@/data/cardMetadata';

import StatTable from './StatTable';

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
    </div>
  );
};

export default withRouter(Card);
