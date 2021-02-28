import React from 'react';
import { Box } from '@chakra-ui/react';

import { DESKTOP_BP, NAVBAR_WIDTH } from '@/consts';

const FixedWrapper: React.FC = ({ children }) => (
  <Box
    overflowX="auto"
    maxWidth={{
      base: 'calc(100vw - 32px)',
      [DESKTOP_BP]: `calc(100vw - ${NAVBAR_WIDTH} - 32px)`,
    }}
  >
    {children}
  </Box>
);

export default FixedWrapper;
