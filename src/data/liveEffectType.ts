interface LiveEffectType {
  readonly [id: number]: {
    readonly desc: string,
    readonly type: 'inc' | 'dec',
    readonly stat: 'appl' | 'baseAppl',
  },
}

/* eslint-disable max-len, object-curly-newline */
export const LIVE_EFFECT_TYPE: LiveEffectType = {
  1: { desc: '어필 감소 (%)', type: 'dec', stat: 'appl' },
  2: { desc: '어필 추가 (%)', type: 'inc', stat: 'appl' },
  3: { desc: '기본 어필 감소 (%)', type: 'dec', stat: 'baseAppl' },
  4: { desc: '기본 어필 추가 (%)', type: 'inc', stat: 'baseAppl' },
};
/* eslint-enable max-len, object-curly-newline */
