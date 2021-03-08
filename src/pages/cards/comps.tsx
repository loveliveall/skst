import React from 'react';
import {
  Center,
  Heading,
  HStack,
} from '@chakra-ui/react';

import FixedWrapper from '@/components/FixedWrapper';

type RowProps = {
  title: string,
};
export const Row: React.FC<RowProps> = ({ title, children }) => (
  <FixedWrapper>
    <HStack spacing={2}>
      <Center flexShrink={0}>
        <Heading size="sm">{title}</Heading>
      </Center>
      {children}
    </HStack>
  </FixedWrapper>
);
