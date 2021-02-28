import React from 'react';
import {
  Accordion,
} from '@chakra-ui/react';

import CardFilter from './CardFilter';

const CardMenu: React.FC = () => {
  const [accordionIdxs, setAccordionIdxs] = React.useState<number[]>([]);
  return (
    <Accordion
      allowMultiple
      index={accordionIdxs}
      onChange={(idxs) => {
        if (typeof idxs === 'number') setAccordionIdxs([idxs]);
        else setAccordionIdxs(idxs);
      }}
      width="100%"
      maxWidth="800px"
      whiteSpace="nowrap"
    >
      <CardFilter />
    </Accordion>
  );
};

export default CardMenu;
