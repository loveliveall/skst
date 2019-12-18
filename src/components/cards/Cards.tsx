import React from 'react';
import styled from 'styled-components';

import { FlexBox, FixedWrapper } from '@/components/Styles';
import CardTable from '@/components/cards/CardTable';

const VerticalFlex = styled(FlexBox)`
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

type CardsProps = {};

const Cards: React.FC<CardsProps> = () => (
  <VerticalFlex>
    <FixedWrapper>
      <CardTable />
    </FixedWrapper>
  </VerticalFlex>
);

export default Cards;
