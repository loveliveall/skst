import React from 'react';
import styled from 'styled-components';
import { RouteComponentProps, withRouter, Link } from 'react-router-dom';
import { FixedWrapper, FlexBox } from '@/components/Styles';
import { EVENT } from '@/data/event';
import { CARD, getCardIconAssetPath, getCardSymbol } from '@/data/cardList';
import { RARITY } from '@/data/cardMetadata';
import { MEMBER } from '@/data/memberMetadata';
import { numberRepr } from '@/utils/utils';

import EventInfoTable from './EventInfoTable';

const VerticalFlex = styled(FlexBox)`
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const RowWrapper = styled(FixedWrapper)`
  padding-top: 4px;
  padding-bottom: 4px;
`;

const CardIconImg = styled.img`
  padding: 4px;
  width: 64px;
  height: 64px;
`;

const PaddedDiv = styled.div`
  padding: 4px;
  text-align: center;
  word-break: keep-all;
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
`;

interface MatchProps {
  id: string,
}
type EventProps = RouteComponentProps<MatchProps>;

const Event: React.FC<EventProps> = ({
  match,
}) => {
  window.scrollTo(0, 0);
  const eventId = Number(match.params.id);
  const event = EVENT[eventId];
  if (event === undefined) return null;
  const eventCardIds = Object.keys(CARD).map(Number).filter(
    (id) => CARD[id].fromId[0] === 'event' && CARD[id].fromId[1] === eventId,
  );
  return (
    <VerticalFlex>
      <RowWrapper>
        <h2>{`이벤트 #${eventId} ${event.name}`}</h2>
      </RowWrapper>
      <RowWrapper>
        <PaddedDiv><strong>이벤트 보상 카드</strong></PaddedDiv>
      </RowWrapper>
      <RowWrapper>
        <FlexBox>
          {eventCardIds.map((id) => (
            <div key={id}>
              <VerticalFlex>
                <Link to={`/card/${id}`}>
                  <CardIconImg
                    src={getCardIconAssetPath(id, false)}
                    alt={`${getCardSymbol(id, false)}-icon`}
                    title={`${RARITY[CARD[id].rarityId].symbol} ${MEMBER[CARD[id].memberId].shortName}`}
                  />
                </Link>
                <Link to={`/card/${id}`}>
                  <CardIconImg
                    src={getCardIconAssetPath(id, true)}
                    alt={`${getCardSymbol(id, true)}-icon`}
                    title={`${RARITY[CARD[id].rarityId].symbol} ${MEMBER[CARD[id].memberId].shortName}`}
                  />
                </Link>
              </VerticalFlex>
            </div>
          ))}
        </FlexBox>
      </RowWrapper>
      <RowWrapper>
        <EventInfoTable id={eventId} />
      </RowWrapper>
      <RowWrapper>
        <PaddedDiv><strong>주요 순위 보더</strong></PaddedDiv>
      </RowWrapper>
      <RowWrapper>
        <StyledTable>
          <tbody>
            <tr>
              <TitleTh>순위</TitleTh>
              <TitleTh>보더 점수</TitleTh>
            </tr>
            {Object.keys(event.rankBorder).map(Number).map((rank) => {
              const border = event.rankBorder[rank];
              const displayBorder = `${border === 0 || border === undefined ? '?' : numberRepr(border)}pt`;
              return (
                <tr key={rank}>
                  <td>{`${numberRepr(rank)}위`}</td>
                  <td>{displayBorder}</td>
                </tr>
              );
            })}
          </tbody>
        </StyledTable>
      </RowWrapper>
      {event.eventTypeId === 2 && (
        <>
          <RowWrapper>
            <PaddedDiv><strong>주요 볼티지 순위 보더</strong></PaddedDiv>
          </RowWrapper>
          <RowWrapper>
            <StyledTable>
              <tbody>
                <tr>
                  <TitleTh>볼티지 순위</TitleTh>
                  <TitleTh>보더 점수</TitleTh>
                </tr>
                {Object.keys(event.voltageRankBorder).map(Number).map((rank) => {
                  const border = event.voltageRankBorder[rank];
                  const displayBorder = `${border === 0 || border === undefined ? '?' : numberRepr(border)}pt`;
                  return (
                    <tr key={rank}>
                      <td>{`${numberRepr(rank)}위`}</td>
                      <td>{displayBorder}</td>
                    </tr>
                  );
                })}
              </tbody>
            </StyledTable>
          </RowWrapper>
        </>
      )}
    </VerticalFlex>
  );
};

export default withRouter(Event);
