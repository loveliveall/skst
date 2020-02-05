import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Table from '@/components/common/Table';
import { FlexBox, FixedWrapper } from '@/components/Styles';

import { CARD, getCardIconAssetPath, getCardSymbol } from '@/data/cardList';
import { RARITY } from '@/data/cardMetadata';
import { MEMBER } from '@/data/memberMetadata';
import { EVENT, EVENT_TYPE } from '@/data/event';
import { GACHA } from '@/data/gacha';

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

const Events: React.FC = () => {
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
                    {Object.keys(CARD).map(Number).filter((id) => (
                      CARD[id].fromId[0] === 'event' && CARD[id].fromId[1] === rowData.id
                    )).map((id) => (
                      <Link key={id} to={`card/${id}`}>
                        <CardIconImg
                          key={id}
                          src={getCardIconAssetPath(id, awaken)}
                          alt={`${getCardSymbol(id, awaken)}-icon`}
                          title={`${RARITY[CARD[id].rarityId].symbol} ${MEMBER[CARD[id].memberId].shortName}`}
                        />
                      </Link>
                    ))}
                  </FlexBox>
                </VerticalFlex>
              ),
            },
            {
              title: '주요 순위 보더',
              render: (rowData) => (
                <VerticalFlex>
                  {Object.keys(rowData.rewardBorder).map(Number).map((rank) => {
                    const border = rowData.rankBorder[rank];
                    const displayBorder = `${border === 0 || border === undefined ? '?' : numberRepr(border)}pt`;
                    return (
                      <PaddedSpan key={rank}>
                        {`${numberRepr(rank)}위: ${displayBorder}`}
                      </PaddedSpan>
                    );
                  })}
                </VerticalFlex>
              ),
            },
            {
              title: '볼티지 랭킹 주요 보더',
              render: (rowData) => {
                if (rowData.eventTypeId === 1) return <PaddedSpan>없음</PaddedSpan>;
                return (
                  <VerticalFlex>
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
              },
            },
            {
              title: '볼티지 랭킹 대상 악곡',
              render: (rowData) => {
                if (rowData.eventTypeId === 1) return <PaddedSpan>없음</PaddedSpan>;
                return (
                  <VerticalFlex>
                    {rowData.voltageRankSongs.map((songName) => (
                      <PaddedSpan key={songName}>
                        {songName}
                      </PaddedSpan>
                    ))}
                  </VerticalFlex>
                );
              },
            },
            {
              title: '관련 가챠',
              render: (rowData) => (
                <VerticalFlex>
                  {Object.keys(GACHA).map(Number).filter((id) => {
                    const gacha = GACHA[id];
                    if (gacha.type !== 'event') return false;
                    if (gacha.eventId !== rowData.id) return false;
                    return true;
                  }).map((id) => (
                    <PaddedSpan key={id}>
                      {GACHA[id].name}
                    </PaddedSpan>
                  ))}
                </VerticalFlex>
              ),
            },
          ]}
          data={Object.keys(EVENT).map(Number).map((id) => ({
            id,
            ...EVENT[id],
          }))}
          pageSize={20}
        />
      </FixedWithPad>
    </VerticalFlex>
  );
};

export default Events;
