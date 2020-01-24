import { SKILL_EFFECT_TYPE, SKILL_EFFECT_CATEGORY, SKILL_EFFECT_STRING } from './skillEffectType';
import { SKILL_TARGET } from './skillTarget';
import { SKILL_TRIGGER_TYPE } from './skillTriggerType';
import { SKILL_CONDITION } from './skillCondition';

type SkillDetail = {
  readonly triggerProb: number,
  readonly skillTargetId: number,
  readonly effectTypeId: number,
  readonly effectValue: number[],
  readonly finishType: 'instant' | 'duration' | 'spFire' | 'never' | 'tillEnd' | 'tillACEnd',
  readonly finishValue: number,
} & (
  {
    readonly timing: 'onTrigger',
    readonly triggerTypeId: number,
    readonly triggerValue: number,
    readonly conditionId: number,
  } | {
    readonly timing: 'onAppeal',
  }
);

interface Skill {
  readonly [id: number]: {
    readonly maxLevel: number,
    readonly detail: SkillDetail,
  },
}

/* eslint-disable object-curly-newline, max-len */
export const SKILL: Skill = {
  100001: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 101401, effectValue: [200, 250, 300, 350, 400], finishType: 'instant', finishValue: 0, timing: 'onAppeal' } },
  100002: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 1, effectTypeId: 100901, effectValue: [300, 330, 360, 390, 420], finishType: 'duration', finishValue: 10, timing: 'onAppeal' } },
  100003: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 101101, effectValue: [2000, 2050, 2100, 2150, 2200], finishType: 'spFire', finishValue: 1, timing: 'onAppeal' } },
  100004: { maxLevel: 5, detail: { triggerProb: 3300, skillTargetId: 0, effectTypeId: 100401, effectValue: [1000, 1100, 1200, 1300, 1400], finishType: 'duration', finishValue: 10, timing: 'onAppeal' } },
  100005: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 101001, effectValue: [110, 120, 130, 140, 150], finishType: 'instant', finishValue: 0, timing: 'onAppeal' } },
  100006: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 1, effectTypeId: 100201, effectValue: [300, 330, 360, 390, 420], finishType: 'duration', finishValue: 10, timing: 'onAppeal' } },
  100007: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 101402, effectValue: [2500, 2800, 3100, 3400, 3700], finishType: 'instant', finishValue: 0, timing: 'onAppeal' } },
  100008: { maxLevel: 5, detail: { triggerProb: 3300, skillTargetId: 0, effectTypeId: 100501, effectValue: [2000, 2300, 2600, 2900, 3200], finishType: 'instant', finishValue: 0, timing: 'onAppeal' } },
  100009: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 100701, effectValue: [100, 150, 200, 250, 300], finishType: 'instant', finishValue: 0, timing: 'onAppeal' } },
  100010: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 1, effectTypeId: 100301, effectValue: [300, 330, 360, 390, 420], finishType: 'duration', finishValue: 10, timing: 'onAppeal' } },
  100011: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 100702, effectValue: [1500, 1800, 2100, 2400, 2700], finishType: 'instant', finishValue: 0, timing: 'onAppeal' } },
  100012: { maxLevel: 5, detail: { triggerProb: 3300, skillTargetId: 1, effectTypeId: 101301, effectValue: [500, 530, 560, 590, 620], finishType: 'duration', finishValue: 5, timing: 'onAppeal' } },
  100013: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 5, effectTypeId: 100801, effectValue: [220, 240, 260, 280, 300], finishType: 'duration', finishValue: 5, timing: 'onAppeal' } },
  100014: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 1, effectTypeId: 101302, effectValue: [110, 120, 130, 140, 150], finishType: 'duration', finishValue: 5, timing: 'onAppeal' } },
  100015: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 100501, effectValue: [2000, 2300, 2600, 2900, 3200], finishType: 'instant', finishValue: 0, timing: 'onAppeal' } },
  100016: { maxLevel: 5, detail: { triggerProb: 3300, skillTargetId: 1, effectTypeId: 100901, effectValue: [500, 530, 560, 590, 620], finishType: 'duration', finishValue: 10, timing: 'onAppeal' } },
  100017: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 5, effectTypeId: 100102, effectValue: [40, 50, 60, 70, 80], finishType: 'duration', finishValue: 5, timing: 'onAppeal' } },
  100018: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 101401, effectValue: [200, 250, 300, 350, 400], finishType: 'instant', finishValue: 0, timing: 'onAppeal' } },
  100019: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 5, effectTypeId: 100801, effectValue: [320, 340, 360, 380, 400], finishType: 'duration', finishValue: 5, timing: 'onAppeal' } },
  100020: { maxLevel: 5, detail: { triggerProb: 3300, skillTargetId: 1, effectTypeId: 100801, effectValue: [320, 340, 360, 380, 400], finishType: 'duration', finishValue: 5, timing: 'onAppeal' } },
  100021: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 101102, effectValue: [100, 150, 200, 250, 300], finishType: 'spFire', finishValue: 1, timing: 'onAppeal' } },
  100022: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 100502, effectValue: [200, 250, 300, 350, 400], finishType: 'instant', finishValue: 0, timing: 'onAppeal' } },
  100023: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 101002, effectValue: [500, 550, 600, 650, 700], finishType: 'instant', finishValue: 0, timing: 'onAppeal' } },
  100024: { maxLevel: 5, detail: { triggerProb: 3300, skillTargetId: 1, effectTypeId: 100101, effectValue: [500, 530, 560, 590, 620], finishType: 'duration', finishValue: 5, timing: 'onAppeal' } },
  100025: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 100502, effectValue: [150, 200, 250, 300, 350], finishType: 'instant', finishValue: 0, timing: 'onAppeal' } },
  100026: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 101102, effectValue: [200, 250, 300, 350, 400], finishType: 'spFire', finishValue: 1, timing: 'onAppeal' } },
  100027: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 1, effectTypeId: 100101, effectValue: [300, 330, 360, 390, 420], finishType: 'duration', finishValue: 5, timing: 'onAppeal' } },
  100028: { maxLevel: 5, detail: { triggerProb: 3300, skillTargetId: 1, effectTypeId: 100801, effectValue: [320, 340, 360, 380, 400], finishType: 'duration', finishValue: 5, timing: 'onAppeal' } },
  100029: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 100401, effectValue: [300, 400, 500, 600, 700], finishType: 'duration', finishValue: 5, timing: 'onAppeal' } },
  100030: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 1, effectTypeId: 100801, effectValue: [120, 140, 160, 180, 200], finishType: 'duration', finishValue: 5, timing: 'onAppeal' } },
  100031: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 101402, effectValue: [2500, 2800, 3100, 3400, 3700], finishType: 'instant', finishValue: 0, timing: 'onAppeal' } },
  100032: { maxLevel: 5, detail: { triggerProb: 3300, skillTargetId: 0, effectTypeId: 100702, effectValue: [2000, 2300, 2600, 2900, 3200], finishType: 'instant', finishValue: 0, timing: 'onAppeal' } },
  100033: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 5, effectTypeId: 100102, effectValue: [80, 90, 100, 110, 120], finishType: 'duration', finishValue: 5, timing: 'onAppeal' } },
  100034: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 101001, effectValue: [160, 170, 180, 190, 200], finishType: 'instant', finishValue: 0, timing: 'onAppeal' } },
  100035: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 100401, effectValue: [700, 800, 900, 1000, 1100], finishType: 'duration', finishValue: 10, timing: 'onAppeal' } },
  100036: { maxLevel: 5, detail: { triggerProb: 3300, skillTargetId: 0, effectTypeId: 101402, effectValue: [2500, 2800, 3100, 3400, 3700], finishType: 'instant', finishValue: 0, timing: 'onAppeal' } },
  100037: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 101102, effectValue: [100, 150, 200, 250, 300], finishType: 'spFire', finishValue: 1, timing: 'onAppeal' } },
  100038: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 100701, effectValue: [250, 300, 350, 400, 450], finishType: 'instant', finishValue: 0, timing: 'onAppeal' } },
  100039: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 4, effectTypeId: 101301, effectValue: [500, 530, 560, 590, 620], finishType: 'duration', finishValue: 5, timing: 'onAppeal' } },
  100040: { maxLevel: 5, detail: { triggerProb: 3300, skillTargetId: 5, effectTypeId: 100801, effectValue: [420, 440, 460, 480, 500], finishType: 'duration', finishValue: 5, timing: 'onAppeal' } },
  100041: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 5, effectTypeId: 100801, effectValue: [220, 240, 260, 280, 300], finishType: 'duration', finishValue: 5, timing: 'onAppeal' } },
  100042: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 1, effectTypeId: 100102, effectValue: [60, 70, 80, 90, 100], finishType: 'duration', finishValue: 5, timing: 'onAppeal' } },
  100043: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 101002, effectValue: [500, 550, 600, 650, 700], finishType: 'instant', finishValue: 0, timing: 'onAppeal' } },
  100044: { maxLevel: 5, detail: { triggerProb: 3300, skillTargetId: 0, effectTypeId: 100401, effectValue: [1000, 1100, 1200, 1300, 1400], finishType: 'duration', finishValue: 10, timing: 'onAppeal' } },
  100045: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 5, effectTypeId: 100201, effectValue: [300, 350, 400, 450, 500], finishType: 'duration', finishValue: 5, timing: 'onAppeal' } },
  100046: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 100401, effectValue: [400, 500, 600, 700, 800], finishType: 'duration', finishValue: 5, timing: 'onAppeal' } },
  100047: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 1, effectTypeId: 100901, effectValue: [300, 330, 360, 390, 420], finishType: 'duration', finishValue: 5, timing: 'onAppeal' } },
  100048: { maxLevel: 5, detail: { triggerProb: 3300, skillTargetId: 5, effectTypeId: 100101, effectValue: [700, 750, 800, 850, 900], finishType: 'duration', finishValue: 5, timing: 'onAppeal' } },
  100049: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 101401, effectValue: [200, 250, 300, 350, 400], finishType: 'instant', finishValue: 0, timing: 'onAppeal' } },
  100050: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 1, effectTypeId: 100901, effectValue: [300, 330, 360, 390, 420], finishType: 'duration', finishValue: 10, timing: 'onAppeal' } },
  100051: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 100501, effectValue: [2000, 2300, 2600, 2900, 3200], finishType: 'instant', finishValue: 0, timing: 'onAppeal' } },
  100052: { maxLevel: 5, detail: { triggerProb: 3300, skillTargetId: 0, effectTypeId: 101101, effectValue: [3000, 3050, 3100, 3150, 3200], finishType: 'spFire', finishValue: 1, timing: 'onAppeal' } },
  100053: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 5, effectTypeId: 101302, effectValue: [80, 90, 100, 110, 120], finishType: 'duration', finishValue: 5, timing: 'onAppeal' } },
  100054: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 1, effectTypeId: 100801, effectValue: [120, 140, 160, 180, 200], finishType: 'duration', finishValue: 5, timing: 'onAppeal' } },
  100055: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 101101, effectValue: [2000, 2050, 2100, 2150, 2200], finishType: 'spFire', finishValue: 1, timing: 'onAppeal' } },
  100056: { maxLevel: 5, detail: { triggerProb: 3300, skillTargetId: 0, effectTypeId: 100501, effectValue: [2000, 2300, 2600, 2900, 3200], finishType: 'instant', finishValue: 0, timing: 'onAppeal' } },
  100057: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 5, effectTypeId: 100102, effectValue: [80, 90, 100, 110, 120], finishType: 'duration', finishValue: 5, timing: 'onAppeal' } },
  100058: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 100701, effectValue: [250, 300, 350, 400, 450], finishType: 'instant', finishValue: 0, timing: 'onAppeal' } },
  100059: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 5, effectTypeId: 100201, effectValue: [500, 550, 600, 650, 700], finishType: 'duration', finishValue: 10, timing: 'onAppeal' } },
  100060: { maxLevel: 5, detail: { triggerProb: 3300, skillTargetId: 0, effectTypeId: 101002, effectValue: [700, 750, 800, 850, 900], finishType: 'instant', finishValue: 0, timing: 'onAppeal' } },
  100061: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 100701, effectValue: [200, 250, 300, 350, 400], finishType: 'instant', finishValue: 0, timing: 'onAppeal' } },
  100062: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 1, effectTypeId: 101302, effectValue: [80, 90, 100, 110, 120], finishType: 'duration', finishValue: 5, timing: 'onAppeal' } },
  100063: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 5, effectTypeId: 100301, effectValue: [500, 550, 600, 650, 700], finishType: 'duration', finishValue: 5, timing: 'onAppeal' } },
  100064: { maxLevel: 5, detail: { triggerProb: 3300, skillTargetId: 0, effectTypeId: 101101, effectValue: [3000, 3050, 3100, 3150, 3200], finishType: 'spFire', finishValue: 1, timing: 'onAppeal' } },
  100065: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 101401, effectValue: [100, 150, 200, 250, 300], finishType: 'instant', finishValue: 0, timing: 'onAppeal' } },
  100066: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 100502, effectValue: [200, 250, 300, 350, 400], finishType: 'instant', finishValue: 0, timing: 'onAppeal' } },
  100067: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 3, effectTypeId: 100801, effectValue: [320, 340, 360, 380, 400], finishType: 'duration', finishValue: 5, timing: 'onAppeal' } },
  100068: { maxLevel: 5, detail: { triggerProb: 3300, skillTargetId: 0, effectTypeId: 101402, effectValue: [2500, 2800, 3100, 3400, 3700], finishType: 'instant', finishValue: 0, timing: 'onAppeal' } },
  100069: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 100502, effectValue: [150, 200, 250, 300, 350], finishType: 'instant', finishValue: 0, timing: 'onAppeal' } },
  100070: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 101102, effectValue: [110, 120, 130, 140, 150], finishType: 'spFire', finishValue: 1, timing: 'onAppeal' } },
  100071: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 101402, effectValue: [2500, 2800, 3100, 3400, 3700], finishType: 'instant', finishValue: 0, timing: 'onAppeal' } },
  100072: { maxLevel: 5, detail: { triggerProb: 3300, skillTargetId: 0, effectTypeId: 100702, effectValue: [2000, 2300, 2600, 2900, 3200], finishType: 'instant', finishValue: 0, timing: 'onAppeal' } },
  100073: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 101001, effectValue: [110, 120, 130, 140, 150], finishType: 'instant', finishValue: 0, timing: 'onAppeal' } },
  100074: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 1, effectTypeId: 100801, effectValue: [120, 140, 160, 180, 200], finishType: 'duration', finishValue: 5, timing: 'onAppeal' } },
  100075: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 100501, effectValue: [2000, 2300, 2600, 2900, 3200], finishType: 'instant', finishValue: 0, timing: 'onAppeal' } },
  100076: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 5, effectTypeId: 100102, effectValue: [80, 90, 100, 110, 120], finishType: 'duration', finishValue: 5, timing: 'onAppeal' } },
  100077: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 100701, effectValue: [250, 300, 350, 400, 450], finishType: 'instant', finishValue: 0, timing: 'onAppeal' } },
  100078: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 101402, effectValue: [2500, 2800, 3100, 3400, 3700], finishType: 'instant', finishValue: 0, timing: 'onAppeal' } },
  100079: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 5, effectTypeId: 100801, effectValue: [220, 240, 260, 280, 300], finishType: 'duration', finishValue: 5, timing: 'onAppeal' } },
  100080: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 1, effectTypeId: 101302, effectValue: [110, 120, 130, 140, 150], finishType: 'duration', finishValue: 5, timing: 'onAppeal' } },
  100081: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 101002, effectValue: [500, 550, 600, 650, 700], finishType: 'instant', finishValue: 0, timing: 'onAppeal' } },
  100155: { maxLevel: 5, detail: { triggerProb: 3300, skillTargetId: 7, effectTypeId: 100101, effectValue: [600, 630, 660, 690, 720], finishType: 'duration', finishValue: 5, timing: 'onAppeal' } },
  100156: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 5, effectTypeId: 100101, effectValue: [500, 550, 600, 650, 700], finishType: 'duration', finishValue: 5, timing: 'onAppeal' } },
  100157: { maxLevel: 5, detail: { triggerProb: 3300, skillTargetId: 1, effectTypeId: 100901, effectValue: [500, 530, 560, 590, 620], finishType: 'duration', finishValue: 10, timing: 'onAppeal' } },
  100158: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 101101, effectValue: [2000, 2050, 2100, 2150, 2200], finishType: 'spFire', finishValue: 1, timing: 'onAppeal' } },
  100159: { maxLevel: 5, detail: { triggerProb: 3300, skillTargetId: 5, effectTypeId: 101301, effectValue: [380, 410, 430, 470, 500], finishType: 'duration', finishValue: 5, timing: 'onAppeal' } },
  100160: { maxLevel: 5, detail: { triggerProb: 3300, skillTargetId: 0, effectTypeId: 100501, effectValue: [2000, 2300, 2600, 2900, 3200], finishType: 'instant', finishValue: 0, timing: 'onAppeal' } },
  100161: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 3, effectTypeId: 100201, effectValue: [800, 850, 900, 950, 1000], finishType: 'duration', finishValue: 3, timing: 'onAppeal' } },
  100162: { maxLevel: 5, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 100501, effectValue: [2000, 2300, 2600, 2900, 3200], finishType: 'instant', finishValue: 0, timing: 'onAppeal' } },

  200001: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 3, effectTypeId: 200301, effectValue: [100, 130, 160, 190, 220], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200002: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 6, effectTypeId: 200301, effectValue: [150, 180, 210, 240, 270], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200003: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 3, effectTypeId: 200301, effectValue: [200, 230, 260, 290, 320], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200004: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 2, effectTypeId: 200201, effectValue: [400, 430, 460, 490, 520], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200005: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 5, effectTypeId: 200201, effectValue: [200, 250, 300, 350, 400], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200006: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 6, effectTypeId: 200201, effectValue: [150, 180, 210, 240, 270], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200007: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 4, effectTypeId: 200101, effectValue: [200, 230, 260, 290, 320], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200008: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 5, effectTypeId: 200201, effectValue: [500, 550, 600, 650, 700], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200009: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 3, effectTypeId: 200201, effectValue: [100, 130, 160, 190, 220], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200010: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 6, effectTypeId: 200201, effectValue: [150, 180, 210, 240, 270], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200011: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 3, effectTypeId: 200201, effectValue: [200, 230, 260, 290, 320], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200012: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 1, effectTypeId: 200101, effectValue: [300, 330, 360, 390, 420], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200013: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 3, effectTypeId: 200301, effectValue: [100, 130, 160, 190, 220], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200014: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 8, effectTypeId: 200301, effectValue: [200, 230, 260, 290, 320], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200015: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 9, effectTypeId: 200201, effectValue: [500, 550, 600, 650, 700], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200016: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 3, effectTypeId: 200301, effectValue: [400, 430, 460, 490, 520], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200017: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 3, effectTypeId: 200101, effectValue: [100, 130, 160, 190, 220], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200018: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 8, effectTypeId: 200101, effectValue: [200, 230, 260, 290, 320], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200019: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 9, effectTypeId: 200301, effectValue: [500, 550, 600, 650, 700], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200020: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 5, effectTypeId: 200301, effectValue: [500, 550, 600, 650, 700], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200021: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 5, effectTypeId: 200101, effectValue: [200, 250, 300, 350, 400], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200022: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 6, effectTypeId: 200101, effectValue: [150, 180, 210, 240, 270], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200023: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 4, effectTypeId: 200301, effectValue: [300, 330, 360, 390, 420], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200024: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 3, effectTypeId: 200101, effectValue: [400, 430, 460, 490, 520], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200025: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 5, effectTypeId: 200301, effectValue: [200, 250, 300, 350, 400], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200026: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 6, effectTypeId: 200301, effectValue: [150, 180, 210, 240, 270], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200027: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 3, effectTypeId: 200101, effectValue: [200, 230, 260, 290, 320], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200028: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 1, effectTypeId: 200301, effectValue: [300, 330, 360, 390, 420], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200029: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 5, effectTypeId: 200201, effectValue: [200, 250, 300, 350, 400], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200030: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 6, effectTypeId: 200201, effectValue: [150, 180, 210, 240, 270], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200031: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 9, effectTypeId: 200101, effectValue: [500, 550, 600, 650, 700], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200032: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 1, effectTypeId: 200201, effectValue: [300, 330, 360, 390, 420], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200033: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 3, effectTypeId: 200101, effectValue: [100, 130, 160, 190, 220], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200034: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 8, effectTypeId: 200101, effectValue: [200, 230, 260, 290, 320], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200035: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 4, effectTypeId: 200201, effectValue: [200, 230, 260, 290, 320], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200036: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 5, effectTypeId: 200101, effectValue: [500, 550, 600, 650, 700], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200037: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 3, effectTypeId: 200101, effectValue: [100, 130, 160, 190, 220], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200038: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 8, effectTypeId: 200101, effectValue: [200, 230, 260, 290, 320], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200039: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 4, effectTypeId: 200101, effectValue: [300, 330, 360, 390, 420], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200040: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 2, effectTypeId: 200201, effectValue: [400, 430, 460, 490, 520], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200041: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 3, effectTypeId: 200301, effectValue: [100, 130, 160, 190, 220], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200042: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 6, effectTypeId: 200301, effectValue: [150, 180, 210, 240, 270], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200043: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 9, effectTypeId: 200301, effectValue: [500, 550, 600, 650, 700], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200044: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 1, effectTypeId: 200201, effectValue: [300, 330, 360, 390, 420], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200045: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 4, effectTypeId: 200201, effectValue: [100, 130, 160, 190, 220], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200046: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 6, effectTypeId: 200201, effectValue: [150, 180, 210, 240, 270], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200047: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 5, effectTypeId: 200201, effectValue: [300, 350, 400, 450, 500], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200048: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 1, effectTypeId: 200101, effectValue: [300, 330, 360, 390, 420], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200049: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 4, effectTypeId: 200301, effectValue: [150, 180, 210, 240, 270], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200050: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 8, effectTypeId: 200301, effectValue: [200, 230, 260, 290, 320], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200051: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 9, effectTypeId: 200201, effectValue: [500, 550, 600, 650, 700], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200052: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 3, effectTypeId: 200301, effectValue: [400, 430, 460, 490, 520], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200053: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 3, effectTypeId: 200101, effectValue: [100, 130, 160, 190, 220], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200054: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 6, effectTypeId: 200101, effectValue: [150, 180, 210, 240, 270], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200055: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 4, effectTypeId: 200301, effectValue: [250, 280, 310, 340, 370], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200056: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 5, effectTypeId: 200201, effectValue: [500, 550, 600, 650, 700], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200057: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 4, effectTypeId: 200101, effectValue: [150, 180, 210, 240, 270], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200058: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 8, effectTypeId: 200101, effectValue: [200, 230, 260, 290, 320], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200059: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 5, effectTypeId: 200101, effectValue: [300, 350, 400, 450, 500], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200060: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 5, effectTypeId: 200301, effectValue: [500, 550, 600, 650, 700], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200061: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 3, effectTypeId: 200201, effectValue: [100, 130, 160, 190, 220], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200062: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 6, effectTypeId: 200201, effectValue: [150, 180, 210, 240, 270], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200063: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 9, effectTypeId: 200201, effectValue: [500, 550, 600, 650, 700], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200064: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 1, effectTypeId: 200301, effectValue: [300, 330, 360, 390, 420], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200065: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 4, effectTypeId: 200301, effectValue: [150, 180, 210, 240, 270], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200066: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 6, effectTypeId: 200301, effectValue: [150, 180, 210, 240, 270], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200067: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 5, effectTypeId: 200301, effectValue: [300, 350, 400, 450, 500], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200068: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 3, effectTypeId: 200101, effectValue: [400, 430, 460, 490, 520], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200069: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 3, effectTypeId: 200201, effectValue: [100, 130, 160, 190, 220], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200070: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 6, effectTypeId: 200201, effectValue: [150, 180, 210, 240, 270], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200071: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 4, effectTypeId: 200101, effectValue: [250, 280, 310, 340, 370], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200072: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 5, effectTypeId: 200101, effectValue: [500, 550, 600, 650, 700], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200073: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 5, effectTypeId: 200101, effectValue: [100, 150, 200, 250, 300], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200074: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 6, effectTypeId: 200101, effectValue: [150, 180, 210, 240, 270], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200075: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 5, effectTypeId: 200201, effectValue: [300, 350, 400, 450, 500], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200076: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 4, effectTypeId: 200101, effectValue: [150, 180, 210, 240, 270], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200077: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 6, effectTypeId: 200201, effectValue: [150, 180, 210, 240, 270], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200078: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 9, effectTypeId: 200201, effectValue: [500, 550, 600, 650, 700], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200079: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 5, effectTypeId: 200301, effectValue: [100, 150, 200, 250, 300], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200080: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 6, effectTypeId: 200101, effectValue: [150, 180, 210, 240, 270], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200081: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 3, effectTypeId: 200101, effectValue: [200, 230, 260, 290, 320], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200155: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 1, effectTypeId: 200201, effectValue: [300, 330, 360, 390, 420], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200156: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 5, effectTypeId: 200201, effectValue: [300, 350, 400, 450, 500], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200157: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 1, effectTypeId: 200101, effectValue: [300, 330, 360, 390, 420], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200158: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 4, effectTypeId: 200201, effectValue: [200, 230, 260, 290, 320], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200159: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 5, effectTypeId: 200301, effectValue: [500, 550, 600, 650, 700], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200160: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 5, effectTypeId: 200201, effectValue: [500, 550, 600, 650, 700], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200161: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 3, effectTypeId: 200301, effectValue: [200, 230, 260, 290, 320], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },
  200162: { maxLevel: 5, detail: { triggerProb: 10000, skillTargetId: 4, effectTypeId: 200201, effectValue: [200, 230, 260, 290, 320], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 0, triggerValue: 0, conditionId: 0 } },

  300003: { maxLevel: 1, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 101402, effectValue: [3000], finishType: 'instant', finishValue: 0, timing: 'onTrigger', triggerTypeId: 1, triggerValue: 0, conditionId: 0 } },
  300004: { maxLevel: 1, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 100501, effectValue: [2000], finishType: 'instant', finishValue: 0, timing: 'onTrigger', triggerTypeId: 2, triggerValue: 0, conditionId: 0 } },
  300007: { maxLevel: 1, detail: { triggerProb: 5000, skillTargetId: 1, effectTypeId: 100101, effectValue: [800], finishType: 'duration', finishValue: 10, timing: 'onTrigger', triggerTypeId: 1, triggerValue: 0, conditionId: 0 } },
  300008: { maxLevel: 1, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 100601, effectValue: [1500], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 3, triggerValue: 0, conditionId: 0 } },
  300011: { maxLevel: 1, detail: { triggerProb: 4000, skillTargetId: 0, effectTypeId: 100501, effectValue: [1500], finishType: 'instant', finishValue: 0, timing: 'onTrigger', triggerTypeId: 1001, triggerValue: 2000, conditionId: 0 } },
  300012: { maxLevel: 1, detail: { triggerProb: 5000, skillTargetId: 1, effectTypeId: 100101, effectValue: [1000], finishType: 'duration', finishValue: 15, timing: 'onTrigger', triggerTypeId: 5, triggerValue: 0, conditionId: 0 } },
  300015: { maxLevel: 1, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 100501, effectValue: [2000], finishType: 'instant', finishValue: 0, timing: 'onTrigger', triggerTypeId: 1, triggerValue: 0, conditionId: 0 } },
  300016: { maxLevel: 1, detail: { triggerProb: 3000, skillTargetId: 1, effectTypeId: 100901, effectValue: [1000], finishType: 'duration', finishValue: 15, timing: 'onTrigger', triggerTypeId: 4, triggerValue: 0, conditionId: 0 } },
  300019: { maxLevel: 1, detail: { triggerProb: 5000, skillTargetId: 1, effectTypeId: 100801, effectValue: [800], finishType: 'duration', finishValue: 10, timing: 'onTrigger', triggerTypeId: 1, triggerValue: 0, conditionId: 0 } },
  300020: { maxLevel: 1, detail: { triggerProb: 3000, skillTargetId: 1, effectTypeId: 101601, effectValue: [500], finishType: 'tillEnd', finishValue: 0, timing: 'onTrigger', triggerTypeId: 2, triggerValue: 0, conditionId: 1 } },
  300023: { maxLevel: 1, detail: { triggerProb: 3000, skillTargetId: 1, effectTypeId: 100901, effectValue: [800], finishType: 'duration', finishValue: 10, timing: 'onTrigger', triggerTypeId: 1, triggerValue: 0, conditionId: 0 } },
  300024: { maxLevel: 1, detail: { triggerProb: 3000, skillTargetId: 1, effectTypeId: 101701, effectValue: [170], finishType: 'tillEnd', finishValue: 0, timing: 'onTrigger', triggerTypeId: 1, triggerValue: 0, conditionId: 1 } },
  300027: { maxLevel: 1, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 101402, effectValue: [3000], finishType: 'instant', finishValue: 0, timing: 'onTrigger', triggerTypeId: 1, triggerValue: 0, conditionId: 0 } },
  300028: { maxLevel: 1, detail: { triggerProb: 3000, skillTargetId: 1, effectTypeId: 101701, effectValue: [170], finishType: 'tillEnd', finishValue: 0, timing: 'onTrigger', triggerTypeId: 2, triggerValue: 0, conditionId: 1 } },
  300031: { maxLevel: 1, detail: { triggerProb: 5000, skillTargetId: 1, effectTypeId: 100101, effectValue: [800], finishType: 'duration', finishValue: 10, timing: 'onTrigger', triggerTypeId: 3, triggerValue: 0, conditionId: 0 } },
  300032: { maxLevel: 1, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 101004, effectValue: [1000], finishType: 'instant', finishValue: 0, timing: 'onTrigger', triggerTypeId: 3, triggerValue: 0, conditionId: 0 } },
  300035: { maxLevel: 1, detail: { triggerProb: 5000, skillTargetId: 1, effectTypeId: 101201, effectValue: [1], finishType: 'instant', finishValue: 0, timing: 'onTrigger', triggerTypeId: 5, triggerValue: 0, conditionId: 0 } },
  300036: { maxLevel: 1, detail: { triggerProb: 3000, skillTargetId: 1, effectTypeId: 101801, effectValue: [500], finishType: 'tillEnd', finishValue: 0, timing: 'onTrigger', triggerTypeId: 2, triggerValue: 0, conditionId: 1 } },
  300039: { maxLevel: 1, detail: { triggerProb: 8000, skillTargetId: 2, effectTypeId: 100101, effectValue: [1000], finishType: 'duration', finishValue: 10, timing: 'onTrigger', triggerTypeId: 6, triggerValue: 0, conditionId: 0 } },
  300040: { maxLevel: 1, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 100401, effectValue: [220], finishType: 'tillEnd', finishValue: 0, timing: 'onTrigger', triggerTypeId: 3, triggerValue: 0, conditionId: 0 } },
  300043: { maxLevel: 1, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 101101, effectValue: [800], finishType: 'spFire', finishValue: 1, timing: 'onTrigger', triggerTypeId: 2, triggerValue: 0, conditionId: 0 } },
  300044: { maxLevel: 1, detail: { triggerProb: 3000, skillTargetId: 1, effectTypeId: 101201, effectValue: [1], finishType: 'instant', finishValue: 0, timing: 'onTrigger', triggerTypeId: 4, triggerValue: 0, conditionId: 0 } },
  300047: { maxLevel: 1, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 101004, effectValue: [800], finishType: 'instant', finishValue: 0, timing: 'onTrigger', triggerTypeId: 5, triggerValue: 0, conditionId: 0 } },
  300048: { maxLevel: 1, detail: { triggerProb: 3000, skillTargetId: 1, effectTypeId: 101801, effectValue: [500], finishType: 'tillEnd', finishValue: 0, timing: 'onTrigger', triggerTypeId: 1, triggerValue: 0, conditionId: 1 } },
  300051: { maxLevel: 1, detail: { triggerProb: 5000, skillTargetId: 0, effectTypeId: 100501, effectValue: [2000], finishType: 'instant', finishValue: 0, timing: 'onTrigger', triggerTypeId: 6, triggerValue: 0, conditionId: 0 } },
  300052: { maxLevel: 1, detail: { triggerProb: 3000, skillTargetId: 1, effectTypeId: 101801, effectValue: [500], finishType: 'tillEnd', finishValue: 0, timing: 'onTrigger', triggerTypeId: 1, triggerValue: 0, conditionId: 1 } },
  300055: { maxLevel: 1, detail: { triggerProb: 3000, skillTargetId: 1, effectTypeId: 100901, effectValue: [800], finishType: 'duration', finishValue: 10, timing: 'onTrigger', triggerTypeId: 3, triggerValue: 0, conditionId: 0 } },
  300056: { maxLevel: 1, detail: { triggerProb: 4000, skillTargetId: 0, effectTypeId: 100501, effectValue: [2000], finishType: 'instant', finishValue: 0, timing: 'onTrigger', triggerTypeId: 1001, triggerValue: 1000, conditionId: 0 } },
  300059: { maxLevel: 1, detail: { triggerProb: 3000, skillTargetId: 1, effectTypeId: 100801, effectValue: [800], finishType: 'duration', finishValue: 10, timing: 'onTrigger', triggerTypeId: 4, triggerValue: 0, conditionId: 0 } },
  300060: { maxLevel: 1, detail: { triggerProb: 3000, skillTargetId: 1, effectTypeId: 100901, effectValue: [1000], finishType: 'duration', finishValue: 15, timing: 'onTrigger', triggerTypeId: 3, triggerValue: 0, conditionId: 0 } },
  300063: { maxLevel: 1, detail: { triggerProb: 3000, skillTargetId: 1, effectTypeId: 101801, effectValue: [300], finishType: 'tillEnd', finishValue: 0, timing: 'onTrigger', triggerTypeId: 3, triggerValue: 0, conditionId: 0 } },
  300064: { maxLevel: 1, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 101004, effectValue: [1000], finishType: 'instant', finishValue: 0, timing: 'onTrigger', triggerTypeId: 3, triggerValue: 0, conditionId: 0 } },
  300067: { maxLevel: 1, detail: { triggerProb: 3000, skillTargetId: 1, effectTypeId: 101901, effectValue: [300], finishType: 'tillEnd', finishValue: 0, timing: 'onTrigger', triggerTypeId: 3, triggerValue: 0, conditionId: 0 } },
  300068: { maxLevel: 1, detail: { triggerProb: 5000, skillTargetId: 1, effectTypeId: 100801, effectValue: [1000], finishType: 'duration', finishValue: 10, timing: 'onTrigger', triggerTypeId: 1, triggerValue: 0, conditionId: 0 } },
  300071: { maxLevel: 1, detail: { triggerProb: 8000, skillTargetId: 2, effectTypeId: 100801, effectValue: [800], finishType: 'duration', finishValue: 10, timing: 'onTrigger', triggerTypeId: 6, triggerValue: 0, conditionId: 0 } },
  300072: { maxLevel: 1, detail: { triggerProb: 3000, skillTargetId: 1, effectTypeId: 101801, effectValue: [500], finishType: 'tillEnd', finishValue: 0, timing: 'onTrigger', triggerTypeId: 3, triggerValue: 0, conditionId: 0 } },
  300075: { maxLevel: 1, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 100601, effectValue: [1000], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 3, triggerValue: 0, conditionId: 0 } },
  300078: { maxLevel: 1, detail: { triggerProb: 3000, skillTargetId: 1, effectTypeId: 100801, effectValue: [800], finishType: 'duration', finishValue: 10, timing: 'onTrigger', triggerTypeId: 2, triggerValue: 0, conditionId: 0 } },
  300081: { maxLevel: 1, detail: { triggerProb: 3000, skillTargetId: 1, effectTypeId: 101901, effectValue: [300], finishType: 'tillEnd', finishValue: 0, timing: 'onTrigger', triggerTypeId: 3, triggerValue: 0, conditionId: 0 } },
  300155: { maxLevel: 1, detail: { triggerProb: 3000, skillTargetId: 1, effectTypeId: 100801, effectValue: [1000], finishType: 'duration', finishValue: 10, timing: 'onTrigger', triggerTypeId: 4, triggerValue: 0, conditionId: 0 } },
  300156: { maxLevel: 1, detail: { triggerProb: 2000, skillTargetId: 0, effectTypeId: 101402, effectValue: [3000], finishType: 'instant', finishValue: 0, timing: 'onTrigger', triggerTypeId: 4, triggerValue: 0, conditionId: 0 } },
  300157: { maxLevel: 1, detail: { triggerProb: 3000, skillTargetId: 1, effectTypeId: 100901, effectValue: [1000], finishType: 'duration', finishValue: 15, timing: 'onTrigger', triggerTypeId: 4, triggerValue: 0, conditionId: 0 } },
  300158: { maxLevel: 1, detail: { triggerProb: 2000, skillTargetId: 4, effectTypeId: 100201, effectValue: [500], finishType: 'tillACEnd', finishValue: 0, timing: 'onTrigger', triggerTypeId: 2, triggerValue: 0, conditionId: 0 } },
  300159: { maxLevel: 1, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 101003, effectValue: [1000], finishType: 'instant', finishValue: 0, timing: 'onTrigger', triggerTypeId: 3, triggerValue: 0, conditionId: 0 } },
  300160: { maxLevel: 1, detail: { triggerProb: 2000, skillTargetId: 0, effectTypeId: 100702, effectValue: [1000], finishType: 'instant', finishValue: 0, timing: 'onTrigger', triggerTypeId: 4, triggerValue: 0, conditionId: 0 } },
  300161: { maxLevel: 1, detail: { triggerProb: 2000, skillTargetId: 3, effectTypeId: 100101, effectValue: [250], finishType: 'duration', finishValue: 5, timing: 'onTrigger', triggerTypeId: 4, triggerValue: 0, conditionId: 0 } },
  300162: { maxLevel: 1, detail: { triggerProb: 3000, skillTargetId: 0, effectTypeId: 100601, effectValue: [1000], finishType: 'never', finishValue: 0, timing: 'onTrigger', triggerTypeId: 3, triggerValue: 0, conditionId: 0 } },
};
/* eslint-enable object-curly-newline, max-len */

