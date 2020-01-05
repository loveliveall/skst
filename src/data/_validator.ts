import { CARD } from './cardList';
import { PARAMETER } from './cardParameter';

// Parameter length and ID range validator
Object.keys(PARAMETER).map(Number).forEach((id) => {
  const LENGTH = 6;
  if (PARAMETER[id].length !== LENGTH) {
    throw Error(`ID ${id} does not have ${LENGTH} parameter state`);
  }
  if (CARD[id] === undefined) {
    throw Error(`ID ${id} does not exist in CARD`);
  }
});
