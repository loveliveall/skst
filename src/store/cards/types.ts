type TargetAttribute = {
  id: 3,
  attributeId: number | null,
};
type TargetRole = {
  id: 4,
  roleId: number | null,
};
type TargetGroup = {
  id: 6,
  groupId: number | null,
};
type TargetGrade = {
  id: 7,
  grade: number | null,
};
type TargetUnit = {
  id: 8,
  unitId: number | null,
};

export type SkillTargetInfo = {
  id: number,
} | TargetAttribute | TargetRole |
TargetGroup | TargetGrade | TargetUnit;

export function isAttributeTarget(target: SkillTargetInfo): target is TargetAttribute {
  return target.id === 3;
}
export function isRoleTarget(target: SkillTargetInfo): target is TargetRole {
  return target.id === 4;
}
export function isGroupTarget(target: SkillTargetInfo): target is TargetGroup {
  return target.id === 6;
}
export function isGradeTarget(target: SkillTargetInfo): target is TargetGrade {
  return target.id === 7;
}
export function isUnitTarget(target: SkillTargetInfo): target is TargetUnit {
  return target.id === 8;
}
