import React from 'react';
import {
  useColorMode,
  FormControl,
  FormLabel,
  Heading,
  Stack,
  Switch,
} from '@chakra-ui/react';

import { useAppDispatch, useAppSelector } from '@/store';
import { toggleDefaultIconAwaken } from '@/store/settings/slice';

const AppSettings: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const dispatch = useAppDispatch();
  return (
    <Stack spacing={2}>
      <Heading fontSize="xl">애플리케이션 설정</Heading>
      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="dark-mode-toggle" marginBottom="0">
          다크 모드 활성화
        </FormLabel>
        <Switch
          id="dark-mode-toggle"
          isChecked={colorMode === 'dark'}
          onChange={toggleColorMode}
        />
      </FormControl>
      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="awaken-icon-toggle" marginBottom="0">
          각성 아이콘을 기본으로 사용
        </FormLabel>
        <Switch
          id="awaken-icon-toggle"
          isChecked={useAppSelector((state) => state.settings.defaultIconAwaken)}
          onChange={() => dispatch(toggleDefaultIconAwaken())}
        />
      </FormControl>
    </Stack>
  );
};

export default AppSettings;
