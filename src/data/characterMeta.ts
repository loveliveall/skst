interface CharacterMeta {
  readonly id: number,
  readonly name: string,
  readonly birthMonth: number,
  readonly birthDay: number,
  readonly colorHex: string,
}

/* eslint-disable max-len, object-property-newline, object-curly-newline */
const CHARACTER_META: CharacterMeta[] = [
  { id: 1, name: '코사카 호노카', birthMonth: 8, birthDay: 3, colorHex: '#ffa400' },
  { id: 2, name: '아야세 에리', birthMonth: 10, birthDay: 21, colorHex: '#41b6e6' },
  { id: 3, name: '미나미 코토리', birthMonth: 9, birthDay: 12, colorHex: '#b2b4b2' },
  { id: 4, name: '소노다 우미', birthMonth: 3, birthDay: 15, colorHex: '#003da5' },
  { id: 5, name: '호시조라 린', birthMonth: 11, birthDay: 1, colorHex: '#fedd00' },
  { id: 6, name: '니시키노 마키', birthMonth: 4, birthDay: 19, colorHex: '#ee2737' },
  { id: 7, name: '토죠 노조미', birthMonth: 6, birthDay: 9, colorHex: '#84329b' },
  { id: 8, name: '코이즈미 하나요', birthMonth: 1, birthDay: 17, colorHex: '#00ab84' },
  { id: 9, name: '야자와 니코', birthMonth: 7, birthDay: 22, colorHex: '#e31c79' },
  { id: 11, name: '타카미 치카', birthMonth: 8, birthDay: 1, colorHex: '#ff7f32' },
  { id: 12, name: '사쿠라우치 리코', birthMonth: 9, birthDay: 19, colorHex: '#fb637e' },
  { id: 13, name: '마츠우라 카난', birthMonth: 2, birthDay: 10, colorHex: '#00c7b1' },
  { id: 14, name: '쿠로사와 다이아', birthMonth: 1, birthDay: 1, colorHex: '#e4002b' },
  { id: 15, name: '와타나베 요우', birthMonth: 4, birthDay: 17, colorHex: '#00b5e2' },
  { id: 16, name: '츠시마 요시코', birthMonth: 7, birthDay: 13, colorHex: '#b1b3b3' },
  { id: 17, name: '쿠니키다 하나마루', birthMonth: 3, birthDay: 4, colorHex: '#ffcd00' },
  { id: 18, name: '오하라 마리', birthMonth: 6, birthDay: 13, colorHex: '#9b26b6' },
  { id: 19, name: '쿠로사와 루비', birthMonth: 9, birthDay: 21, colorHex: '#e93cac' },
  { id: 21, name: '우에하라 아유무', birthMonth: 3, birthDay: 1, colorHex: '#ed7d95' },
  { id: 22, name: '나카스 카스미', birthMonth: 1, birthDay: 23, colorHex: '#e7d600' },
  { id: 23, name: '오사카 시즈쿠', birthMonth: 4, birthDay: 3, colorHex: '#3fa4c6' },
  { id: 24, name: '아사카 카린', birthMonth: 6, birthDay: 29, colorHex: '#495ec6' },
  { id: 25, name: '미야시타 아이', birthMonth: 5, birthDay: 30, colorHex: '#ff5800' },
  { id: 26, name: '코노에 카나타', birthMonth: 12, birthDay: 16, colorHex: '#b365ae' },
  { id: 27, name: '유키 세츠나', birthMonth: 8, birthDay: 8, colorHex: '#d81c2f' },
  { id: 28, name: '엠마 베르데', birthMonth: 2, birthDay: 5, colorHex: '#7dc62b' },
  { id: 29, name: '텐노지 리나', birthMonth: 11, birthDay: 13, colorHex: '#969fb5' },
];
/* eslint-enable max-len, object-property-newline, object-curly-newline */

export function getBirthdayCharacter(date: Date) {
  return CHARACTER_META.find(
    (item) => item.birthDay === date.getDate() && item.birthMonth === date.getMonth() + 1,
  );
}
