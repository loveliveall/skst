interface AccessoryParameters {
  readonly [id: number]: {
    readonly desc: string,
    readonly stat: {
      readonly appl: number,
      readonly stam: number,
      readonly tech: number,
    },
  },
}

export const ACCESSORY_PARAMETERS: AccessoryParameters = {
  1: { desc: '울악 0돌/Lv.30', stat: { appl: 670, stam: 502, tech: 502 } },
  2: { desc: '울악 1돌/Lv.35', stat: { appl: 732, stam: 549, tech: 549 } },
  3: { desc: '울악 2돌/Lv.40', stat: { appl: 793, stam: 595, tech: 595 } },
  4: { desc: '울악 3돌/Lv.45', stat: { appl: 855, stam: 641, tech: 641 } },
  5: { desc: '울악 4돌/Lv.50', stat: { appl: 917, stam: 687, tech: 687 } },
  6: { desc: '울악 5돌/Lv.60', stat: { appl: 1040, stam: 780, tech: 780 } },
};
