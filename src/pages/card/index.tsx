import React from 'react';
import { RouteComponentProps, withRouter, Link } from 'react-router-dom';
import {
  Box,
  Heading,
  IconButton,
  Image,
  HStack,
  VStack,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
} from '@chakra-ui/icons';

import { getCardIconAssetPath, getCardSymbol, getCardTitle } from '@/utils';

import { CARD } from '@/data/cardList';
import { MEMBER } from '@/data/memberMetadata';
import { RARITY } from '@/data/cardMetadata';

import CardBasicInfo from './CardBasicInfo';
import CardStatInfo from './CardStatInfo';
import CardStatRank from './CardStatRank';
import CardSkillInfo from './CardSkillInfo';

type MatchProps = {
  id: string,
};
type CardProps = RouteComponentProps<MatchProps>;

const Card: React.FC<CardProps> = ({
  match,
}) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [match.params.id]);
  // const [sameRarity, setSameRarity] = React.useState(false);
  const cardId = Number(match.params.id);
  const card = CARD[cardId];

  if (card === undefined) return null;
  const rarity = RARITY[card.rarityId];
  const member = MEMBER[card.memberId];
  if (member === undefined) throw Error(`Member ${card.memberId} not found`);
  const isBegin = cardId <= 1;
  const isEnd = cardId >= Math.max(...Object.keys(CARD).map(Number));

  return (
    <VStack spacing={4}>
      <HStack>
        <IconButton
          as={isBegin ? undefined : Link}
          to={`/card/${cardId - 1}`}
          aria-label="prev-card"
          icon={<ChevronLeftIcon />}
          disabled={isBegin}
        />
        <Heading as="h2" size="lg" wordBreak="keep-all" textAlign="center">
          {`#${cardId} ${rarity.symbol} ${member.shortName}`}
        </Heading>
        <IconButton
          as={isEnd ? undefined : Link}
          to={`/card/${cardId + 1}`}
          aria-label="next-card"
          icon={<ChevronRightIcon />}
          disabled={isEnd}
        />
      </HStack>
      <Wrap spacing={2}>
        <WrapItem>
          <VStack>
            <Box width="96px" height="96px">
              <Image
                src={getCardIconAssetPath(cardId, false)}
                alt={getCardSymbol(cardId, false)}
                title={getCardTitle(cardId, false)}
              />
            </Box>
            <Text>각성 전</Text>
          </VStack>
        </WrapItem>
        <WrapItem>
          <VStack>
            <Box width="96px" height="96px">
              <Image
                src={getCardIconAssetPath(cardId, true)}
                alt={getCardSymbol(cardId, true)}
                title={getCardTitle(cardId, true)}
              />
            </Box>
            <Text>각성 후</Text>
          </VStack>
        </WrapItem>
      </Wrap>
      <CardBasicInfo cardId={cardId} />
      <CardStatInfo cardId={cardId} />
      <CardSkillInfo cardId={cardId} />
      <CardStatRank cardId={cardId} />
    </VStack>
  );
};

export default withRouter(Card);
