import React from 'react';
import styled from 'styled-components';

import { CARD, getCardIconAssetPath, getCardSymbol } from '@/data/cardList';
import { MEMBER } from '@/data/memberMetadata';
import { RARITY } from '@/data/cardMetadata';

import { FlexBox, StyledButton } from '@/components/Styles';
import CardStats from '@/components/home/CardStats';

function pickRandom<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

function rarityCardIDs(rarityId: number) {
  return Object.keys(CARD).map(Number).filter(
    (id) => CARD[id].rarityId === rarityId && CARD[id].fromId[0] === 'gacha',
  );
}

function tenGachaResultIDs() {
  return Array(10).fill(null).map((_, idx) => {
    const rarityPick = Math.random();
    if (idx !== 9) {
      if (rarityPick < 0.05) {
        return pickRandom(rarityCardIDs(3));
      }
      if (rarityPick < 0.15) {
        return pickRandom(rarityCardIDs(2));
      }
      return pickRandom(rarityCardIDs(1));
    }
    if (rarityPick < 0.05) {
      return pickRandom(rarityCardIDs(3));
    }
    return pickRandom(rarityCardIDs(2));
  });
}

const VerticalFlex = styled(FlexBox)`
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const CardImage = styled.img`
  width: 80px;
  height: 80px;
  padding: 8px;
`;

const MaxWidthFlex = styled(FlexBox)`
  max-width: 480px; // (80 + 8 + 8) * 5. So maximum 5 card-icons in one row
`;

const Home: React.FC = () => {
  const [gachaResult, setGachaResult] = React.useState(tenGachaResultIDs());
  return (
    <VerticalFlex>
      <VerticalFlex>
        <h2>오늘의 운세</h2>
        <p style={{ marginTop: 0, textAlign: 'center' }}>
          재미로 보는 10연차 (마지막 SR 이상 확정) 결과
          <br />
          대상 카드 풀은 이벤 배포 카드를 제외한 모든 카드
        </p>
        <div style={{ paddingBottom: '8px' }}>
          <StyledButton
            type="button"
            onClick={() => setGachaResult(tenGachaResultIDs())}
          >
            한번 더?
          </StyledButton>
        </div>
        <MaxWidthFlex>
          {gachaResult.map((id) => (
            <a href={`card/${id}`}>
              <CardImage
                key={`${id}-${Math.random()}`}
                src={getCardIconAssetPath(id, false)}
                alt={`${getCardSymbol(id, false)}-icon`}
                title={`${RARITY[CARD[id].rarityId].symbol} ${MEMBER[CARD[id].memberId].shortName}`}
              />
            </a>
          ))}
        </MaxWidthFlex>
      </VerticalFlex>

      <VerticalFlex>
        <h2>카드 갯수 간략 통계</h2>
        <CardStats />
      </VerticalFlex>
    </VerticalFlex>
  );
};

export default Home;
