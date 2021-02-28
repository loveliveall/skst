import React from 'react';
import {
  useColorModeValue,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Heading,
  Text,
} from '@chakra-ui/react';

import { getCritProb } from '@/statUtils';
import FixedWrapper from '@/components/FixedWrapper';

import { CARD } from '@/data/cardList';
import { PARAMETER } from '@/data/cardParameter';

import { Surface } from './common';

type CardStatInfoProps = {
  cardId: number,
};
const CardStatInfo: React.FC<CardStatInfoProps> = ({ cardId }) => {
  const tooltipColor = useColorModeValue('gray.500', 'gray.400');
  const card = CARD[cardId];
  const param = PARAMETER[cardId];
  if (card === undefined) throw Error(`Card ${cardId} not found`);
  if (param === undefined) throw Error(`Parameter for card ${cardId} not found`);
  return (
    <Surface>
      <Heading as="h3" size="md" marginBottom={2}>카드 스탯</Heading>
      <Text wordBreak="keep-all">모든 스탯은 해당 한돌 상태의 특훈 완료 및 구만렙(R:40, SR:60, UR:80) 상태의 스탯</Text>
      <Text marginBottom={2}>괄호 안은 스탯 배분 비율</Text>
      <FixedWrapper>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>★</Th>
              <Th>어필</Th>
              <Th>스태</Th>
              <Th>테크닉</Th>
              <Th>크리율</Th>
              <Th>스탯합</Th>
            </Tr>
          </Thead>
          <Tbody>
            {param.map((el, uncap) => {
              const sum = el.a + el.s + el.t;
              return (
                // eslint-disable-next-line react/no-array-index-key
                <Tr key={uncap}>
                  <Td><Text>{uncap}</Text></Td>
                  <Td>
                    <Text as="span">{el.a}</Text>
                    <Text as="span" fontSize="xs" color={tooltipColor}>{` (${((el.a * 100) / sum).toFixed(1)}%)`}</Text>
                  </Td>
                  <Td>
                    <Text as="span">{el.s}</Text>
                    <Text as="span" fontSize="xs" color={tooltipColor}>{` (${((el.s * 100) / sum).toFixed(1)}%)`}</Text>
                  </Td>
                  <Td>
                    <Text as="span">{el.t}</Text>
                    <Text as="span" fontSize="xs" color={tooltipColor}>{` (${((el.t * 100) / sum).toFixed(1)}%)`}</Text>
                  </Td>
                  <Td>
                    <Text>{`${getCritProb(el.t, card.critOffset).toFixed(2)}%`}</Text>
                  </Td>
                  <Td isNumeric>
                    <Text>{sum}</Text>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </FixedWrapper>
    </Surface>
  );
};

export default CardStatInfo;
