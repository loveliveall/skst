import { createFSA, TActions } from '../redux-utils/utils';

export const VoltageCalculatorActionTypes = {
  SLOT_ADD: 'VOLTAGE_CALCULATOR_SLOT_ADD',
  SLOT_MAX_DAMAGE_EDIT: 'VOLTAGE_CALCULATOR_MAX_DAMAGE_EDIT',
  SLOT_RAW_APPL_EDIT: 'VOLTAGE_CALCULATOR_SLOT_RAW_APPL_EDIT',
  SLOT_RAW_TECH_EDIT: 'VOLTAGE_CALCULATOR_SLOT_RAW_TECH_EDIT',
  SLOT_CRIT_BASE_EDIT: 'VOLTAGE_CALCULATOR_SLOT_CRIT_BASE_EDIT',

  SLOT_ACCESSORY_EDIT: 'VOLTAGE_CALCULATOR_SLOT_ACCESSORY_EDIT',

  SLOT_FORMATION_APPL_BUFF_EDIT: 'VOLTAGE_CALCULATOR_SLOT_FORMATION_APPL_BUFF_EDIT',
  SLOT_FORMATION_TECH_BUFF_EDIT: 'VOLTAGE_CALCULATOR_SLOT_FORMATION_TECH_BUFF_EDIT',

  SLOT_GUEST_APPL_BUFF_EDIT: 'VOLTAGE_CALCULATOR_SLOT_GUEST_APPL_BUFF_EDIT',
  SLOT_GUEST_TECH_BUFF_EDIT: 'VOLTAGE_CALCULATOR_SLOT_GUEST_TECH_BUFF_EDIT',

  SLOT_BASE_APPL_BUFF_EDIT: 'VOLTAGE_CALCULATOR_SLOT_BASE_APPL_BUFF_EDIT',
  SLOT_BASE_APPL_DEBUFF_EDIT: 'VOLTAGE_CALCULATOR_SLOT_BASE_APPL_DEBUFF_EDIT',
  SLOT_BASE_TECH_BUFF_EDIT: 'VOLTAGE_CALCULATOR_SLOT_BASE_TECH_BUFF_EDIT',
  SLOT_BASE_TECH_DEBUFF_EDIT: 'VOLTAGE_CALCULATOR_SLOT_BASE_TECH_DEBUFF_EDIT',
  SLOT_APPL_BUFF_EDIT: 'VOLTAGE_CALCULATOR_SLOT_APPL_BUFF_EDIT',
  SLOT_APPL_DEBUFF_EDIT: 'VOLTAGE_CALCULATOR_SLOT_APPL_DEBUFF_EDIT',
  SLOT_TECH_BUFF_EDIT: 'VOLTAGE_CALCULATOR_SLOT_TECH_BUFF_EDIT',
  SLOT_TECH_DEBUFF_EDIT: 'VOLTAGE_CALCULATOR_SLOT_TECH_DEBUFF_EDIT',

  SLOT_JUDGEMENT_FACTOR_EDIT: 'VOLTAGE_CALCULATOR_SLOT_JUDGEMENT_FACTOR_EDIT',
  SLOT_COMBO_FACTOR_EDIT: 'VOLTAGE_CALCULATOR_SLOT_COMBO_FACTOR_EDIT',
  SLOT_VOLTAGE_BUFF_EDIT: 'VOLTAGE_CALCULATOR_SLOT_VOLTAGE_BUFF_EDIT',
  SLOT_IS_SP_TOGGLE: 'VOLTAGE_CALCULATOR_IS_SP_TOGGLE',
  SLOT_IS_AC_TOGGLE: 'VOLTAGE_CALCULATOR_IS_AC_TOGGLE',
  SLOT_SUBUNIT_VO_EDIT: 'VOLTAGE_CALCULATOR_SLOT_SUBUNIT_VO_EDIT',
  SLOT_IS_SAME_ATTR_TOGGLE: 'VOLTAGE_CALCULATOR_IS_SAME_ATTR_TOGGLE',
  SLOT_STAMINA_FACTOR_EDIT: 'VOLTAGE_CALCULATOR_SLOT_STAMINA_FACTOR_EDIT',

  SLOT_CRIT_PROB_ADD_EDIT: 'VOLTAGE_CALCULATOR_SLOT_CRIT_PROB_ADD_EDIT',
  SLOT_CRIT_DAMAGE_ADD_EDIT: 'VOLTAGE_CALCULATOR_SLOT_CRIT_DAMAGE_ADD_EDIT',
  SLOT_SAME_ATTR_BONUS_EDIT: 'VOLTAGE_CALCULATOR_SLOT_SAME_ATTR_BONUS_EDIT',

  SLOT_DUPLICATE: 'VOLTAGE_CALCULATOR_SLOT_DUPLICATE',
  SLOT_REMOVE: 'VOLTAGE_CALCULATOR_SLOT_REMOVE',
} as const;

