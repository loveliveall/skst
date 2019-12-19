import React from 'react';
import styled from 'styled-components';

import Table from '@/components/common/Table';

import { FULL_CARD_LIST, getCardIconAssetPath } from '@/data/cardList';
import { ATTRIBUTE, ROLE, RARITY } from '@/data/cardMetadata';
import { MEMBER } from '@/data/memberMetadata';
import { GACHA } from '@/data/gacha';

const CardIconImg = styled.img`
  padding: 4px;
  width: 64px;
  height: 64px;
`;

const SmallIconImg = styled.img`
  padding: 4px;
  width: 32px;
  height: 32px;
`;

const CardTable: React.FC = () => (
  <Table
    column={[
      {
        title: 'ID',
        render: (rowData) => <span>{rowData.id}</span>,
        customSort: (a, b) => a.id - b.id,
      },
      {
        title: '아이콘',
        render: (rowData) => (
          <>
            <CardIconImg src={getCardIconAssetPath(rowData.id, false)} alt="normal-icon" />
            <CardIconImg src={getCardIconAssetPath(rowData.id, true)} alt="awaken-icon" />
          </>
        ),
      },
      {
        title: '이름',
        render: (rowData) => <span>{MEMBER[rowData.memberId].name}</span>,
        customSort: (a, b) => a.memberId - b.memberId,
      },
      {
        title: '레어도',
        render: (rowData) => <span>{RARITY[rowData.rarityId].symbol}</span>,
        customSort: (a, b) => a.rarityId - b.rarityId,
      },
      {
        title: '속성',
        render: (rowData) => (
          <SmallIconImg src={ATTRIBUTE[rowData.attributeId].iconAssetPath} alt="attribute-icon" />
        ),
        customSort: (a, b) => a.attributeId - b.attributeId,
      },
      {
        title: '타입',
        render: (rowData) => (
          <SmallIconImg src={ROLE[rowData.roleId].iconAssetPath} alt="type-icon" />
        ),
        customSort: (a, b) => a.roleId - b.roleId,
      },
      {
        title: '한돌',
        render: (rowData) => <span>{rowData.uncap}</span>,
        customSort: (a, b) => a.uncap - b.uncap,
      },
      {
        title: '어필',
        render: (rowData) => <span>{rowData.appl}</span>,
        customSort: (a, b) => a.appl - b.appl,
      },
      {
        title: '스태미너',
        render: (rowData) => <span>{rowData.stam}</span>,
        customSort: (a, b) => a.stam - b.stam,
      },
      {
        title: '테크닉',
        render: (rowData) => <span>{rowData.tech}</span>,
        customSort: (a, b) => a.tech - b.tech,
      },
      {
        title: '첫 출현',
        render: (rowData) => {
          if (rowData.fromId[0] === 'gacha') {
            const prefix = '가챠';
            const gachaType = GACHA[rowData.fromId[1]].type;
            if (gachaType === 'normal') return <span>{`${prefix} (일반)`}</span>;
            if (gachaType === 'event') return <span>{`${prefix} (이벤트)`}</span>;
            if (gachaType === 'pickup') return <span>{`${prefix} (픽업)`}</span>;
            if (gachaType === 'fes') return <span>{`${prefix} (페스)`}</span>;
          }
          if (rowData.fromId[0] === 'event') {
            return <span>이벤트</span>;
          }
          return <span />;
        },
        customSort: (a, b) => {
          if (a.fromId[0] > b.fromId[0]) {
            return 1;
          }
          if (a.fromId[0] < b.fromId[0]) {
            return -1;
          }
          return a.fromId[1] - b.fromId[1];
        },
      },
    ]}
    data={FULL_CARD_LIST.filter((x) => x.uncap === 5)}
  />
);

export default CardTable;
