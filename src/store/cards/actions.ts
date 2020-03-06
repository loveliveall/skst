import { createFSA, TActions } from '../redux-utils/utils';
import { SkillTargetInfo } from './types';

export const CardsActionTypes = {
  FILTER_MEMBERS_SET: 'CARDS_FILTER_MEMBERS_SET',
  FILTER_ATTRIBUTE_SET: 'CARDS_FILTER_ATTRIBUTE_SET',
  FILTER_ROLE_SET: 'CARDS_FILTER_ROLE_SET',
  FILTER_RARITY_SET: 'CARDS_FILTER_RARITY_SET',
  FILTER_SPEC_CAT_ADD: 'CARDS_FILTER_SPEC_CAT_ADD',
  FILTER_SPEC_CAT_EDIT: 'CARDS_FILTER_SPEC_CAT_EDIT',
  FILTER_SPEC_CAT_REMOVE: 'CARDS_FILTER_SPEC_CAT_REMOVE',
  FILTER_SPEC_TARGET_ADD: 'CARDS_FILTER_SPEC_TARGET_ADD',
  FILTER_SPEC_TARGET_EDIT: 'CARDS_FILTER_SPEC_TARGET_EDIT',
  FILTER_SPEC_TARGET_REMOVE: 'CARDS_FILTER_SPEC_TARGET_REMOVE',
  FILTER_INDIV_P_CAT_ADD: 'CARDS_FILTER_INDIV_P_CAT_ADD',
  FILTER_INDIV_P_CAT_EDIT: 'CARDS_FILTER_INDIV_P_CAT_EDIT',
  FILTER_INDIV_P_CAT_REMOVE: 'CARDS_FILTER_INDIV_P_CAT_REMOVE',
  FILTER_INDIV_P_TARGET_ADD: 'CARDS_FILTER_INDIV_P_TARGET_ADD',
  FILTER_INDIV_P_TARGET_EDIT: 'CARDS_FILTER_INDIV_P_TARGET_EDIT',
  FILTER_INDIV_P_TARGET_REMOVE: 'CARDS_FILTER_INDIV_P_TARGET_REMOVE',
  FILTER_UNCAP_SET: 'CARDS_FILTER_UNCAP_SET',
  FILTER_OUTFIT_ID_SET: 'CARDS_FILTER_OUTFIT_ID_SET',

  BUFF_ROLE_EFFECT_SET: 'CARDS_BUFF_ROLE_EFFECT_SET',
  BUFF_INDIV_P_EFFECT_SET: 'CARDS_BUFF_INDIV_P_EFFECT_SET',
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
  addSpecCategoryFilter: (key: number, categoryId: number) => createFSA(
    CardsActionTypes.FILTER_SPEC_CAT_ADD, { key, categoryId },
  ),
  editSpecCategoryFilter: (key: number, categoryId: number) => createFSA(
    CardsActionTypes.FILTER_SPEC_CAT_EDIT, { key, categoryId },
  ),
  removeSpecCategoryFilter: (key: number) => createFSA(
    CardsActionTypes.FILTER_SPEC_CAT_REMOVE, { key },
  ),
  addSpecTargetFilter: (key: number, target: SkillTargetInfo) => createFSA(
    CardsActionTypes.FILTER_SPEC_TARGET_ADD, { key, target },
  ),
  editSpecTargetFilter: (key: number, target: SkillTargetInfo) => createFSA(
    CardsActionTypes.FILTER_SPEC_TARGET_EDIT, { key, target },
  ),
  removeSpecTargetFilter: (key: number) => createFSA(
    CardsActionTypes.FILTER_SPEC_TARGET_REMOVE, { key },
  ),
  addIndivPCategoryFilter: (key: number, categoryId: number) => createFSA(
    CardsActionTypes.FILTER_INDIV_P_CAT_ADD, { key, categoryId },
  ),
  editIndivPCategoryFilter: (key: number, categoryId: number) => createFSA(
    CardsActionTypes.FILTER_INDIV_P_CAT_EDIT, { key, categoryId },
  ),
  removeIndivPCategoryFilter: (key: number) => createFSA(
    CardsActionTypes.FILTER_INDIV_P_CAT_REMOVE, { key },
  ),
  addIndivPTargetFilter: (key: number, target: SkillTargetInfo) => createFSA(
    CardsActionTypes.FILTER_INDIV_P_TARGET_ADD, { key, target },
  ),
  editIndivPTargetFilter: (key: number, target: SkillTargetInfo) => createFSA(
    CardsActionTypes.FILTER_INDIV_P_TARGET_EDIT, { key, target },
  ),
  removeIndivPTargetFilter: (key: number) => createFSA(
    CardsActionTypes.FILTER_INDIV_P_TARGET_REMOVE, { key },
  ),
  setUncapFilter: (uncap: number | null) => createFSA(CardsActionTypes.FILTER_UNCAP_SET, { uncap }),
  setOutfitSeriesId: (id: number | null) => createFSA(CardsActionTypes.FILTER_OUTFIT_ID_SET, { id }),

  setRoleEffectBuff: (value: boolean) => createFSA(
    CardsActionTypes.BUFF_ROLE_EFFECT_SET, { value },
  ),
  setIndivPEffectBuff: (value: boolean) => createFSA(
    CardsActionTypes.BUFF_INDIV_P_EFFECT_SET, { value },
  ),
  setBuffAttributeId: (id: number | null) => createFSA(
    CardsActionTypes.BUFF_ATTRIBUTE_ID_SET, { id },
  ),
  setDiffAttrDebuff: (targetParam: 'appl' | 'baseAppl', percent: number) => createFSA(
    CardsActionTypes.BUFF_DIFF_ATTR_DEBUF_SET, { targetParam, percent },
  ),

  applySettings: () => createFSA(CardsActionTypes.SETTINGS_APPLY, {}),
  rollbackSettings: () => createFSA(CardsActionTypes.SETTINGS_ROLLBACK, {}),
  resetSettings: () => createFSA(CardsActionTypes.SETTINGS_RESET, {}),
};

export type CardsActions = TActions<typeof CardsActionCreators>;