export function getSkillInfoKR(skillId: number) {
  const skill = SKILL[skillId];
  // TODO: Remove this after complete skill info
  if (skill === undefined) {
    return undefined;
  }
  // Get skill icon asset path
  const iconAssetPath = (() => {
    const { effectTypeId } = skill.detail;
    const effectCategory = SKILL_EFFECT_CATEGORY[SKILL_EFFECT_TYPE[effectTypeId].effectCategoryId];
    return effectCategory.iconAssetPath;
  })();
  // Get skill effect string
  const effectString = (() => {
    const prefix = (() => {
      if (skill.detail.finishType === 'duration') return `${skill.detail.finishValue} 노트 동안`;
      if (skill.detail.finishType === 'spFire') return `다음 ${skill.detail.finishValue}번의`;
      if (skill.detail.finishType === 'tillEnd') return '게임 종료까지';
      if (skill.detail.finishType === 'tillACEnd') return '어필 찬스 종료까지';
      return '';
    })();
    const effectStr = SKILL_EFFECT_STRING[skill.detail.effectTypeId];
    const effect = SKILL_EFFECT_TYPE[skill.detail.effectTypeId];
    const value = skill.detail.effectValue.map((v) => (effect.scaleType === 'percent' ? v / 100 : v)).join('/');
    return [prefix, effectStr.beforeValue, value, effectStr.afterValue].join(' ');
  })();
  // Get target string
  const targetString = SKILL_TARGET[skill.detail.skillTargetId].krName;
  // Get trigger string
  // TODO: Fix this string
  const triggerString = (() => {
    if (skill.detail.timing === 'onTrigger') {
      const skillTrigger = SKILL_TRIGGER_TYPE[skill.detail.triggerTypeId];
      const { triggerValue, conditionId } = skill.detail;
      let ret = '';
      if (triggerValue !== 0) ret += `${triggerValue} `;
      ret += `${skillTrigger.krDesc}`;
      if (conditionId !== 0) ret += ` ${SKILL_CONDITION[conditionId].desc}`;
      return ret;
    }
    return '어필 시';
  })();
  // Get trigger probability string
  const probString = skill.detail.triggerProb === 10000 ? '' : `${skill.detail.triggerProb / 100}%`;
  return {
    iconAssetPath,
    probString,
    effectString,
    targetString,
    triggerString,
  };
}
