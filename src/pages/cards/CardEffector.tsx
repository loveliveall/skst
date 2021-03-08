import React from 'react';
import {
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  Center,
  FormControl,
  FormLabel,
  Switch,
  VStack,
} from '@chakra-ui/react';

import { useAppDispatch, useAppSelector } from '@/store';
import {
  toggleApplySelfPassive,
} from '@/store/card-effector/slice';
import { Row } from './comps';

const CardEffector: React.FC = () => {
  const dispatch = useAppDispatch();
  const eff = useAppSelector((state) => state.cardEffector);
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
          <Row title="개성(패시브)">
            <VStack spacing={2}>
              <FormControl display="flex" alignItems="center">
                <FormLabel htmlFor="apply-self" mb="0">자신의 개성(패시브)에 의한 버프 적용</FormLabel>
                <Switch
                  id="apply-self"
                  isChecked={eff.applySelfPassive}
                  onChange={() => dispatch(toggleApplySelfPassive())}
                />
              </FormControl>
            </VStack>
          </Row>
        </VStack>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default CardEffector;
