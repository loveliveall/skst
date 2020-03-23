interface SkillTriggerType {
  readonly [id: number]: {
    readonly krDesc: string,
    readonly jpDesc: string,
    readonly ingameText: string,
  },
}

export const SKILL_TRIGGER_TYPE: SkillTriggerType = {
  0: { krDesc: '조건 없음', jpDesc: '', ingameText: '' },
  1: { krDesc: '어필 찬스(AC) 성공시', jpDesc: 'アピールチャンス(AC)成功時', ingameText: 'AC成功時' },
  2: { krDesc: '어필 찬스(AC) 개시시', jpDesc: 'アピールチャンス(AC)開始時', ingameText: 'AC時' },
  3: { krDesc: '악곡 개시시', jpDesc: '楽曲開始時', ingameText: '曲開始時' },
  4: { krDesc: '작전 변경시', jpDesc: '作戦変更時', ingameText: '作戦切替時' },
  5: { krDesc: 'SP특기 발동시', jpDesc: 'SP特技発動時', ingameText: 'SP特技発動時' },
  6: { krDesc: '어필 찬스(AC) 실패시', jpDesc: 'アピールチャンス(AC)失敗時', ingameText: 'AC失敗時' },
  7: { krDesc: '자신의 어필시', jpDesc: '自身のアピール時', ingameText: 'アピール時' },
  // Need value
  1001: { krDesc: '대미지 이상을 받았을 시', jpDesc: 'ダメージ以上受けた時', ingameText: 'ダメージ時' }, // 고정 수치 대미지 이상 받았을 경우
};