export const VoltageCalculatorActionCreators = {
  addSlot: (key: number) => createFSA(
    VoltageCalculatorActionTypes.SLOT_ADD, { key },
  ),
  editSlotMaxDamage: (key: number, value: number) => createFSA(
    VoltageCalculatorActionTypes.SLOT_MAX_DAMAGE_EDIT, { key, value },
  ),
  editSlotRawAppl: (key: number, value: number) => createFSA(
    VoltageCalculatorActionTypes.SLOT_RAW_APPL_EDIT, { key, value },
  ),
  editSlotRawTech: (key: number, value: number) => createFSA(
    VoltageCalculatorActionTypes.SLOT_RAW_TECH_EDIT, { key, value },
  ),
  editSlotCritBase: (key: number, percent: number) => createFSA(
    VoltageCalculatorActionTypes.SLOT_CRIT_BASE_EDIT, { key, percent },
  ),
  editSlotAccessory: (key: number, idx: number, isSameAttr: boolean, id: number) => createFSA(
    VoltageCalculatorActionTypes.SLOT_ACCESSORY_EDIT, {
      key, idx, isSameAttr, id,
    },
  ),
  editSlotFormationApplBuff: (key: number, percent: number) => createFSA(
    VoltageCalculatorActionTypes.SLOT_FORMATION_APPL_BUFF_EDIT, { key, percent },
  ),
  editSlotFormationTechBuff: (key: number, percent: number) => createFSA(
    VoltageCalculatorActionTypes.SLOT_FORMATION_TECH_BUFF_EDIT, { key, percent },
  ),
  editSlotGuestApplBuff: (key: number, percent: number) => createFSA(
    VoltageCalculatorActionTypes.SLOT_GUEST_APPL_BUFF_EDIT, { key, percent },
  ),
  editSlotGuestTechBuff: (key: number, percent: number) => createFSA(
    VoltageCalculatorActionTypes.SLOT_GUEST_TECH_BUFF_EDIT, { key, percent },
  ),
  editSlotBaseApplBuff: (key: number, percent: number) => createFSA(
    VoltageCalculatorActionTypes.SLOT_BASE_APPL_BUFF_EDIT, { key, percent },
  ),
  editSlotBaseApplDebuff: (key: number, percent: number) => createFSA(
    VoltageCalculatorActionTypes.SLOT_BASE_APPL_DEBUFF_EDIT, { key, percent },
  ),
  editSlotBaseTechBuff: (key: number, percent: number) => createFSA(
    VoltageCalculatorActionTypes.SLOT_BASE_TECH_BUFF_EDIT, { key, percent },
  ),
  editSlotBaseTechDebuff: (key: number, percent: number) => createFSA(
    VoltageCalculatorActionTypes.SLOT_BASE_TECH_DEBUFF_EDIT, { key, percent },
  ),
  editSlotApplBuff: (key: number, percent: number) => createFSA(
    VoltageCalculatorActionTypes.SLOT_APPL_BUFF_EDIT, { key, percent },
  ),
  editSlotApplDebuff: (key: number, percent: number) => createFSA(
    VoltageCalculatorActionTypes.SLOT_APPL_DEBUFF_EDIT, { key, percent },
  ),
  editSlotTechBuff: (key: number, percent: number) => createFSA(
    VoltageCalculatorActionTypes.SLOT_TECH_BUFF_EDIT, { key, percent },
  ),
  editSlotTechDebuff: (key: number, percent: number) => createFSA(
    VoltageCalculatorActionTypes.SLOT_TECH_DEBUFF_EDIT, { key, percent },
  ),
  editSlotJudgementFactor: (key: number, value: number) => createFSA(
    VoltageCalculatorActionTypes.SLOT_JUDGEMENT_FACTOR_EDIT, { key, value },
  ),
  editSlotComboFactor: (key: number, value: number) => createFSA(
    VoltageCalculatorActionTypes.SLOT_COMBO_FACTOR_EDIT, { key, value },
  ),
  editSlotVoltageBuff: (key: number, percent: number) => createFSA(
    VoltageCalculatorActionTypes.SLOT_VOLTAGE_BUFF_EDIT, { key, percent },
  ),
  toggleSlotIsSP: (key: number) => createFSA(
    VoltageCalculatorActionTypes.SLOT_IS_SP_TOGGLE, { key },
  ),
  toggleSlotIsAC: (key: number) => createFSA(
    VoltageCalculatorActionTypes.SLOT_IS_AC_TOGGLE, { key },
  ),
  editSlotSubunitVo: (key: number, factor: number) => createFSA(
    VoltageCalculatorActionTypes.SLOT_SUBUNIT_VO_EDIT, { key, factor },
  ),
  toggleSlotIsSameAttr: (key: number) => createFSA(
    VoltageCalculatorActionTypes.SLOT_IS_SAME_ATTR_TOGGLE, { key },
  ),
  editSlotStaminaFactor: (key: number, value: number) => createFSA(
    VoltageCalculatorActionTypes.SLOT_STAMINA_FACTOR_EDIT, { key, value },
  ),
  editSlotCritProbAdd: (key: number, percent: number) => createFSA(
    VoltageCalculatorActionTypes.SLOT_CRIT_PROB_ADD_EDIT, { key, percent },
  ),
  editSlotCritDamageAdd: (key: number, percent: number) => createFSA(
    VoltageCalculatorActionTypes.SLOT_CRIT_DAMAGE_ADD_EDIT, { key, percent },
  ),
  editSlotSameAttrBonus: (key: number, percent: number) => createFSA(
    VoltageCalculatorActionTypes.SLOT_SAME_ATTR_BONUS_EDIT, { key, percent },
  ),
  duplicateSlot: (key: number) => createFSA(
    VoltageCalculatorActionTypes.SLOT_DUPLICATE, { key },
  ),
  removeSlot: (key: number) => createFSA(
    VoltageCalculatorActionTypes.SLOT_REMOVE, { key },
  ),
};

export type VoltageCalculatorActions = TActions<typeof VoltageCalculatorActionCreators>;
