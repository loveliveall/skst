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
  5: { specialityId: 100005, individuality: { passiveId: 200005 } },
  6: { specialityId: 100006, individuality: { passiveId: 200006 } },
  7: { specialityId: 100007, individuality: { passiveId: 200007, liveId: 300007 } },
  8: { specialityId: 100008, individuality: { passiveId: 200008, liveId: 300008 } },
  9: { specialityId: 100009, individuality: { passiveId: 200009 } },
  10: { specialityId: 100010, individuality: { passiveId: 200010 } },
  11: { specialityId: 100011, individuality: { passiveId: 200011, liveId: 300011 } },
  12: { specialityId: 100012, individuality: { passiveId: 200012, liveId: 300012 } },

  155: { specialityId: 100155, individuality: { passiveId: 200155, liveId: 300155 } },
  156: { specialityId: 100156, individuality: { passiveId: 200156, liveId: 300156 } },
};
