import React from 'react';
import { Link } from 'react-router-dom';
import {
  Image, ImageProps,
} from '@chakra-ui/react';

import { getCardIconAssetPath, getCardSymbol, getCardTitle } from '@/utils';

type CardIconProps = {
  cardId: number,
  awaken?: boolean,
  padding?: ImageProps['padding'],
  width?: ImageProps['width'],
  height?: ImageProps['height'],
};

const CardIcon: React.FC<CardIconProps> = ({
  cardId, awaken, padding, width, height,
}) => {
  const isAwakenInternal = awaken ?? false;
  return (
    <Link to={`/card/${cardId}`}>
      <Image
        src={getCardIconAssetPath(cardId, isAwakenInternal)}
        alt={getCardSymbol(cardId, isAwakenInternal)}
        title={getCardTitle(cardId, isAwakenInternal)}
        padding={padding}
        minWidth={width}
        width={width}
        minHeight={height}
        height={height}
      />
    </Link>
  );
};

export default CardIcon;
