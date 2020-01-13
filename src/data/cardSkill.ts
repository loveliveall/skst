interface CardSkill {
  readonly [id: number]: {
    specialityId: number,
    individuality: {
      passiveId: number,
      liveId?: number,
    },
  },
}

export const CARD_SKILL: CardSkill = {
  1: { specialityId: 100001, individuality: { passiveId: 200001 } },
  2: { specialityId: 100002, individuality: { passiveId: 200002 } },
  3: { specialityId: 100003, individuality: { passiveId: 200003, liveId: 300003 } },
  4: { specialityId: 100004, individuality: { passiveId: 200004, liveId: 300004 } },
};
