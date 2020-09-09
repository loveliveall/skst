import { VoltageCalculatorActionTypes, VoltageCalculatorActions } from './actions';

export type SlotSetting = {
  maxDamage: number,
  // Raw stats
  rawAppl: number,
  rawTech: number,
  critBasePercent: number,
  // Accessory
  accessories: {
    isSameAttr: boolean,
    id: number,
  }[], // 3 accessories
  // Formation passives
  formationApplPercents: number,
  formationTechPercents: number,
  // Guest passives
  guestApplPercents: number,
  guestTechPercents: number,
  // Gimmick effects (all %)
  baseApplBuff: number,
  baseApplDebuff: number,
  baseTechBuff: number,
  baseTechDebuff: number,
  applBuff: number,
  applDebuff: number,
  techBuff: number,
  techDebuff: number,
  // Other factors
  judgementFactor: number,
  comboFactor: number,
  voltageBuffPercent: number,
  isSP: boolean,
  isAC: boolean,
  subunitVoFactor: number,
  isSameAttr: boolean,
  staminaFactor: number,
  // Kizuna board
  critProbAddPercent: number,
  critDamageAddPercent: number,
  sameAttrBonusPercent: number,
};

const DEFAULT_SLOT_SETTING: SlotSetting = {
  maxDamage: 50000,
  rawAppl: 0,
  rawTech: 0,
  critBasePercent: 0,
  accessories: [
    { isSameAttr: false, id: 1 },
    { isSameAttr: false, id: 1 },
    { isSameAttr: false, id: 1 },
  ],
  formationApplPercents: 0,
  formationTechPercents: 0,
  guestApplPercents: 0,
  guestTechPercents: 0,
  baseApplBuff: 0,
  baseApplDebuff: 0,
  baseTechBuff: 0,
  baseTechDebuff: 0,
  applBuff: 0,
  applDebuff: 0,
  techBuff: 0,
  techDebuff: 0,
  judgementFactor: 1.0,
  comboFactor: 1.0,
  voltageBuffPercent: 0,
  isSP: false,
  isAC: false,
  subunitVoFactor: 1.0,
  isSameAttr: false,
  staminaFactor: 1.0,
  critDamageAddPercent: 0,
  critProbAddPercent: 0,
  sameAttrBonusPercent: 0,
};

interface VoltageCalculatorState {
  settings: ({
    key: number,
  } & SlotSetting)[],
}

const initialState: VoltageCalculatorState = {
  settings: [{
    key: new Date().getTime(),
    ...DEFAULT_SLOT_SETTING,
  }],
};

