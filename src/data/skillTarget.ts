interface SkillTarget {
  readonly [id: number]: {
    readonly krName: string,
    readonly jpName: string,
    readonly ingameText: string,
  },
}

export const SKILL_TARGET: SkillTarget = {
  0: { krName: '대상 없음', jpName: '', ingameText: '' },
  1: { krName: '전원', jpName: '全員', ingameText: '全員' },
  2: { krName: '자신 이외', jpName: '自分以外', ingameText: '仲間' },
  3: { krName: '동속성', jpName: '同属性', ingameText: '同属性' },
  4: { krName: '동타입', jpName: '同タイプ', ingameText: 'タイプ' },
  5: { krName: '동작전', jpName: '同作戰', ingameText: '同作戰' },
  6: { krName: '동학교', jpName: '同学校', ingameText: '同学校' },
  7: { krName: '동학년', jpName: '同学年', ingameText: '同学年' },
  8: { krName: '동유닛', jpName: '同ユニット', ingameText: 'ユニット' },
  9: { krName: '자신', jpName: '自身', ingameText: '' },
};
