import React from 'react';
import {
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  Center,
  VStack,
} from '@chakra-ui/react';

import { Row } from './comps';

const CardEffector: React.FC = () => {
  console.log('ESLINT!');
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Center flex="1">효과 설정</Center>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel>
        <VStack spacing={4}>
          <Row title="Example">
            <VStack />
          </Row>
        </VStack>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default CardEffector;
