import React from 'react';
import {
  Center,
  Text,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

import CardIcon from '@/components/CardIcon';
import DataTable from '@/components/DataTable';
import { defaultCmp } from '@/utils';
import { useAppSelector } from '@/store';

import { CARD } from '@/data/cardList';
import { CARD_SOURCE } from '@/data/cardSource';
import { EVENT, EVENT_TYPE } from '@/data/event';
import { GACHA } from '@/data/gacha';

const EVENT_LIST = Object.keys(EVENT).map(Number).map((id) => ({
  id,
  ...EVENT[id]!,
}));

const Events: React.FC = () => {
  const awaken = useAppSelector((state) => state.settings.defaultIconAwaken);
  return (
    <VStack>
      <DataTable
        data={EVENT_LIST}
        columns={[
          {
            title: '이름',
            render: (row) => <Text>{row.name}</Text>,
            customSort: (a, b) => defaultCmp(a.name, b.name),
          },
          {
            title: '이벤트 종류',
            render: (row) => <Text>{EVENT_TYPE[row.eventTypeId]?.krName ?? 'N/A'}</Text>,
          },
          {
            title: '개최일',
            render: (row) => <Text>{row.startDate}</Text>,
            customSort: (a, b) => defaultCmp(a.startDate, b.startDate),
            defaultSort: 'asc',
          },
          {
            title: '종료일',
            render: (row) => <Text>{row.endDate}</Text>,
            customSort: (a, b) => defaultCmp(a.endDate, b.endDate),
          },
          {
            title: '배포 카드',
            render: (row) => (
              <Center>
                <Wrap spacing={2} justify="center">
                  {Object.keys(CARD).map(Number).filter((id) => {
                    const src = CARD_SOURCE[id];
                    return src?.type === 'event' && src.eventId === row.id;
                  }).map((id) => (
                    <WrapItem key={id}>
                      <CardIcon
                        cardId={id}
                        awaken={awaken}
                        width="64px"
                        height="64px"
                      />
                    </WrapItem>
                  ))}
                </Wrap>
              </Center>
            ),
          },
          {
            title: '관련 가챠',
            render: (row) => (
              <Text lineHeight={1.5}>
                {Object.keys(GACHA).map(Number).filter((gachaId) => {
                  const gacha = GACHA[gachaId];
                  return gacha?.type === 'event' && gacha.eventId === row.id;
                }).map((gachaId, idx) => (
                  <React.Fragment key={gachaId}>
                    {idx !== 0 && <br />}
                    {GACHA[gachaId]?.name ?? 'N/A'}
                  </React.Fragment>
                ))}
              </Text>
            ),
          },
          {
            title: '비고',
            render: (row) => {
              if (row.eventTypeId === 2) {
                return (
                  <Text lineHeight={1.5}>
                    <strong>볼티지 랭킹 대상 악곡</strong>
                    {row.voltageRankSongs.map((songName) => (
                      <React.Fragment key={songName}>
                        <br />
                        {songName}
                      </React.Fragment>
                    ))}
                  </Text>
                );
              }
              return <Text>없음</Text>;
            },
          },
        ]}
        pageSize={20}
      />
    </VStack>
  );
};

export default Events;
