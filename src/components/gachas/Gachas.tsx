import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { AppState, SEL } from '@/store';
import Table from '@/components/common/Table';
import { FlexBox, FixedWrapper } from '@/components/Styles';

import { getCardIconAssetPath, getCardSymbol } from '@/data/cardList';
import { MEMBER } from '@/data/memberMetadata';
import { RARITY } from '@/data/cardMetadata';

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
type GachasProps = PropsFromState;

const Gachas: React.FC<GachasProps> = ({
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
              title: '이름',
              render: (rowData) => <PaddedSpan>{rowData.name}</PaddedSpan>,
              customSort: (a, b) => {
                if (a.name > b.name) return 1;
                if (a.name === b.name) return 0;
                return -1;
              },
            },
            {
              title: '가챠 종류',
              render: (rowData) => {
                if (rowData.type === 'normal') return <PaddedSpan>올스타 가챠</PaddedSpan>;
                if (rowData.type === 'event') return <PaddedSpan>이벤트 가챠</PaddedSpan>;
                if (rowData.type === 'pickup') return <PaddedSpan>픽업 가챠</PaddedSpan>;
                if (rowData.type === 'fes') return <PaddedSpan>페스 가챠</PaddedSpan>;
                if (rowData.type === 'reprint') return <PaddedSpan>복각 가챠</PaddedSpan>;
                return <PaddedSpan />;
              },
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
              title: '신규 등장',
              render: (rowData) => {
                if (['event', 'pickup', 'fes'].includes(rowData.type)) {
                  return (
                    <VerticalFlex>
                      <FlexBox>
                        {Object.keys(cardTable).map(Number).filter((id) => (
                          cardTable[id].fromId[0] === 'gacha' && cardTable[id].fromId[1] === rowData.id
                        )).map((id) => (
                          <Link key={id} to={`card/${id}`}>
                            <CardIconImg
                              key={id}
                              src={getCardIconAssetPath(id, awaken)}
                              alt={`${getCardSymbol(id, awaken)}-icon`}
                              title={
                                `${RARITY[cardTable[id].rarityId].symbol} ${MEMBER[cardTable[id].memberId].shortName}`
                              }
                            />
                          </Link>
                        ))}
                      </FlexBox>
                    </VerticalFlex>
                  );
                }
                return <PaddedSpan />;
              },
            },
            {
              title: '비고',
              render: (rowData) => {
                if (rowData.type === 'event') {
                  return (
                    <VerticalFlex>
                      <div><strong>관련 이벤트</strong></div>
                      <div>{eventTable[rowData.eventId].name}</div>
                    </VerticalFlex>
                  );
                }
                if (rowData.type === 'reprint') {
                  return (
                    <VerticalFlex>
                      <div>{rowData.desc}</div>
                    </VerticalFlex>
                  );
                }
                return <PaddedSpan />;
              },
            },
          ]}
          data={Object.keys(gachaTable).map(Number).map((id) => ({
            id,
            ...gachaTable[id],
          }))}
          pageSize={50}
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

export default connect(mapStateToProps)(Gachas);
