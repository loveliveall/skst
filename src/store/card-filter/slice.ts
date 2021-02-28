import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  ATTRIBUTE,
  RARITY, RARITYID,
  ROLE,
} from '@/data/cardMetadata';
import { MEMBER } from '@/data/memberMetadata';
import type { GachaType } from '@/data/gacha';

type CardFilterState = {
  member: { [memberId: number]: boolean, },
  attribute: { [attributeId: number]: boolean, },
  role: { [roleId: number]: boolean, },
  rarity: { [rarityId in RARITYID]: boolean; },
  uncap: number, // -1 means All
  outfitSeriesId: number, // -1 means All
  firstOut: {
    type: 'event',
  } | {
    type: 'gacha',
    gachaType: GachaType | null, // null means all
  } | null, // null means all
  activeCategory: {
    key: string,
    effectCategoryId: number,
  }[],
  activeTarget: {
    key: string,
    targetId: number,
  }[],
  passiveBlueCategory: {
    key: string,
    effectCategoryId: number,
  }[],
  passiveBlueTarget: {
    key: string,
    targetId: number,
  }[],
  passiveRedCategory: {
    key: string,
    effectCategoryId: number,
  }[],
  passiveRedTarget: {
    key: string,
    targetId: number,
  }[],
  passiveRedTrigger: {
    key: string,
    triggerId: number,
  }[],
};

const initialState: CardFilterState = {
  member: Object.keys(MEMBER).map(Number).reduce((acc, val) => ({
    ...acc,
    [val]: true,
  }), {}), // All true
  attribute: Object.keys(ATTRIBUTE).map(Number).reduce((acc, val) => ({
    ...acc,
    [val]: true,
  }), {}),
  role: Object.keys(ROLE).map(Number).reduce((acc, val) => ({
    ...acc,
    [val]: true,
  }), {}),
  rarity: Object.keys(RARITY).map(Number).reduce((acc, val) => ({
    ...acc,
    [val]: true,
  }), {} as CardFilterState['rarity']),
  uncap: 5,
  outfitSeriesId: -1,
  firstOut: null,
  activeCategory: [],
  activeTarget: [],
  passiveBlueCategory: [],
  passiveBlueTarget: [],
  passiveRedCategory: [],
  passiveRedTarget: [],
  passiveRedTrigger: [],
};

