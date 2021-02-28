import React from 'react';
import {
  Box,
  Image,
  HStack,
  Stack,
  Text,
} from '@chakra-ui/react';

import { processSkill } from '@/utils';
import { Skill } from '@/data/types';

type SkillInfoProps = {
  skill: Skill,
};
const SkillInfo: React.FC<SkillInfoProps> = ({ skill }) => {
  const {
    triggerType,
    triggerProb,
    targets,
    condition,
    effectStrs,
    effectCategory,
  } = processSkill(skill);
  return (
    <Stack spacing={0}>
      {triggerProb !== 100 && (
        <Text>
          <strong>발동 확률: </strong>
          {`${triggerProb}%`}
        </Text>
      )}
      {triggerType !== null && (
        <Text>
          <strong>발동 조건: </strong>
          {`${triggerType} ${condition === null ? '' : `(${condition})`}`}
        </Text>
      )}
      {effectStrs.length !== 0 && (
        <>
          <Text><strong>효과</strong></Text>
          <HStack paddingY={1}>
            <Image
              src={effectCategory.iconAssetPath}
              title={effectCategory.name}
              width="40px"
              height="40px"
            />
            <Box>
              {effectStrs.map((e) => (
                <Text key={e}>{e}</Text>
              ))}
            </Box>
          </HStack>
        </>
      )}
      {targets.length !== 0 && (
        <Text>
          <strong>대상: </strong>
          {targets.join(', ')}
        </Text>
      )}
    </Stack>
  );
};

export default SkillInfo;
