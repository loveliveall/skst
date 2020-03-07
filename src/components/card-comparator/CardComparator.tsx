import React from 'react';
import styled from 'styled-components';

import { FlexBox, FixedWrapper } from '@/components/Styles';

import Settings from '@/components/deck-simulator/Settings';
import CardSettings from './CardSettings';
import CardSelectModal from './CardSelectModal';

const VerticalFlex = styled(FlexBox)`
  width: 100%;
  flex-direction: column;
  align-items: center;
`;
const RowWrapper = styled(FixedWrapper)`
  padding-top: 4px;
  padding-bottom: 4px;
`;

const CardComparator: React.FC = () => (
  <>
    <VerticalFlex>
      <RowWrapper style={{ border: '1px solid black' }}>
        <Settings />
      </RowWrapper>
      <RowWrapper>
        <CardSettings />
      </RowWrapper>
    </VerticalFlex>
    <CardSelectModal />
  </>
);

export default CardComparator;
