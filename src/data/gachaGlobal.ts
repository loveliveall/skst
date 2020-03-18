import { Gacha } from './gacha';

/* eslint-disable object-curly-newline, max-len */
export const GACHA_GLOBAL: Gacha = {
  1: { type: 'normal', name: '출시 기념 스카우트', startDate: '2020.02.25.', endDate: '2020.03.31.' },

  10001: { type: 'event', name: '시크릿 파티! 스카우트', startDate: '2020.03.03.', endDate: '2020.03.13.', eventId: 1 },
  10002: { type: 'event', name: '기모노 모델은 우리가! 스카우트', startDate: '2020.03.19.', endDate: '2020.03.30.', eventId: 2 },

  20001: { type: 'pickup', name: '픽업 스카우트 (UR 요시코)', startDate: '2020.03.13.', endDate: '2020.03.19.' },
};/* eslint-enable object-curly-newline, max-len */
