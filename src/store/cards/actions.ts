import { createFSA, TActions } from '../redux-utils/utils';

export const CardsActionTypes = {
  FILTER_MEMBERS_SET: 'CARDS_FILTER_MEMBERS_SET',
  FILTER_ATTRIBUTE_SET: 'CARDS_FILTER_ATTRIBUTE_SET',
  FILTER_ROLE_SET: 'CARDS_FILTER_ROLE_SET',
  FILTER_RARITY_SET: 'CARDS_FILTER_RARITY_SET',
  FILTER_UNCAP_SET: 'CARDS_FILTER_UNCAP_SET',

  ADJUST_BUFF_ROLE_EFFECT_SET: 'CARDS_BUFF_ROLE_EFFECT_SET',
  ADJUST_BUFF_ATTRIBUTE_ID_SET: 'CARDS_BUFF_ATTRIBUTE_ID_SET',

  SETTINGS_APPLY: 'CARDS_SETTINGS_APPLY',
  SETTINGS_RESET: 'CARDS_SETTINGS_RESET',
} as const;

export const CardsActionCreators = {
  setMemberFilter: (memberIds: number[], value: boolean) => createFSA(
    CardsActionTypes.FILTER_MEMBERS_SET, { memberIds, value },
  ),
  setAttributeFilter: (attributeId: number, value: boolean) => createFSA(
    CardsActionTypes.FILTER_ATTRIBUTE_SET, { attributeId, value },
  ),
  setRoleFilter: (roleId: number, value: boolean) => createFSA(
    CardsActionTypes.FILTER_ROLE_SET, { roleId, value },
  ),
  setRarityFilter: (rarityId: number, value: boolean) => createFSA(
    CardsActionTypes.FILTER_RARITY_SET, { rarityId, value },
  ),
  setUncapFilter: (uncap: number | null) => createFSA(CardsActionTypes.FILTER_UNCAP_SET, { uncap }),

  setRoleEffectBuff: (value: boolean) => createFSA(
    CardsActionTypes.ADJUST_BUFF_ROLE_EFFECT_SET, { value },
  ),
  setBuffAttributeId: (id: number | null) => createFSA(
    CardsActionTypes.ADJUST_BUFF_ATTRIBUTE_ID_SET, { id },
  ),

  applySettings: () => createFSA(CardsActionTypes.SETTINGS_APPLY, {}),
  resetSettings: () => createFSA(CardsActionTypes.SETTINGS_RESET, {}),
};

export type CardsActions = TActions<typeof CardsActionCreators>;
