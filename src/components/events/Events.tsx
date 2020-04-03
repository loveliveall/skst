import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { AppState, SEL } from '@/store';
import Table from '@/components/common/Table';
import { FlexBox, FixedWrapper } from '@/components/Styles';

import { getCardIconAssetPath, getCardSymbol } from '@/data/cardList';
import { RARITY } from '@/data/cardMetadata';
import { MEMBER } from '@/data/memberMetadata';
import { EVENT_TYPE, BIG_LIVE_PRIZE_TYPE } from '@/data/event';

import { numberRepr } from '@/utils/utils';

const VerticalFlex = styled(FlexBox)`
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const FixedWithPad = styled(FixedWrapper)`
  padding: 4px;
`;

const PaddedSpan = styled.span`
  padding: 4px;
`;

const StyledInput = styled.input`
  margin: 4px;
`;

const CardIconImg = styled.img`
  padding: 4px;
  width: 64px;
  height: 64px;
`;

interface PropsFromState {
  cardTable: ReturnType<typeof SEL.dbCardTable>,
  gachaTable: ReturnType<typeof SEL.dbGachaTable>,
  eventTable: ReturnType<typeof SEL.dbEventTable>,
}
type EventsProps = PropsFromState;

const Events: React.FC<EventsProps> = ({
  cardTable, gachaTable, eventTable,
}) => {
  const [awaken, setAwaken] = React.useState(false);
  return (
    <VerticalFlex>
      <div>
        <StyledInput
          type="checkbox"
          checked={awaken}
          onChange={() => setAwaken(!awaken)}
        />
        각성 이미지 보기
      </div>
      <FixedWithPad>
        <Table
          column={[
            {
              title: '제목',
              render: (rowData) => (
                <Link to={`/event/${rowData.id}`}>
                  <PaddedSpan>{rowData.name}</PaddedSpan>
                </Link>
              ),
              customSort: (a, b) => {
                if (a.name > b.name) return 1;
                if (a.name === b.name) return 0;
                return -1;
              },
            },
            {
              title: '이벤트 종류',
              render: (rowData) => <PaddedSpan>{EVENT_TYPE[rowData.eventTypeId].krName}</PaddedSpan>,
            },
            {
              title: '개최일',
              render: (rowData) => <PaddedSpan>{rowData.startDate}</PaddedSpan>,
              customSort: (a, b) => {
                if (a.startDate > b.startDate) return 1;
                if (a.startDate === b.startDate) return 0;
                return -1;
              },
              defaultSort: 'asc',
            },
            {
              title: '종료일',
              render: (rowData) => <PaddedSpan>{rowData.endDate}</PaddedSpan>,
              customSort: (a, b) => {
                if (a.endDate > b.endDate) return 1;
                if (a.endDate === b.endDate) return 0;
                return -1;
              },
            },
            {
              title: '배포 카드',
              render: (rowData) => (
                <VerticalFlex>
                  <FlexBox>
                    {Object.keys(cardTable).map(Number).filter((id) => (
                      cardTable[id].fromId[0] === 'event' && cardTable[id].fromId[1] === rowData.id
                    )).map((id) => (
                      <Link key={id} to={`card/${id}`}>
                        <CardIconImg
                          key={id}
                          src={getCardIconAssetPath(id, awaken)}
                          alt={`${getCardSymbol(id, awaken)}-icon`}
                          title={`${RARITY[cardTable[id].rarityId].symbol} ${MEMBER[cardTable[id].memberId].shortName}`}
                        />
                      </Link>
                    ))}
                  </FlexBox>
                </VerticalFlex>
              ),
            },
            {
              title: '주요 순위 보더',
              render: (rowData) => {
                const ranks = Object.keys(rowData.rewardBorder).map(Number);
                return (
                  <VerticalFlex>
                    {(ranks.length === 0 ? [1, 10, 100, 1000] : ranks).map((rank) => {
                      const border = rowData.rankBorder[rank];
                      const displayBorder = `${border === 0 || border === undefined ? '?' : numberRepr(border)}pt`;
                      return (
                        <PaddedSpan key={rank}>
                          {`${numberRepr(rank)}위: ${displayBorder}`}
                        </PaddedSpan>
                      );
                    })}
                  </VerticalFlex>
                );
              },
            },
            {
              title: '관련 가챠',
              render: (rowData) => (
                <VerticalFlex>
                  {Object.keys(gachaTable).map(Number).filter((id) => {
                    const gacha = gachaTable[id];
                    if (gacha.type !== 'event') return false;
                    if (gacha.eventId !== rowData.id) return false;
                    return true;
                  }).map((id) => (
                    <PaddedSpan key={id}>
                      {gachaTable[id].name}
                    </PaddedSpan>
                  ))}
                </VerticalFlex>
              ),
            },
            {
              title: '비고 1',
              render: (rowData) => {
                if (rowData.eventTypeId === 2) {
                  return (
                    <VerticalFlex>
                      <PaddedSpan>볼티지 랭킹 대상 악곡</PaddedSpan>
                      {rowData.voltageRankSongs.map((songName) => (
                        <PaddedSpan key={songName}>
                          {songName}
                        </PaddedSpan>
                      ))}
                    </VerticalFlex>
                  );
                }
                if (rowData.eventTypeId === 3) {
                  return (
                    <VerticalFlex>
                      <PaddedSpan>빅 라이브 대상 악곡</PaddedSpan>
                      {rowData.targetSongs.map((songName) => (
                        <PaddedSpan key={songName}>
                          {songName}
                        </PaddedSpan>
                      ))}
                    </VerticalFlex>
                  );
                }
                return <PaddedSpan>없음</PaddedSpan>;
              },
            },
            {
              title: '비고 2',
              render: (rowData) => {
                if (rowData.eventTypeId === 2) {
                  return (
                    <VerticalFlex>
                      <PaddedSpan>볼티지 랭킹 주요 보더</PaddedSpan>
                      {[1, 100, 1000, 10000].map((rank) => {
                        const border = rowData.voltageRankBorder[rank];
                        const displayBorder = `${border === 0 || border === undefined ? '?' : numberRepr(border)}pt`;
                        return (
                          <PaddedSpan key={rank}>
                            {`${numberRepr(rank)}위: ${displayBorder}`}
                          </PaddedSpan>
                        );
                      })}
                    </VerticalFlex>
                  );
                }
                if (rowData.eventTypeId === 3) {
                  return (
                    <VerticalFlex>
                      <PaddedSpan>일자별 상 종류</PaddedSpan>
                      {rowData.prizes.map((prizeList, idx) => {
                        const prizeString = prizeList.map((id) => BIG_LIVE_PRIZE_TYPE[id].name).join(', ');
                        return (
                          <PaddedSpan key={Math.random()}>
                            {`${idx + 1}일차: ${prizeString}`}
                          </PaddedSpan>
                        );
                      })}
                    </VerticalFlex>
                  );
                }
                return <PaddedSpan>없음</PaddedSpan>;
              },
            },
          ]}
          data={Object.keys(eventTable).map(Number).map((id) => ({
            id,
            ...eventTable[id],
          }))}
          pageSize={20}
        />
      </FixedWithPad>
    </VerticalFlex>
  );
};

const mapStateToProps = (state: AppState): PropsFromState => ({
  cardTable: SEL.dbCardTable(state),
  gachaTable: SEL.dbGachaTable(state),
  eventTable: SEL.dbEventTable(state),
});

export default connect(mapStateToProps)(Events);