export default function voltageCalculatorReducer(
  state = initialState,
  action: VoltageCalculatorActions,
) {
  switch (action.type) {
    case VoltageCalculatorActionTypes.SLOT_ADD:
      return {
        ...state,
        settings: [
          ...state.settings,
          {
            key: action.payload.key,
            ...DEFAULT_SLOT_SETTING,
          },
        ],
      };
    case VoltageCalculatorActionTypes.SLOT_MAX_DAMAGE_EDIT:
      return {
        ...state,
        settings: state.settings.map((item) => {
          if (item.key !== action.payload.key) return item;
          return {
            ...item,
            maxDamage: action.payload.value,
          };
        }),
      };
    case VoltageCalculatorActionTypes.SLOT_RAW_APPL_EDIT:
      return {
        ...state,
        settings: state.settings.map((item) => {
          if (item.key !== action.payload.key) return item;
          return {
            ...item,
            rawAppl: action.payload.value,
          };
        }),
      };
    case VoltageCalculatorActionTypes.SLOT_RAW_TECH_EDIT:
      return {
        ...state,
        settings: state.settings.map((item) => {
          if (item.key !== action.payload.key) return item;
          return {
            ...item,
            rawTech: action.payload.value,
          };
        }),
      };
    case VoltageCalculatorActionTypes.SLOT_CRIT_BASE_EDIT:
      return {
        ...state,
        settings: state.settings.map((item) => {
          if (item.key !== action.payload.key) return item;
          return {
            ...item,
            critBasePercent: action.payload.percent,
          };
        }),
      };
    case VoltageCalculatorActionTypes.SLOT_ACCESSORY_EDIT:
      return {
        ...state,
        settings: state.settings.map((item) => {
          if (item.key !== action.payload.key) return item;
          return {
            ...item,
            accessories: item.accessories.map((v, idx) => {
              if (idx !== action.payload.idx) return v;
              return {
                isSameAttr: action.payload.isSameAttr,
                id: action.payload.id,
              };
            }),
          };
        }),
      };
    case VoltageCalculatorActionTypes.SLOT_FORMATION_APPL_BUFF_EDIT:
      return {
        ...state,
        settings: state.settings.map((item) => {
          if (item.key !== action.payload.key) return item;
          return {
            ...item,
            formationApplPercents: action.payload.percent,
          };
        }),
      };
    case VoltageCalculatorActionTypes.SLOT_FORMATION_TECH_BUFF_EDIT:
      return {
        ...state,
        settings: state.settings.map((item) => {
          if (item.key !== action.payload.key) return item;
          return {
            ...item,
            formationTechPercents: action.payload.percent,
          };
        }),
      };
    case VoltageCalculatorActionTypes.SLOT_GUEST_APPL_BUFF_EDIT:
      return {
        ...state,
        settings: state.settings.map((item) => {
          if (item.key !== action.payload.key) return item;
          return {
            ...item,
            guestApplPercents: action.payload.percent,
          };
        }),
      };
    case VoltageCalculatorActionTypes.SLOT_GUEST_TECH_BUFF_EDIT:
      return {
        ...state,
        settings: state.settings.map((item) => {
          if (item.key !== action.payload.key) return item;
          return {
            ...item,
            guestTechPercents: action.payload.percent,
          };
        }),
      };
    case VoltageCalculatorActionTypes.SLOT_BASE_APPL_BUFF_EDIT:
      return {
        ...state,
        settings: state.settings.map((item) => {
          if (item.key !== action.payload.key) return item;
          return {
            ...item,
            baseApplBuff: action.payload.percent,
          };
        }),
      };
    case VoltageCalculatorActionTypes.SLOT_BASE_APPL_DEBUFF_EDIT:
      return {
        ...state,
        settings: state.settings.map((item) => {
          if (item.key !== action.payload.key) return item;
          return {
            ...item,
            baseApplDebuff: action.payload.percent,
          };
        }),
      };
    case VoltageCalculatorActionTypes.SLOT_BASE_TECH_BUFF_EDIT:
      return {
        ...state,
        settings: state.settings.map((item) => {
          if (item.key !== action.payload.key) return item;
          return {
            ...item,
            baseTechBuff: action.payload.percent,
          };
        }),
      };
    case VoltageCalculatorActionTypes.SLOT_BASE_TECH_DEBUFF_EDIT:
      return {
        ...state,
        settings: state.settings.map((item) => {
          if (item.key !== action.payload.key) return item;
          return {
            ...item,
            baseTechDebuff: action.payload.percent,
          };
        }),
      };
    case VoltageCalculatorActionTypes.SLOT_APPL_BUFF_EDIT:
      return {
        ...state,
        settings: state.settings.map((item) => {
          if (item.key !== action.payload.key) return item;
          return {
            ...item,
            applBuff: action.payload.percent,
          };
        }),
      };
    case VoltageCalculatorActionTypes.SLOT_APPL_DEBUFF_EDIT:
      return {
        ...state,
        settings: state.settings.map((item) => {
          if (item.key !== action.payload.key) return item;
          return {
            ...item,
            applDebuff: action.payload.percent,
          };
        }),
      };
    case VoltageCalculatorActionTypes.SLOT_TECH_BUFF_EDIT:
      return {
        ...state,
        settings: state.settings.map((item) => {
          if (item.key !== action.payload.key) return item;
          return {
            ...item,
            techBuff: action.payload.percent,
          };
        }),
      };
    case VoltageCalculatorActionTypes.SLOT_TECH_DEBUFF_EDIT:
      return {
        ...state,
        settings: state.settings.map((item) => {
          if (item.key !== action.payload.key) return item;
          return {
            ...item,
            techDebuff: action.payload.percent,
          };
        }),
      };
    case VoltageCalculatorActionTypes.SLOT_JUDGEMENT_FACTOR_EDIT:
      return {
        ...state,
        settings: state.settings.map((item) => {
          if (item.key !== action.payload.key) return item;
          return {
            ...item,
            judgementFactor: action.payload.value,
          };
        }),
      };
    case VoltageCalculatorActionTypes.SLOT_COMBO_FACTOR_EDIT:
      return {
        ...state,
        settings: state.settings.map((item) => {
          if (item.key !== action.payload.key) return item;
          return {
            ...item,
            comboFactor: action.payload.value,
          };
        }),
      };
    case VoltageCalculatorActionTypes.SLOT_VOLTAGE_BUFF_EDIT:
      return {
        ...state,
        settings: state.settings.map((item) => {
          if (item.key !== action.payload.key) return item;
          return {
            ...item,
            voltageBuffPercent: action.payload.percent,
          };
        }),
      };
    case VoltageCalculatorActionTypes.SLOT_IS_SP_TOGGLE:
      return {
        ...state,
        settings: state.settings.map((item) => {
          if (item.key !== action.payload.key) return item;
          return {
            ...item,
            isSP: !item.isSP,
          };
        }),
      };
    case VoltageCalculatorActionTypes.SLOT_IS_AC_TOGGLE:
      return {
        ...state,
        settings: state.settings.map((item) => {
          if (item.key !== action.payload.key) return item;
          return {
            ...item,
            isAC: !item.isAC,
          };
        }),
      };
    case VoltageCalculatorActionTypes.SLOT_SUBUNIT_VO_EDIT:
      return {
        ...state,
        settings: state.settings.map((item) => {
          if (item.key !== action.payload.key) return item;
          return {
            ...item,
            subunitVoFactor: action.payload.factor,
          };
        }),
      };
    case VoltageCalculatorActionTypes.SLOT_IS_SAME_ATTR_TOGGLE:
      return {
        ...state,
        settings: state.settings.map((item) => {
          if (item.key !== action.payload.key) return item;
          return {
            ...item,
            isSameAttr: !item.isSameAttr,
          };
        }),
      };
    case VoltageCalculatorActionTypes.SLOT_STAMINA_FACTOR_EDIT:
      return {
        ...state,
        settings: state.settings.map((item) => {
          if (item.key !== action.payload.key) return item;
          return {
            ...item,
            staminaFactor: action.payload.value,
          };
        }),
      };
    case VoltageCalculatorActionTypes.SLOT_CRIT_PROB_ADD_EDIT:
      return {
        ...state,
        settings: state.settings.map((item) => {
          if (item.key !== action.payload.key) return item;
          return {
            ...item,
            critProbAddPercent: action.payload.percent,
          };
        }),
      };
    case VoltageCalculatorActionTypes.SLOT_CRIT_DAMAGE_ADD_EDIT:
      return {
        ...state,
        settings: state.settings.map((item) => {
          if (item.key !== action.payload.key) return item;
          return {
            ...item,
            critDamageAddPercent: action.payload.percent,
          };
        }),
      };
    case VoltageCalculatorActionTypes.SLOT_SAME_ATTR_BONUS_EDIT:
      return {
        ...state,
        settings: state.settings.map((item) => {
          if (item.key !== action.payload.key) return item;
          return {
            ...item,
            sameAttrBonusPercent: action.payload.percent,
          };
        }),
      };
    case VoltageCalculatorActionTypes.SLOT_DUPLICATE: {
      const dupSlot = state.settings.find((item) => item.key === action.payload.key);
      if (dupSlot === undefined) throw Error('Duplication MUST have original');
      return {
        ...state,
        settings: [
          ...state.settings,
          {
            ...dupSlot,
            key: new Date().getTime(),
          },
        ],
      };
    }
    case VoltageCalculatorActionTypes.SLOT_REMOVE:
      return {
        ...state,
        settings: state.settings.filter((item) => item.key !== action.payload.key),
      };
    default:
      return state;
  }
}
