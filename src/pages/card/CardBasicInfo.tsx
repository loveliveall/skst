import React from 'react';
import {
  useColorModeValue,
  Heading,
  Stack,
  Text, TextProps,
} from '@chakra-ui/react';

import { getCardSrc } from '@/utils';
import { DESKTOP_BP } from '@/consts';

import { CARD } from '@/data/cardList';
import { ATTRIBUTE, ROLE } from '@/data/cardMetadata';
import { GROUP, MEMBER, UNIT } from '@/data/memberMetadata';
import { EVENT } from '@/data/event';
import { GACHA } from '@/data/gacha';

import { Surface } from './common';

const ATT_COLOR_SCHEME: { [attId: number]: [TextProps['color'], TextProps['color']], } = {
  1: ['pink.500', 'pink.200'],
  2: ['green.500', 'green.200'],
  3: ['blue.500', 'blue.200'],
  4: ['red.500', 'red.200'],
  5: ['yellow.500', 'yellow.200'],
  6: ['purple.500', 'purple.200'],
};

const ROLE_COLOR_SCHEME: { [roleId: number]: [TextProps['color'], TextProps['color']], } = {
  1: ['red.500', 'red.200'],
  2: ['blue.500', 'blue.200'],
  3: ['green.500', 'green.200'],
  4: ['yellow.500', 'yellow.200'],
};

type CardBasicInfoProps = {
  cardId: number,
};
const CardBasicInfo: React.FC<CardBasicInfoProps> = ({ cardId }) => {
  const card = CARD[cardId];
  if (card === undefined) throw Error(`Card ${cardId} not found`);
  const src = getCardSrc(cardId);
  const firstOut = (() => {
    if (src.type === 'event') {
      const event = EVENT[src.eventId];
      if (event === undefined) throw Error(`Event ${src.eventId} not found`);
      return `이벤트 [${event.name}] (${event.startDate} - ${event.endDate})`;
    }
    if (src.type === 'gacha') {
      const gacha = GACHA[src.gachaId];
      if (gacha === undefined) throw Error(`Gacha ${src.gachaId} not found`);
      return `가챠 [${gacha.name}] (${gacha.startDate} - ${gacha.endDate})`;
    }
    return 'N/A';
  })();
  return (
    <Surface>
      <Heading as="h3" size="md" marginBottom={2}>카드 기본 정보</Heading>
      <Stack spacing={0}>
        <Text>
          <strong>각성 전: </strong>
          {card.title}
        </Text>
        <Text>
          <strong>각성 후: </strong>
          {card.awakenTitle}
        </Text>
        <Stack direction={{ base: 'column', [DESKTOP_BP]: 'row' }} spacing={0}>
          <Text flex={1}>
            <strong>속성: </strong>
            <Text as="span" color={useColorModeValue(...ATT_COLOR_SCHEME[card.attributeId]!)}>
              {ATTRIBUTE[card.attributeId]!.name}
            </Text>
          </Text>
          <Text flex={1}>
            <strong>타입: </strong>
            <Text as="span" color={useColorModeValue(...ROLE_COLOR_SCHEME[card.roleId]!)}>
              {ROLE[card.roleId]!.name}
            </Text>
          </Text>
        </Stack>
        <Text>
          <strong>첫 출현: </strong>
          {firstOut}
        </Text>
        <Stack direction={{ base: 'column', [DESKTOP_BP]: 'row' }} spacing={0}>
          <Text flex={1}>
            <strong>그룹: </strong>
            {GROUP[MEMBER[card.memberId]!.groupId]!.name}
          </Text>
          <Text flex={1}>
            <strong>학년: </strong>
            {`${MEMBER[card.memberId]!.grade}학년`}
          </Text>
          <Text flex={1}>
            <strong>유닛: </strong>
            {UNIT[MEMBER[card.memberId]!.unitId]?.name ?? '없음'}
          </Text>
        </Stack>
        <Text>
          <strong>크리 보정치: </strong>
          {`${card.critOffset / 100}%p`}
        </Text>
      </Stack>
    </Surface>
  );
};

export default CardBasicInfo;
