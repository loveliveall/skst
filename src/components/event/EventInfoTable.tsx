import React from 'react';
import styled from 'styled-components';
import { FlexBox } from '../Styles';
import { CARD } from '@/data/cardList';
import { EVENT, EVENT_TYPE } from '@/data/event';
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
type EventInfoTableProps = OwnProps;

const EventInfoTable: React.FC<EventInfoTableProps> = ({
  id,
}) => {
  const event = EVENT[id];
  const eventCardIds = Object.keys(CARD).map(Number).filter(
    (cardId) => CARD[cardId].fromId[0] === 'event' && CARD[cardId].fromId[1] === id,
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
        <tr>
          <TitleTh>순위 보상</TitleTh>
          <SingleTd>
            <VerticalFlex>
              {Object.keys(event.rewardBorder).map(Number).map((rank) => (
                <TextDiv key={rank}>
                  {`${numberRepr(rank)}위: ${event.rewardBorder[rank].map(
                    (v, idx) => `${v} ${RARITY[CARD[eventCardIds[idx]].rarityId].symbol}`,
                  ).join(', ')}`}
                </TextDiv>
              ))}
            </VerticalFlex>
          </SingleTd>
        </tr>
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
      </tbody>
    </StyledTable>
  );
};

export default EventInfoTable;
