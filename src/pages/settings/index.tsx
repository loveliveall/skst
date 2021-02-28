import React from 'react';
import {
  Stack,
} from '@chakra-ui/react';

import AppSettings from './AppSettings';

const Settings: React.FC = () => (
  <Stack spacing={4} marginTop={-2}>
    <AppSettings />
  </Stack>
);

export default Settings;
