import React from 'react';
import styled from 'styled-components';

import { RARITY, ATTRIBUTE, ROLE } from '@/data/cardMetadata';
import { CARD, FROM_MAP, FromTag } from '@/data/cardList';

import { FlexBox, FixedWrapper } from '@/components/Styles';

function countCards(
  rarityIds: (keyof typeof RARITY)[],
  attributeId: keyof typeof ATTRIBUTE | null,
  roleId: keyof typeof ROLE | null,
  fromTag: FromTag[],
) {
  return Object.keys(CARD).map(Number).filter(
    (id) => (
      rarityIds.includes(CARD[id].rarityId)
      && (attributeId === null || CARD[id].attributeId === attributeId)
      && (roleId === null || CARD[id].roleId === roleId)
      && (fromTag.includes(CARD[id].fromId[0]))
    ),
  ).length;
}

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
  width: 32px;
  height: 32px;
`;

const StyledInput = styled.input`
  margin-right: 4px;
`;

const PaddedDiv = styled.div`
  padding: 4px;
`;

const CardStats: React.FC = () => {
  const [showRarity, setShowRarity] = React.useState(Object.keys(RARITY).map(Number));
  const [showFromTag, setShowFromTag] = React.useState(Object.keys(FROM_MAP) as FromTag[]);
  const ROLE_IDS = Object.keys(ROLE).map(Number);
  const ATTRIBUTE_IDS = Object.keys(ATTRIBUTE).map(Number);
  return (
    <FixedWrapper>
      <FlexBox>
        <PaddedDiv>
          <PaddedDiv>레어도</PaddedDiv>
          <div>
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
          </div>
        </PaddedDiv>
        <PaddedDiv>
          <PaddedDiv>최초 등장</PaddedDiv>
          <div>
            <FlexBox>
              {
                (Object.keys(FROM_MAP) as FromTag[]).map((tag) => (
                  <PaddedDiv key={tag}>
                    <StyledInput
                      type="checkbox"
                      checked={showFromTag.includes(tag)}
                      onChange={() => {
                        if (showFromTag.includes(tag)) {
                          setShowFromTag(showFromTag.filter((v) => v !== tag));
                        } else {
                          setShowFromTag([...showFromTag, tag]);
                        }
                      }}
                    />
                    {tag === 'gacha' ? '가챠' : '이벤트'}
                  </PaddedDiv>
                ))
              }
            </FlexBox>
          </div>
        </PaddedDiv>
      </FlexBox>
      <StyledTable>
        <tbody>
          <StyledTr>
            <StyledTd>-</StyledTd>
            {ROLE_IDS.map((id) => (
              <StyledTd key={id}>
                <Icon
                  src={ROLE[id].iconAssetPath}
                  alt={`${ROLE[id].symbol}-icon`}
                  title={ROLE[id].name}
                />
              </StyledTd>
            ))}
            <StyledTd>합</StyledTd>
          </StyledTr>
          {ATTRIBUTE_IDS.map((id) => (
            <StyledTr key={id}>
              <StyledTd>
                <Icon
                  src={ATTRIBUTE[id].iconAssetPath}
                  alt={`${ATTRIBUTE[id].symbol}-icon`}
                  title={ATTRIBUTE[id].name}
                />
              </StyledTd>
              {ROLE_IDS.map((roleId) => (
                <StyledTd key={roleId}>{countCards(showRarity, id, roleId, showFromTag)}</StyledTd>
              ))}
              <StyledTd>{countCards(showRarity, id, null, showFromTag)}</StyledTd>
            </StyledTr>
          ))}
          <StyledTr>
            <StyledTd>합</StyledTd>
            {ROLE_IDS.map((id) => (
              <StyledTd key={id}>{countCards(showRarity, null, id, showFromTag)}</StyledTd>
            ))}
            <StyledTd>{countCards(showRarity, null, null, showFromTag)}</StyledTd>
          </StyledTr>
        </tbody>
      </StyledTable>
    </FixedWrapper>
  );
};

export default CardStats;
