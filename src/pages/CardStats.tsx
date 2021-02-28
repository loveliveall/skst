import React from 'react';
import {
  Checkbox,
  HStack,
  Image,
  Table,
  Tbody,
  Td as ChakraTd,
  Text,
  Tr,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

import FixedWrapper from '@/components/FixedWrapper';

import { CARD } from '@/data/cardList';
import {
  RARITY,
  Attribute,
  Role,
  Rarity,
  ROLE,
  ATTRIBUTE,
} from '@/data/cardMetadata';
import { CARD_SOURCE } from '@/data/cardSource';

type SourceType = 'gacha' | 'event';

const FULL_SOURCES: SourceType[] = ['gacha', 'event'];

function toggleList<T>(arr: T[], elem: T, setter: (newV: T[]) => void) {
  if (arr.includes(elem)) {
    setter(arr.filter((e) => e !== elem));
  } else {
    setter([...arr, elem]);
  }
}

function countCards(
  attributeId: keyof Attribute | null,
  roleId: keyof Role | null,
  rarityIds: (keyof Rarity)[],
  sources: SourceType[],
): number {
  return Object.keys(CARD).map(Number).filter(
    (id) => {
      const card = CARD[id]!;
      const src = CARD_SOURCE[id];
      if (src === undefined) throw Error(`Source for card ${id} not found`);
      return (
        (attributeId === null || card.attributeId === attributeId)
        && (roleId === null || card.roleId === roleId)
        && rarityIds.includes(card.rarityId)
        && sources.includes(src.type)
      );
    },
  ).length;
}

const Td: React.FC = ({ children }) => (
  <ChakraTd textAlign="center" padding={4}>
    {children}
  </ChakraTd>
);

const CardStats: React.FC = () => {
  const [visibleRarities, setVisibleRarities] = React.useState(Object.keys(RARITY).map(Number));
  const [visibleSources, setVisibleSources] = React.useState(FULL_SOURCES);
  return (
    <>
      <Wrap justify="center" spacing={4}>
        <WrapItem>
          <VStack>
            <Text>레어도</Text>
            <HStack>
              {Object.keys(RARITY).map(Number).map((rarityId) => (
                <Checkbox
                  key={rarityId}
                  isChecked={visibleRarities.includes(rarityId)}
                  onChange={() => toggleList(visibleRarities, rarityId, setVisibleRarities)}
                >
                  {RARITY[rarityId as keyof Rarity].symbol}
                </Checkbox>
              ))}
            </HStack>
          </VStack>
        </WrapItem>
        <WrapItem>
          <VStack>
            <Text>최초 등장</Text>
            <HStack>
              {FULL_SOURCES.map((src) => (
                <Checkbox
                  key={src}
                  isChecked={visibleSources.includes(src)}
                  onChange={() => toggleList(visibleSources, src, setVisibleSources)}
                >
                  {src === 'event' ? '이벤트' : '가챠'}
                </Checkbox>
              ))}
            </HStack>
          </VStack>
        </WrapItem>
      </Wrap>
      <FixedWrapper>
        <Table>
          <Tbody>
            <Tr>
              <Td>-</Td>
              {Object.keys(ROLE).map(Number).map((id) => (
                <Td key={id}>
                  <Image
                    src={ROLE[id]!.iconAssetPath}
                    alt={`${ROLE[id]!.symbol}-icon`}
                    title={ROLE[id]!.name}
                    width="32px"
                    minWidth="32px"
                    height="32px"
                    minHeight="32px"
                  />
                </Td>
              ))}
              <Td>합</Td>
            </Tr>
            {Object.keys(ATTRIBUTE).map(Number).map((attId) => (
              <Tr key={attId}>
                <Td>
                  <Image
                    src={ATTRIBUTE[attId]!.iconAssetPath}
                    alt={`${ATTRIBUTE[attId]!.symbol}-icon`}
                    title={ATTRIBUTE[attId]!.name}
                    width="32px"
                    minWidth="32px"
                    height="32px"
                    minHeight="32px"
                  />
                </Td>
                {Object.keys(ROLE).map(Number).map((rId) => (
                  <Td key={rId}>{countCards(attId, rId, visibleRarities, visibleSources)}</Td>
                ))}
                <Td>{countCards(attId, null, visibleRarities, visibleSources)}</Td>
              </Tr>
            ))}
            <Tr>
              <Td>합</Td>
              {Object.keys(ROLE).map(Number).map((rId) => (
                <Td key={rId}>{countCards(null, rId, visibleRarities, visibleSources)}</Td>
              ))}
              <Td>{countCards(null, null, visibleRarities, visibleSources)}</Td>
            </Tr>
          </Tbody>
        </Table>
      </FixedWrapper>
    </>
  );
};

export default CardStats;
