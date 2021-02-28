import React from 'react';
import {
  Box, BoxProps,
} from '@chakra-ui/react';

import FixedWrapper from '@/components/FixedWrapper';

export const Surface: React.FC<BoxProps> = ({ children, ...props }) => (
  <FixedWrapper>
    <Box
      marginX={2}
      marginBottom={2}
      p={4}
      shadow="md"
      borderWidth="1px"
      borderRadius={8}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </Box>
  </FixedWrapper>
);
