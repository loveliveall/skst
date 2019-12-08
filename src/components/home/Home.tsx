import React from 'react';
import styled from 'styled-components';

import { CARD, getCardIconAssetPath } from '@/data/cardList';

import Timer from '@/components/home/Timer';

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

const BorderedDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
`;

const DenseH3 = styled.h3`
  margin-bottom: 0px;
`;

const CardImage = styled.img`
  width: 80px;
  height: 80px;
  padding: 8px;
`;

const StyledButton = styled.button`
  border: 1px solid black;
  background: none;
  outline: none;
  box-shadow: none;
  border-radius: 4px;
  font-size: 1em;
  padding: 8px 16px 8px 16px;

  &:hover {
    background: #111;
    color: #f1f1f1;
  }
`;

const Home: React.FC = () => {
  const [gachaResult, setGachaResult] = React.useState(tenGachaResultIDs());
  const FES_TIME = new Date(Date.UTC(2020, 0, 18, 9, 0, 0));
  return (
    <>
      <BorderedDiv>
        <div>
          <DenseH3>페스까지 1일차까지 남은 시간은...</DenseH3>
        </div>
        <p>
          <Timer targetTime={FES_TIME} />
        </p>
      </BorderedDiv>
      <h2>오늘의 운세</h2>
      <p>
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
      <div>
        {gachaResult.slice(0, 5).map((id) => (
          <CardImage
            key={`${id}-${Math.random()}`}
            src={getCardIconAssetPath(id, false)}
            alt="card-icon"
          />
        ))}
      </div>
      <div>
        {gachaResult.slice(5).map((id) => (
          <CardImage
            key={`${id}-${Math.random()}`}
            src={getCardIconAssetPath(id, false)}
            alt="card-icon"
          />
        ))}
      </div>
    </>
  );
};

export default Home;
