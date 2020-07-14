import { CARD } from './cardList';
import { PARAMETER } from './cardParameter';
// import { CARD_SKILL } from './cardSkill';
// import { SKILL } from './skill';
import { SKILL_LEVEL_MAP } from './cardSkillLevelMap';

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

// Skill instance should have maxLevel items if field is array
// Object.keys(SKILL).map(Number).forEach((id) => {
//   const { maxLevel, detail } = SKILL[id];
//   const allLevelInfoExists = Object.keys(detail).every((field) => {
//     const v = detail[field as keyof typeof detail];
//     if (Array.isArray(v)) {
//       return v.length === maxLevel;
//     }
//     return true;
//   });
//   if (!allLevelInfoExists) {
//     throw Error(`Skill ID ${id} does not have enough info for each skill level`);
//   }
// });

// Skill level map validator
Object.keys(SKILL_LEVEL_MAP).map(Number).forEach((id) => {
  const LENGTH = 6;
  if (SKILL_LEVEL_MAP[id].speciality.length !== LENGTH) {
    throw Error(`Skill level map ID ${id} does not have ${LENGTH} speciality map`);
  }
  if (SKILL_LEVEL_MAP[id].individuality.passive.length !== LENGTH) {
    throw Error(`Skill level map ID ${id} does not have ${LENGTH} individuality passive map`);
  }
});

/*
Object.keys(CARD).map(Number).forEach((id) => {
  if (PARAMETER[id][0].appl === 0) console.warn(`Not enough info: Card #${id} parameter`);
  if (SKILL_LEVEL_MAP[id].speciality[0] === 0) console.warn(`Not enough info: Card #${id} skill level map`);
  if (SKILL[CARD_SKILL[id].specialityId].detail.effectValue[0] === 0) {
    console.warn(`Not enough info: Card #${id} speciality effect value`);
  }
  if (SKILL[CARD_SKILL[id].individuality.passiveId].detail.effectValue[0] === 0) {
    console.warn(`Not enough info: Card #${id} individuality passive effect value`);
  }
});
*/
