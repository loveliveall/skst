import React from 'react';
import styled from 'styled-components';

import { CARD, getCardIconAssetPath } from '@/data/cardList';

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

const StyledH2 = styled.h2`
  margin-top: 0px;
`;

const CardImage = styled.img`
  width: 80px;
  height: 80px;
  padding: 8px;
`;

const Home: React.FC = () => {
  const gachaResult = tenGachaResultIDs();
  return (
    <>
      <StyledH2>오늘의 운세</StyledH2>
      <p>
        재미로 보는 10연차 (마지막 SR 이상 확정) 결과
        <br />
        대상 카드 풀은 이벤 배포 카드를 제외한 모든 카드
      </p>
      <div>
        {gachaResult.slice(0, 5).map((id) => (
          <CardImage
            src={getCardIconAssetPath(id, false)}
            alt="card-icon"
          />
        ))}
      </div>
      <div>
        {gachaResult.slice(5).map((id) => (
          <CardImage
            src={getCardIconAssetPath(id, false)}
            alt="card-icon"
          />
        ))}
      </div>
    </>
  );
};

export default Home;
