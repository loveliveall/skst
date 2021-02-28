import React from 'react';
import {
  keyframes,
  Button,
  Heading,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

import CardIcon from '@/components/CardIcon';
import { choice } from '@/utils';
import { useAppSelector } from '@/store';

import { CARD } from '@/data/cardList';
import { RARITYID } from '@/data/cardMetadata';
import { CARD_SOURCE } from '@/data/cardSource';
import { MEMBER } from '@/data/memberMetadata';

import CardStats from './CardStats';

const gradient = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 70% 70%;
  }
`;

function getBirthdayCharacter(date: Date) {
  const memberId = Object.keys(MEMBER).map(Number).find((id) => {
    const member = MEMBER[id]!;
    return member.birthDay === date.getDate() && member.birthMonth === (date.getMonth() + 1);
  });
  if (memberId === undefined) return undefined;
  return {
    id: memberId,
    ...MEMBER[memberId]!,
  };
}
const birthdayCharacter = getBirthdayCharacter(new Date());

function getCardIDsForRarity(rarityId: number) {
  return Object.keys(CARD).map(Number).filter((id) => {
    const card = CARD[id]!; // Non-null assertion: Object.keys is used
    const source = CARD_SOURCE[id];
    if (source === undefined) throw Error(`Every card MUST have source, but card ${id} doesn't`);
    return source.type === 'gacha'
      && card.rarityId === rarityId
      && (birthdayCharacter === undefined || birthdayCharacter.id === card.memberId);
  });
}

function getTenGachaResultIDs() {
  return new Array(10).fill(null).map((_, idx) => {
    const rarityPick = Math.random();
    let prob = 0;
    // UR is always 5%
    prob += 0.05;
    if (rarityPick < prob) return choice(getCardIDsForRarity(RARITYID.UR));
    // SR is 95% on 10th, 10% on otherwise
    if (idx === 9) return choice(getCardIDsForRarity(RARITYID.SR));
    prob += 0.10;
    if (rarityPick < prob) return choice(getCardIDsForRarity(RARITYID.R));
    return choice(getCardIDsForRarity(10));
  });
}

function countRarity(cardIds: number[], rarityId: number) {
  return cardIds.filter((id) => CARD[id]?.rarityId === rarityId).length;
}

const Home: React.FC = () => {
  const awakenIcon = useAppSelector((state) => state.settings.defaultIconAwaken);
  const initialResult = getTenGachaResultIDs();
  const [gachaResult, setGachaResult] = React.useState(initialResult);
  const [gachaStat, setGachaStat] = React.useState({
    r: countRarity(initialResult, RARITYID.R),
    sr: countRarity(initialResult, RARITYID.SR),
    ur: countRarity(initialResult, RARITYID.UR),
  });

  const onRegachaClick = () => {
    const result = getTenGachaResultIDs();
    const rCount = countRarity(result, RARITYID.R);
    const srCount = countRarity(result, RARITYID.SR);
    const urCount = countRarity(result, RARITYID.UR);
    setGachaStat({
      r: gachaStat.r + rCount,
      sr: gachaStat.sr + srCount,
      ur: gachaStat.ur + urCount,
    });
    setGachaResult(result);
  };

  const totalCount = gachaStat.r + gachaStat.sr + gachaStat.ur;

  return (
    <VStack spacing={4}>
      {birthdayCharacter !== undefined && (
        <Heading as="h2" fontSize="3xl">
          <Text color={birthdayCharacter.colorHex} as="span">{birthdayCharacter.name}</Text>
          의 생일을 축하합니다!
        </Heading>
      )}
      <Heading as="h2" size="lg">오늘의 운세</Heading>
      <Text textAlign="center">
        재미로 보는 10연차 (마지막 SR 이상 확정) 결과
        <br />
        대상 카드 풀은 이벤 배포 카드를 제외한 모든 카드
      </Text>
      <Button onClick={onRegachaClick}>
        한번 더?
      </Button>
      <Wrap spacing="8px" maxWidth="480px" justify="center">
        {gachaResult.map((id) => {
          const card = CARD[id];
          if (card === undefined) throw Error(`Card ${id} not found`);
          const background = card.rarityId === RARITYID.UR
            ? `linear-gradient(
                135deg,
                red, orange, yellow, green, blue, purple,
                red, orange, yellow, green, blue, purple
              )`
            : undefined;
          return (
            <WrapItem
              key={`${id}-${Math.random()}`}
              borderRadius="4px"
              background={background}
              backgroundSize="800%"
              animation={`${gradient} 3s linear infinite`}
            >
              <CardIcon
                cardId={id}
                awaken={awakenIcon}
                padding="4px"
                width="88px"
                height="88px"
              />
            </WrapItem>
          );
        })}
      </Wrap>
      <Text textAlign="center">
        {`총 뽑은 수: ${totalCount}, SR: ${gachaStat.sr}개, UR: ${gachaStat.ur}개`}
        <br />
        {`UR 확률: ${totalCount === 0 ? 0 : ((gachaStat.ur * 100) / totalCount).toFixed(2)}%`}
      </Text>
      <Heading as="h2" size="lg">카드 갯수 간략 통계</Heading>
      <CardStats />
    </VStack>
  );
};

export default Home;
