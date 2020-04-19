import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { AppState, SEL } from '@/store';
import { birthdayCharacter } from '@/data/characterMeta';
import { getCardIconAssetPath, getCardSymbol } from '@/data/cardList';
import { MEMBER } from '@/data/memberMetadata';
import { RARITY } from '@/data/cardMetadata';

import { FlexBox, StyledButton } from '@/components/Styles';
import CardStats from '@/components/home/CardStats';

function pickRandom<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
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

interface PropsFromState {
  isJPEdition: ReturnType<typeof SEL.dbIsJPEdition>,
  cardTable: ReturnType<typeof SEL.dbCardTable>,
}
type HomeProps = PropsFromState;

const Home: React.FC<HomeProps> = ({
  isJPEdition, cardTable,
}) => {
  const rarityCardIDs = (rarityId: number) => Object.keys(cardTable).map(Number).filter(
    (id) => (cardTable[id].rarityId === rarityId && cardTable[id].fromId[0] === 'gacha')
      && (birthdayCharacter === undefined || cardTable[id].memberId === birthdayCharacter.id),
  );
  const tenGachaResultIDs = () => Array(10).fill(null).map((_, idx) => {
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

  const initialResult = tenGachaResultIDs();
  const initialRCount = initialResult.filter((id) => cardTable[id].rarityId === 1).length;
  const initialSRCount = initialResult.filter((id) => cardTable[id].rarityId === 2).length;
  const initialURCount = initialResult.filter((id) => cardTable[id].rarityId === 3).length;

  const [gachaResult, setGachaResult] = React.useState(initialResult);
  const [gachaAcc, setGachaAcc] = React.useState([initialRCount, initialSRCount, initialURCount]);

  React.useEffect(() => {
    const result = tenGachaResultIDs();
    const rCount = result.filter((id) => cardTable[id].rarityId === 1).length;
    const srCount = result.filter((id) => cardTable[id].rarityId === 2).length;
    const urCount = result.filter((id) => cardTable[id].rarityId === 3).length;
    setGachaResult(result);
    setGachaAcc([rCount, srCount, urCount]);
  }, [cardTable, isJPEdition]);

  const totalCount = gachaAcc.reduce((acc, curr) => acc + curr, 0);
  return (
    <VerticalFlex>
      <VerticalFlex>
        {birthdayCharacter !== undefined && (
          <h2>
            <span style={{ color: birthdayCharacter.colorHex }}>{birthdayCharacter.name}</span>
            의 생일을 축하합니다!
          </h2>
        )}
        <h2>오늘의 운세</h2>
        <p style={{ marginTop: 0, textAlign: 'center' }}>
          재미로 보는 10연차 (마지막 SR 이상 확정) 결과
          <br />
          대상 카드 풀은 이벤 배포 카드를 제외한 모든 카드
        </p>
        <div style={{ paddingBottom: '8px' }}>
          <StyledButton
            type="button"
            onClick={() => {
              const result = tenGachaResultIDs();
              const rCount = result.filter((id) => cardTable[id].rarityId === 1).length;
              const srCount = result.filter((id) => cardTable[id].rarityId === 2).length;
              const urCount = result.filter((id) => cardTable[id].rarityId === 3).length;
              setGachaAcc([gachaAcc[0] + rCount, gachaAcc[1] + srCount, gachaAcc[2] + urCount]);
              setGachaResult(result);
            }}
          >
            한번 더?
          </StyledButton>
        </div>
        <MaxWidthFlex>
          {gachaResult.filter((id) => id in cardTable).map((id) => (
            <Link key={`${id}-${Math.random()}`} to={`card/${id}`}>
              <CardImage
                src={getCardIconAssetPath(id, false)}
                alt={`${getCardSymbol(id, false)}-icon`}
                title={`${RARITY[cardTable[id].rarityId].symbol} ${MEMBER[cardTable[id].memberId].shortName}`}
              />
            </Link>
          ))}
        </MaxWidthFlex>
        <div>
          {`총 뽑은 수: ${totalCount}, SR: ${gachaAcc[1]}개, UR: ${gachaAcc[2]}개`}
        </div>
        <div>
          {`UR 확률: ${totalCount === 0 ? 0 : Math.round((gachaAcc[2] / totalCount + Number.EPSILON) * 10000) / 100}%`}
        </div>
      </VerticalFlex>

      <VerticalFlex>
        <h2>카드 갯수 간략 통계</h2>
        <CardStats />
      </VerticalFlex>
    </VerticalFlex>
  );
};

const mapStateToProps = (state: AppState): PropsFromState => ({
  cardTable: SEL.dbCardTable(state),
  isJPEdition: SEL.dbIsJPEdition(state),
});

export default connect(mapStateToProps)(Home);
