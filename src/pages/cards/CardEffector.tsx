import React from 'react';
import {
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  Center,
  VStack,
  HStack,
  Heading,
} from '@chakra-ui/react';

import FixedWrapper from '@/components/FixedWrapper';

type RowProps = {
  title: string,
};
const Row: React.FC<RowProps> = ({ title, children }) => (
  <FixedWrapper>
    <HStack spacing={2}>
      <Center flexShrink={0}>
        <Heading size="sm">{title}</Heading>
      </Center>
      {children}
    </HStack>
  </FixedWrapper>
);

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