const cardFilterSlice = createSlice({
  name: 'card-filter',
  initialState,
  reducers: {
    setMemberFilter: {
      reducer: (state, action: PayloadAction<{ memberIds: number[], value: boolean, }>) => {
        action.payload.memberIds.forEach((id) => {
          if (id in state.member) state.member[id] = action.payload.value;
        });
      },
      prepare: (memberIds: number[], value: boolean) => ({
        payload: {
          memberIds,
          value,
        },
      }),
    },
    setAttributeFilter: {
      reducer: (state, action: PayloadAction<{ attributeIds: number[], value: boolean, }>) => {
        action.payload.attributeIds.forEach((id) => {
          if (id in state.attribute) state.attribute[id] = action.payload.value;
        });
      },
      prepare: (attributeIds: number[], value: boolean) => ({
        payload: {
          attributeIds,
          value,
        },
      }),
    },
    setRoleFilter: {
      reducer: (state, action: PayloadAction<{ roleIds: number[], value: boolean, }>) => {
        action.payload.roleIds.forEach((id) => {
          if (id in state.role) state.role[id] = action.payload.value;
        });
      },
      prepare: (roleIds: number[], value: boolean) => ({
        payload: {
          roleIds,
          value,
        },
      }),
    },
    setRarityFilter: {
      reducer: (state, action: PayloadAction<{ rarityId: RARITYID, value: boolean, }>) => {
        const { rarityId, value } = action.payload;
        if (rarityId in state.rarity) state.rarity[rarityId] = value;
      },
      prepare: (rarityId: RARITYID, value: boolean) => ({
        payload: {
          rarityId,
          value,
        },
      }),
    },
    setUncapFilter(state, action: PayloadAction<number>) {
      state.uncap = action.payload;
    },
    setOutfitSeriesFilter(state, action: PayloadAction<number>) {
      state.outfitSeriesId = action.payload;
    },
    setFirstOutFilter(state, action: PayloadAction<CardFilterState['firstOut']>) {
      state.firstOut = action.payload;
    },
    addActiveCategoryFilter(state) {
      state.activeCategory.push({
        key: `active-category-${Math.random()}`,
        effectCategoryId: 1, // Default value
      });
    },
    changeActiveCategoryFilter: {
      reducer: (state, action: PayloadAction<{ key: string, id: number, }>) => {
        const targetIdx = state.activeCategory.findIndex((v) => v.key === action.payload.key);
        if (targetIdx >= 0) {
          state.activeCategory[targetIdx] = {
            key: action.payload.key,
            effectCategoryId: action.payload.id,
          };
        }
      },
      prepare: (key: string, id: number) => ({
        payload: {
          key,
          id,
        },
      }),
    },
    removeActiveCategoryFilter(state, action: PayloadAction<string>) {
      const targetIdx = state.activeCategory.findIndex((v) => v.key === action.payload);
      if (targetIdx >= 0) {
        state.activeCategory.splice(targetIdx, 1);
      }
    },
    addActiveTargetFilter(state) {
      state.activeTarget.push({
        key: `active-target-${Math.random()}`,
        targetId: 1, // Default value
      });
    },
    changeActiveTargetFilter: {
      reducer: (state, action: PayloadAction<{ key: string, id: number, }>) => {
        const targetIdx = state.activeTarget.findIndex((v) => v.key === action.payload.key);
        if (targetIdx >= 0) {
          state.activeTarget[targetIdx] = {
            key: action.payload.key,
            targetId: action.payload.id,
          };
        }
      },
      prepare: (key: string, id: number) => ({
        payload: {
          key,
          id,
        },
      }),
    },
    removeActiveTargetFilter(state, action: PayloadAction<string>) {
      const targetIdx = state.activeTarget.findIndex((v) => v.key === action.payload);
      if (targetIdx >= 0) {
        state.activeTarget.splice(targetIdx, 1);
      }
    },
    addPassiveBlueCategoryFilter(state) {
      state.passiveBlueCategory.push({
        key: `passive-blue-category-${Math.random()}`,
        effectCategoryId: 2001, // Default value
      });
    },
    changePassiveBlueCategoryFilter: {
      reducer: (state, action: PayloadAction<{ key: string, id: number, }>) => {
        const targetIdx = state.passiveBlueCategory.findIndex((v) => v.key === action.payload.key);
        if (targetIdx >= 0) {
          state.passiveBlueCategory[targetIdx] = {
            key: action.payload.key,
            effectCategoryId: action.payload.id,
          };
        }
      },
      prepare: (key: string, id: number) => ({
        payload: {
          key,
          id,
        },
      }),
    },
    removePassiveBlueCategoryFilter(state, action: PayloadAction<string>) {
      const targetIdx = state.passiveBlueCategory.findIndex((v) => v.key === action.payload);
      if (targetIdx >= 0) {
        state.passiveBlueCategory.splice(targetIdx, 1);
      }
    },
    addPassiveBlueTargetFilter(state) {
      state.passiveBlueTarget.push({
        key: `passive-blue-target-${Math.random()}`,
        targetId: 1, // Default value
      });
    },
    changePassiveBlueTargetFilter: {
      reducer: (state, action: PayloadAction<{ key: string, id: number, }>) => {
        const targetIdx = state.passiveBlueTarget.findIndex((v) => v.key === action.payload.key);
        if (targetIdx >= 0) {
          state.passiveBlueTarget[targetIdx] = {
            key: action.payload.key,
            targetId: action.payload.id,
          };
        }
      },
      prepare: (key: string, id: number) => ({
        payload: {
          key,
          id,
        },
      }),
    },
    removePassiveBlueTargetFilter(state, action: PayloadAction<string>) {
      const targetIdx = state.passiveBlueTarget.findIndex((v) => v.key === action.payload);
      if (targetIdx >= 0) {
        state.passiveBlueTarget.splice(targetIdx, 1);
      }
    },
    addPassiveRedCategoryFilter(state) {
      state.passiveRedCategory.push({
        key: `passive-red-category-${Math.random()}`,
        effectCategoryId: 1, // Default value
      });
    },
    changePassiveRedCategoryFilter: {
      reducer: (state, action: PayloadAction<{ key: string, id: number, }>) => {
        const targetIdx = state.passiveRedCategory.findIndex((v) => v.key === action.payload.key);
        if (targetIdx >= 0) {
          state.passiveRedCategory[targetIdx] = {
            key: action.payload.key,
            effectCategoryId: action.payload.id,
          };
        }
      },
      prepare: (key: string, id: number) => ({
        payload: {
          key,
          id,
        },
      }),
    },
    removePassiveRedCategoryFilter(state, action: PayloadAction<string>) {
      const targetIdx = state.passiveRedCategory.findIndex((v) => v.key === action.payload);
      if (targetIdx >= 0) {
        state.passiveRedCategory.splice(targetIdx, 1);
      }
    },
    addPassiveRedTargetFilter(state) {
      state.passiveRedTarget.push({
        key: `passive-red-target-${Math.random()}`,
        targetId: 1, // Default value
      });
    },
    changePassiveRedTargetFilter: {
      reducer: (state, action: PayloadAction<{ key: string, id: number, }>) => {
        const targetIdx = state.passiveRedTarget.findIndex((v) => v.key === action.payload.key);
        if (targetIdx >= 0) {
          state.passiveRedTarget[targetIdx] = {
            key: action.payload.key,
            targetId: action.payload.id,
          };
        }
      },
      prepare: (key: string, id: number) => ({
        payload: {
          key,
          id,
        },
      }),
    },
    removePassiveRedTargetFilter(state, action: PayloadAction<string>) {
      const targetIdx = state.passiveRedTarget.findIndex((v) => v.key === action.payload);
      if (targetIdx >= 0) {
        state.passiveRedTarget.splice(targetIdx, 1);
      }
    },
    addPassiveRedTriggerFilter(state) {
      state.passiveRedTrigger.push({
        key: `passive-red-trigger-${Math.random()}`,
        triggerId: 2, // Default value
      });
    },
    changePassiveRedTriggerFilter: {
      reducer: (state, action: PayloadAction<{ key: string, id: number, }>) => {
        const targetIdx = state.passiveRedTrigger.findIndex((v) => v.key === action.payload.key);
        if (targetIdx >= 0) {
          state.passiveRedTrigger[targetIdx] = {
            key: action.payload.key,
            triggerId: action.payload.id,
          };
        }
      },
      prepare: (key: string, id: number) => ({
        payload: {
          key,
          id,
        },
      }),
    },
    removePassiveRedTriggerFilter(state, action: PayloadAction<string>) {
      const targetIdx = state.passiveRedTrigger.findIndex((v) => v.key === action.payload);
      if (targetIdx >= 0) {
        state.passiveRedTrigger.splice(targetIdx, 1);
      }
    },
    initializeFilter(state) {
      Object.keys(state).forEach((key) => {
        const k = key as keyof CardFilterState;
        // I am 100% sure with this mapping's type safeness, so ignore what ts complains about this line
        // @ts-ignore
        state[k] = initialState[k];
      });
    },
  },
});

export const {
  setMemberFilter,
  setAttributeFilter,
  setRoleFilter,
  setRarityFilter,
  setUncapFilter,
  setOutfitSeriesFilter,
  setFirstOutFilter,
  initializeFilter,
  addActiveCategoryFilter,
  changeActiveCategoryFilter,
  removeActiveCategoryFilter,
  addActiveTargetFilter,
  changeActiveTargetFilter,
  removeActiveTargetFilter,
  addPassiveBlueCategoryFilter,
  changePassiveBlueCategoryFilter,
  removePassiveBlueCategoryFilter,
  addPassiveBlueTargetFilter,
  changePassiveBlueTargetFilter,
  removePassiveBlueTargetFilter,
  addPassiveRedCategoryFilter,
  changePassiveRedCategoryFilter,
  removePassiveRedCategoryFilter,
  addPassiveRedTargetFilter,
  changePassiveRedTargetFilter,
  removePassiveRedTargetFilter,
  addPassiveRedTriggerFilter,
  changePassiveRedTriggerFilter,
  removePassiveRedTriggerFilter,
} = cardFilterSlice.actions;

export default cardFilterSlice.reducer;
