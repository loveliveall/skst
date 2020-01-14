import { CARD } from './cardList';
import { PARAMETER } from './cardParameter';
import { SKILL } from './skill';

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

Object.keys(SKILL).map(Number).forEach((id) => {
  const { maxLevel, detail } = SKILL[id];
  const allLevelInfoExists = Object.keys(detail).every((field) => {
    const v = detail[field as keyof typeof detail];
    if (Array.isArray(v)) {
      return v.length === maxLevel;
    }
    return true;
  });
  if (!allLevelInfoExists) {
    throw Error(`Skill ID ${id} does not have enough info for each skill level`);
  }
});
