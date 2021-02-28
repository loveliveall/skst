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
import { EVENT } from '@/data/event';
import { GACHA } from '@/data/gacha';

const GACHA_LIST = Object.keys(GACHA).map(Number).map((id) => ({
  id,
  ...GACHA[id]!,
}));

const Gachas: React.FC = () => {
  const awaken = useAppSelector((state) => state.settings.defaultIconAwaken);
  return (
    <VStack>
      <DataTable
        data={GACHA_LIST}
        columns={[
          {
            title: '이름',
            render: (row) => <Text>{row.name}</Text>,
            customSort: (a, b) => defaultCmp(a.name, b.name),
          },
          {
            title: '가챠 종류',
            render: (row) => {
              let gachaKind = '';
              switch (row.type) {
                case 'allstar': gachaKind = '올스타 가챠'; break;
                case 'event': gachaKind = '이벤트 가챠'; break;
                case 'pickup': gachaKind = '픽업 가챠'; break;
                case 'fes': gachaKind = '페스 가챠'; break;
                case 'party': gachaKind = '파티 가챠'; break;
                default: gachaKind = '';
              }
              return <Text>{gachaKind}</Text>;
            },
          },
          {
            title: '개최일',
            render: (row) => <Text>{row.startDate}</Text>,
            customSort: (a, b) => defaultCmp(a.startDate, b.startDate),
            defaultSort: 'asc',
          },
          {
            title: '종료일',
            render: (row) => <Text>{row.startDate}</Text>,
            customSort: (a, b) => defaultCmp(a.endDate, b.endDate),
          },
          {
            title: '신규 등장',
            render: (row) => (row.type === 'allstar'
              ? <span /> // Too many new cards for allstar
              : (
                <Center>
                  <Wrap spacing={2} justify="center">
                    {Object.keys(CARD).map(Number).filter((id) => {
                      const src = CARD_SOURCE[id];
                      return src?.type === 'gacha' && src.gachaId === row.id;
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
              )
            ),
          },
          {
            title: '비고',
            render: (row) => {
              if (row.type === 'event') {
                return (
                  <Text lineHeight={1.5}>
                    <strong>관련 이벤트</strong>
                    <br />
                    {EVENT[row.eventId]?.name ?? 'N/A'}
                  </Text>
                );
              }
              if (row.type === 'fes' && row.desc !== undefined) {
                return (
                  <Text>{row.desc}</Text>
                );
              }
              return <span />;
            },
          },
        ]}
        pageSize={20}
      />
    </VStack>
  );
};

export default Gachas;
