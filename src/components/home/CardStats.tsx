import React from 'react';
import styled from 'styled-components';

import { RARITY, ATTRIBUTE, ROLE } from '@/data/cardMetadata';
import { CARD } from '@/data/cardList';

import { FlexBox } from '@/components/Styles';

function countCards(
  rarityIds: (keyof typeof RARITY)[],
  attributeId: keyof typeof ATTRIBUTE | null,
  roleId: keyof typeof ROLE | null,
) {
  return Object.keys(CARD).map(Number).filter(
    (id) => (
      rarityIds.includes(CARD[id].rarityId)
      && (attributeId === null || CARD[id].attributeId === attributeId)
      && (roleId === null || CARD[id].roleId === roleId)
    ),
  ).length;
}

const TableWrapper = styled.div`
  overflow-x: auto;
  max-width: calc(100vw - 20px);
  padding-top: 8px;
`;
const StyledTable = styled.table`
  border-collapse: collapse;
  text-align: center;
`;
const StyledTr = styled.tr`
  height: 40px;
`;
const StyledTd = styled.td`
  border: 1px solid black;
  padding: 8px;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
`;

const StyledInput = styled.input`
  margin-right: 4px;
`;

const PaddedDiv = styled.div`
  padding-right: 8px;
`;

const CardStats: React.FC = () => {
  const [showRarity, setShowRarity] = React.useState(Object.keys(RARITY).map(Number));
  const ROLE_IDS = Object.keys(ROLE).map(Number);
  const ATTRIBUTE_IDS = Object.keys(ATTRIBUTE).map(Number);
  return (
    <>
      <FlexBox>
        {
          Object.keys(RARITY).map(Number).map((id) => (
            <PaddedDiv key={id}>
              <StyledInput
                type="checkbox"
                checked={showRarity.includes(id)}
                onChange={() => {
                  if (showRarity.includes(id)) {
                    setShowRarity(showRarity.filter((v) => v !== id));
                  } else {
                    setShowRarity([...showRarity, id]);
                  }
                }}
              />
              {RARITY[id].symbol}
            </PaddedDiv>
          ))
        }
      </FlexBox>
      <TableWrapper>
        <StyledTable>
          <tbody>
            <StyledTr>
              <StyledTd>-</StyledTd>
              {ROLE_IDS.map((id) => (
                <StyledTd key={id}><Icon src={ROLE[id].iconAssetPath} /></StyledTd>
              ))}
              <StyledTd>합</StyledTd>
            </StyledTr>
            {ATTRIBUTE_IDS.map((id) => (
              <StyledTr key={id}>
                <StyledTd><Icon src={ATTRIBUTE[id].iconAssetPath} /></StyledTd>
                {ROLE_IDS.map((roleId) => (
                  <StyledTd key={roleId}>{countCards(showRarity, id, roleId)}</StyledTd>
                ))}
                <StyledTd>{countCards(showRarity, id, null)}</StyledTd>
              </StyledTr>
            ))}
            <StyledTr>
              <StyledTd>합</StyledTd>
              {ROLE_IDS.map((id) => (
                <StyledTd key={id}>{countCards(showRarity, null, id)}</StyledTd>
              ))}
              <StyledTd>{countCards(showRarity, null, null)}</StyledTd>
            </StyledTr>
          </tbody>
        </StyledTable>
      </TableWrapper>
    </>
  );
};

export default CardStats;
