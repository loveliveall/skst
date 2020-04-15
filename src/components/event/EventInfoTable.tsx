import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { FlexBox } from '../Styles';
import { AppState, SEL } from '@/store';
import { EVENT_TYPE, BIG_LIVE_PRIZE_TYPE } from '@/data/event';
import { numberRepr } from '@/utils/utils';
import { RARITY } from '@/data/cardMetadata';

const VerticalFlex = styled(FlexBox)`
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const StyledTable = styled.table`
  border: 1px solid black;
  border-collapse: collapse;
  width: 100%;

  td, th {
    text-align: center;
    padding: 8px;
    border: 1px solid black;
    white-space: nowrap;
  }
`;

const TitleTh = styled.th`
  background-color: lightgray;
  width: 15%;
`;

const SingleTd = styled.td`
  width: 85%;
`;

const TextDiv = styled.div`
  padding: 1px;
`;

interface OwnProps {
  id: number,
}
interface PropsFromState {
  cardTable: ReturnType<typeof SEL.dbCardTable>,
  eventTable: ReturnType<typeof SEL.dbEventTable>,
}
type EventInfoTableProps = OwnProps & PropsFromState;

const EventInfoTable: React.FC<EventInfoTableProps> = ({
  id, cardTable, eventTable,
}) => {
  const event = eventTable[id];
  const eventCardIds = Object.keys(cardTable).map(Number).filter(
    (cardId) => cardTable[cardId].fromId[0] === 'event' && cardTable[cardId].fromId[1] === id,
  );

  return (
    <StyledTable>
      <tbody>
        <tr>
          <TitleTh>개최 기간</TitleTh>
          <SingleTd>
            {`${event.startDate} - ${event.endDate}`}
          </SingleTd>
        </tr>
        <tr>
          <TitleTh>이벤트 종류</TitleTh>
          <SingleTd>
            {EVENT_TYPE[event.eventTypeId].krName}
          </SingleTd>
        </tr>
        {Object.keys(event.rewardBorder).length !== 0 && (
          <tr>
            <TitleTh>순위 보상</TitleTh>
            <SingleTd>
              <VerticalFlex>
                {Object.keys(event.rewardBorder).map(Number).map((rank) => (
                  <TextDiv key={rank}>
                    {`${numberRepr(rank)}위: ${event.rewardBorder[rank].map(
                      (v, idx) => `${v} ${RARITY[cardTable[eventCardIds[idx]].rarityId].symbol}`,
                    ).join(', ')}`}
                  </TextDiv>
                ))}
              </VerticalFlex>
            </SingleTd>
          </tr>
        )}
        {event.eventTypeId === 2 && (
          <tr>
            <TitleTh>
              볼티지 랭킹
              <br />
              대상 악곡
            </TitleTh>
            <SingleTd>
              <VerticalFlex>
                {event.voltageRankSongs.map((songName) => (
                  <TextDiv key={songName}>{songName}</TextDiv>
                ))}
              </VerticalFlex>
            </SingleTd>
          </tr>
        )}
        {event.eventTypeId === 3 && (
          <>
            <tr>
              <TitleTh>
                이벤트
                <br />
                보너스 대상
              </TitleTh>
              <SingleTd>
                {event.bonusTarget}
              </SingleTd>
            </tr>
            <tr>
              <TitleTh>
                빅 라이브
                <br />
                대상 악곡
              </TitleTh>
              <SingleTd>
                <VerticalFlex>
                  {event.targetSongs.map((songName) => (
                    <TextDiv key={songName}>{songName}</TextDiv>
                  ))}
                </VerticalFlex>
              </SingleTd>
            </tr>
            <tr>
              <TitleTh>
                일자별 상
              </TitleTh>
              <SingleTd>
                <VerticalFlex>
                  {event.prizes.map((prizeList, idx) => {
                    const prizeString = prizeList.map((prizeId) => BIG_LIVE_PRIZE_TYPE[prizeId].name).join(', ');
                    return (
                      <TextDiv key={Math.random()}>
                        {`${idx + 1}일차: ${prizeString}`}
                      </TextDiv>
                    );
                  })}
                </VerticalFlex>
              </SingleTd>
            </tr>
          </>
        )}
      </tbody>
    </StyledTable>
  );
};

const mapStateToProps = (state: AppState): PropsFromState => ({
  cardTable: SEL.dbCardTable(state),
  eventTable: SEL.dbEventTable(state),
});

export default connect(mapStateToProps)(EventInfoTable);
