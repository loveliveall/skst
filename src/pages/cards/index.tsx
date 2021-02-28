import React from 'react';
import {
  VStack,
} from '@chakra-ui/react';

import CardMenu from './CardMenu';
import CardTable from './CardTable';

const Cards: React.FC = () => (
  <VStack>
    <CardMenu />
    <CardTable />
  </VStack>
);

export default Cards;
