import React from 'react';
import {
  Box,
  Heading,
  Stack,
  StackDivider,
} from '@chakra-ui/react';

import { CARD_ACTIVE_SKILL } from '@/data/cardActiveSkill';
import { CARD_PASSIVE_SKILL } from '@/data/cardPassiveSkill';

import { Surface } from './common';
import SkillInfo from './SkillInfo';

type CardSkillInfoProps = {
  cardId: number,
};
const CardSkillInfo: React.FC<CardSkillInfoProps> = ({ cardId }) => {
  const aSkill = CARD_ACTIVE_SKILL[cardId];
  const pSkill = CARD_PASSIVE_SKILL[cardId];
  return (
    <Surface>
      <Heading as="h3" size="md" marginBottom={2}>카드 스킬 정보</Heading>
      <Stack spacing={2}>
        {aSkill !== undefined && (
          <Box p={4} borderRadius={8} borderWidth="1px">
            <Heading as="h4" size="sm" marginBottom={1}>[특기 정보]</Heading>
            <SkillInfo skill={aSkill} />
          </Box>
        )}
        {pSkill !== undefined && (
          <Box p={4} borderRadius={8} borderWidth="1px">
            <Heading as="h4" size="sm" marginBottom={1}>[개성 정보]</Heading>
            <Stack spacing={2} divider={<StackDivider />}>
              {pSkill.map((skill) => (
                <SkillInfo key={Math.random()} skill={skill} />
              ))}
            </Stack>
          </Box>
        )}
      </Stack>
    </Surface>
  );
};

export default CardSkillInfo;
