interface SkillTriggerType {
  readonly [id: number]: {
    readonly krName: string,
    readonly jpName: string,
    readonly ingameText: string,
  },
}

export const SKILL_TRIGGER_TYPE: SkillTriggerType = {
  0: { krName: '조건 없음', jpName: '', ingameText: '' },
  1: { krName: '어필 찬스(AC) 성공시', jpName: 'アピールチャンス(AC)成功時', ingameText: 'AC成功時' },
  2: { krName: '어필 찬스(AC) 개시시', jpName: 'アピールチャンス(AC)開始時', ingameText: 'AC時' },
};
