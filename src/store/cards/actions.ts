import { createFSA, TActions } from '../redux-utils/utils';

export const CardsActionTypes = {
  FILTER_MEMBERS_SET: 'CARDS_FILTER_MEMBERS_SET',
  FILTER_ATTRIBUTE_SET: 'CARDS_FILTER_ATTRIBUTE_SET',
  FILTER_ROLE_SET: 'CARDS_FILTER_ROLE_SET',
  FILTER_RARITY_SET: 'CARDS_FILTER_RARITY_SET',
  FILTER_UNCAP_SET: 'CARDS_FILTER_UNCAP_SET',

  BUFF_ROLE_EFFECT_SET: 'CARDS_BUFF_ROLE_EFFECT_SET',
  BUFF_ATTRIBUTE_ID_SET: 'CARDS_BUFF_ATTRIBUTE_ID_SET',
  BUFF_DIFF_ATTR_DEBUF_SET: 'CARDS_BUFF_DIFF_ATTR_DEBUF_SET',

  SETTINGS_APPLY: 'CARDS_SETTINGS_APPLY',
  SETTINGS_ROLLBACK: 'CARDS_SETTINGS_ROLLBACK',
  SETTINGS_RESET: 'CARDS_SETTINGS_RESET',
} as const;

export const CardsActionCreators = {
  setMemberFilter: (memberIds: number[], value: boolean) => createFSA(
    CardsActionTypes.FILTER_MEMBERS_SET, { memberIds, value },
  ),
  setAttributeFilter: (attributeIds: number[], value: boolean) => createFSA(
    CardsActionTypes.FILTER_ATTRIBUTE_SET, { attributeIds, value },
  ),
  setRoleFilter: (roleIds: number[], value: boolean) => createFSA(
    CardsActionTypes.FILTER_ROLE_SET, { roleIds, value },
  ),
  setRarityFilter: (rarityId: number, value: boolean) => createFSA(
    CardsActionTypes.FILTER_RARITY_SET, { rarityId, value },
  ),
  setUncapFilter: (uncap: number | null) => createFSA(CardsActionTypes.FILTER_UNCAP_SET, { uncap }),

  setRoleEffectBuff: (value: boolean) => createFSA(
    CardsActionTypes.BUFF_ROLE_EFFECT_SET, { value },
  ),
  setBuffAttributeId: (id: number | null) => createFSA(
    CardsActionTypes.BUFF_ATTRIBUTE_ID_SET, { id },
  ),
  setDiffAttrDebuff: (percent: number) => createFSA(
    CardsActionTypes.BUFF_DIFF_ATTR_DEBUF_SET, { percent },
  ),

  applySettings: () => createFSA(CardsActionTypes.SETTINGS_APPLY, {}),
  rollbackSettings: () => createFSA(CardsActionTypes.SETTINGS_ROLLBACK, {}),
  resetSettings: () => createFSA(CardsActionTypes.SETTINGS_RESET, {}),
};

export type CardsActions = TActions<typeof CardsActionCreators>;
