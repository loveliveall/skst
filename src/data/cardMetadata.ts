interface Rarity {
  readonly [id: number]: {
    readonly symbol: string,
  },
}

export const RARITY: Rarity = {
  1: { symbol: 'R' },
  2: { symbol: 'SR' },
  3: { symbol: 'UR' },
};

interface Attribute {
  readonly [id: number]: {
    readonly name: string,
    readonly iconAssetPath: string,
  },
}

export const ATTRIBUTE: Attribute = {
  1: { name: '스마일', iconAssetPath: '/images/icons/attribute/smile.png' },
  2: { name: '퓨어', iconAssetPath: '/images/icons/attribute/pure.png' },
  3: { name: '쿨', iconAssetPath: '/images/icons/attribute/cool.png' },
  4: { name: '액티브', iconAssetPath: '/images/icons/attribute/active.png' },
  5: { name: '내츄럴', iconAssetPath: '/images/icons/attribute/natural.png' },
  6: { name: '엘레강트', iconAssetPath: '/images/icons/attribute/elegant.png' },
};

interface Role {
  readonly [id: number]: {
    readonly name: string,
    readonly symbol: string,
    readonly iconAssetPath: string,
  },
}

export const ROLE: Role = {
  1: { name: '볼티지', symbol: 'Vo', iconAssetPath: '/images/icons/role/vo.png' },
  2: { name: 'SP', symbol: 'Sp', iconAssetPath: '/images/icons/role/sp.png' },
  3: { name: '가드', symbol: 'Gd', iconAssetPath: '/images/icons/role/gd.png' },
  4: { name: '스킬', symbol: 'Sk', iconAssetPath: '/images/icons/role/sk.png' },
};
