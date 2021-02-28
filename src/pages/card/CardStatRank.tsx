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
  Switch,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';

import FixedWrapper from '@/components/FixedWrapper';

import { CARD, FULL_CARD_LIST } from '@/data/cardList';
import { Parameter, PARAMETER } from '@/data/cardParameter';
import {
  ATTRIBUTE, RARITY, RARITYID, ROLE,
} from '@/data/cardMetadata';

import { Surface } from './common';

type Color = [number, number, number];
const blend = (color1: Color, color2: Color, ratio: number) => [0, 1, 2].map((idx) => Math.floor(
  color1[idx]! * ratio + color2[idx]! * (1 - ratio),
));
const getCellColorCode = (alpha: number) => {
  // Theme color 500 / 200
  const red: Color = useColorModeValue([229, 62, 62], [254, 178, 178]);
  const yellow: Color = useColorModeValue([214, 158, 46], [250, 240, 137]);
  const green: Color = useColorModeValue([56, 161, 105], [154, 230, 180]);
  const result = alpha > 0.5 ? blend(red, yellow, 2 * alpha - 1) : blend(yellow, green, 2 * alpha);
  return `#${result.reduce((acc, curr) => `${acc}${curr.toString(16)}`, '')}`;
};

function getStatRanks(
  params: Parameter[number], rarityId: null | RARITYID, attributeId: null | number, roleId: null | number,
) {
  const targetCardList = FULL_CARD_LIST.filter((card) => (
    (rarityId === null || card.rarityId === rarityId)
    && (attributeId === null || card.attributeId === attributeId)
    && (roleId === null || card.roleId === roleId)
  ));
  return params.map((param, uncap) => {
    const targets = targetCardList.filter((card) => card.uncap === uncap);
    const total = targets.length;
    const aRank = targets.filter((card) => card.a > param.a).length + 1;
    const aSame = targets.filter((card) => card.a === param.a).length - 1;
    const sRank = targets.filter((card) => card.s > param.s).length + 1;
    const sSame = targets.filter((card) => card.s === param.s).length - 1;
    const tRank = targets.filter((card) => card.t > param.t).length + 1;
    const tSame = targets.filter((card) => card.t === param.t).length - 1;
    return {
      total,
      a: {
        rank: aRank,
        same: aSame,
      },
      s: {
        rank: sRank,
        same: sSame,
      },
      t: {
        rank: tRank,
        same: tSame,
      },
    };
  });
}

type StatRankTableProps = {
  params: Parameter[number],
  rarityId: null | RARITYID,
  attributeId: null | number,
  roleId: null | number,
};
const StatRankTable: React.FC<StatRankTableProps> = ({
  params, rarityId, attributeId, roleId,
}) => {
  const statRanks = getStatRanks(params, rarityId, attributeId, roleId);
  return (
    <FixedWrapper>
      <Table size="sm">
        <Thead>
          <Tr>
            <Th>★</Th>
            <Th>어필</Th>
            <Th>스태</Th>
            <Th>테크닉</Th>
          </Tr>
        </Thead>
        <Tbody>
          {statRanks.map((el, uncap) => {
            const aRatio = el.a.rank / el.total;
            const sRatio = el.s.rank / el.total;
            const tRatio = el.t.rank / el.total;
            return (
              // eslint-disable-next-line react/no-array-index-key
              <Tr key={uncap}>
                <Td><Text>{uncap}</Text></Td>
                <Td color={getCellColorCode(aRatio)}>
                  <Text as="span">{`${el.a.rank} / ${el.total}`}</Text>
                  &nbsp;
                  {el.a.same !== 0 && <Text as="span" fontSize="xs">{`(${el.a.same})`}</Text>}
                </Td>
                <Td color={getCellColorCode(sRatio)}>
                  <Text as="span">{`${el.s.rank} / ${el.total}`}</Text>
                  &nbsp;
                  {el.s.same !== 0 && <Text as="span" fontSize="xs">{`(${el.s.same})`}</Text>}
                </Td>
                <Td color={getCellColorCode(tRatio)}>
                  <Text as="span">{`${el.t.rank} / ${el.total}`}</Text>
                  &nbsp;
                  {el.t.same !== 0 && <Text as="span" fontSize="xs">{`(${el.t.same})`}</Text>}
                </Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </FixedWrapper>
  );
};

type CardStatRankProps = {
  cardId: number,
};
const CardStatRank: React.FC<CardStatRankProps> = ({ cardId }) => {
  const [sameRarity, setSameRarity] = React.useState(false);
  const card = CARD[cardId];
  const param = PARAMETER[cardId];
  if (card === undefined) throw Error(`Card ${cardId} not found`);
  if (param === undefined) throw Error(`Parameter for card ${cardId} not found`);
  const rarityId = sameRarity ? card.rarityId : null;
  const rarity = RARITY[card.rarityId].symbol;
  const attribute = ATTRIBUTE[card.attributeId]!.name;
  const role = ROLE[card.roleId]!.symbol;
  return (
    <Surface>
      <Heading as="h3" size="md" marginBottom={2}>스탯 순위표</Heading>
      <Text wordBreak="keep-all">특정 스탯이 동일 한돌 대상 카드 중 몇 위를 차지하는지에 대한 표</Text>
      <Text marginBottom={2}>괄호 안은 동일 스탯을 가진 카드의 수</Text>
      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="same-rarity" mb="0">{`동일 레어도(${rarity})만 대상으로 하기`}</FormLabel>
        <Switch id="same-rarity" isChecked={sameRarity} onChange={() => setSameRarity(!sameRarity)} />
      </FormControl>
      <Heading as="h4" size="sm" marginY={3}>모든 카드 대상</Heading>
      <StatRankTable params={param} rarityId={rarityId} attributeId={null} roleId={null} />
      <Heading as="h4" size="sm" marginY={3}>{`동속성(${attribute}) 대상`}</Heading>
      <StatRankTable params={param} rarityId={rarityId} attributeId={card.attributeId} roleId={null} />
      <Heading as="h4" size="sm" marginY={3}>{`동타입(${role}) 대상`}</Heading>
      <StatRankTable params={param} rarityId={rarityId} attributeId={null} roleId={card.roleId} />
      <Heading as="h4" size="sm" marginY={3}>{`동속성(${attribute}) 및 동타입(${role}) 대상`}</Heading>
      <StatRankTable params={param} rarityId={rarityId} attributeId={card.attributeId} roleId={card.roleId} />
    </Surface>
  );
};

export default CardStatRank;
