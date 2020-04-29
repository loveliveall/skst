import { Gacha } from './gacha';

/* eslint-disable object-curly-newline, max-len */
export const GACHA_GLOBAL: Gacha = {
  1: { type: 'normal', name: '출시 기념 스카우트', startDate: '2020.02.25.', endDate: '2020.03.31.' },
  2: { type: 'normal', name: '올스타 스카우트', startDate: '2020.03.31.', endDate: '2020.04.30.' },
  3: { type: 'normal', name: '올스타 스카우트', startDate: '2020.04.30.', endDate: '2020.05.29.' },

  10001: { type: 'event', name: '시크릿 파티! 스카우트', startDate: '2020.03.03.', endDate: '2020.03.13.', eventId: 1 },
  10002: { type: 'event', name: '기모노 모델은 우리가! 스카우트', startDate: '2020.03.19.', endDate: '2020.03.30.', eventId: 2 },
  10003: { type: 'event', name: '시타마치 관광 대모험 스카우트', startDate: '2020.04.06.', endDate: '2020.04.15.', eventId: 3 },
  10004: { type: 'event', name: '하이킹으로 리프레시! 스카우트', startDate: '2020.04.20.', endDate: '2020.04.30.', eventId: 4 },

  20001: { type: 'pickup', name: '픽업 스카우트 (UR 요시코)', startDate: '2020.03.13.', endDate: '2020.03.19.' },
  20002: { type: 'pickup', name: '픽업 스카우트 (UR 우미)', startDate: '2020.03.30.', endDate: '2020.04.06.' },
  20003: { type: 'pickup', name: '픽업 스카우트 (UR 리코)', startDate: '2020.04.15.', endDate: '2020.04.20.' },

  30001: { type: 'fes', name: '스쿠스타 페스티벌', startDate: '2020.04.30.', endDate: '2020.05.07.' },
};/* eslint-enable object-curly-newline, max-len */
