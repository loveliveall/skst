import React from 'react';
import {
  useColorModeValue,
  Image,
  Text,
  HStack,
  VStack,
} from '@chakra-ui/react';

import CardIcon from '@/components/CardIcon';
import DataTable from '@/components/DataTable';
import {
  defaultCmp, getCardSrc, gachaTypeToLabel, processSkill, getSkillLevelMap, isPercentValue,
} from '@/utils';
import { getCritProb } from '@/statUtils';
import { useAppSelector } from '@/store';

import { FULL_CARD_LIST } from '@/data/cardList';
import { RARITY, ATTRIBUTE, ROLE } from '@/data/cardMetadata';
import { MEMBER } from '@/data/memberMetadata';
import { GACHA } from '@/data/gacha';
import { OUTFIT_SERIES } from '@/data/outfitSeries';
import { CARD_ACTIVE_SKILL } from '@/data/cardActiveSkill';
import { SKILL_EFFECT } from '@/data/skillMetadata';
import { CARD_PASSIVE_SKILL } from '@/data/cardPassiveSkill';

const CardTable: React.FC = () => {
  const tooltipColor = useColorModeValue('gray.500', 'gray.400');
  const filt = useAppSelector((state) => state.cardFilter);
  // TODO: This logic will be get really complicated
  const CARD_LIST = React.useMemo(() => FULL_CARD_LIST
    .filter((card) => {
      if (filt.uncap !== -1 && filt.uncap !== card.uncap) return false;
      if (!filt.member[card.memberId]) return false;
      if (!filt.attribute[card.attributeId]) return false;
      if (!filt.role[card.roleId]) return false;
      if (!filt.rarity[card.rarityId]) return false;
      if (filt.outfitSeriesId !== -1) {
        const outfit = OUTFIT_SERIES[filt.outfitSeriesId];
        if (!outfit?.matching.includes(card.awakenTitle)) return false;
      }
      if (filt.firstOut !== null) {
        const src = getCardSrc(card.id);
        if (filt.firstOut.type === 'event' && src.type !== 'event') return false;
        if (filt.firstOut.type === 'gacha') {
          if (src.type !== 'gacha') return false;
          const gacha = GACHA[src.gachaId];
          const { gachaType } = filt.firstOut;
          if (gachaType !== null && gachaType !== gacha?.type) return false;
        }
      }
      // Active skill filter
      if (filt.activeCategory.length !== 0 || filt.activeTarget.length !== 0) {
        const activeSkill = CARD_ACTIVE_SKILL[card.id];
        if (activeSkill === undefined) return false;
        const { targetIds, effectCategoryId } = processSkill(activeSkill);
        if (filt.activeCategory.length !== 0) {
          const filtCategories = filt.activeCategory.map((e) => e.effectCategoryId);
          if (!filtCategories.includes(effectCategoryId)) return false;
        }
        if (filt.activeTarget.length !== 0) {
          const filtTargets = filt.activeTarget.map((e) => e.targetId);
          if (!targetIds.every((id) => filtTargets.includes(id))) return false;
        }
      }
      // Passive blue skill filter
      if (filt.passiveBlueCategory.length !== 0 || filt.passiveBlueTarget.length !== 0) {
        const passiveSkills = CARD_PASSIVE_SKILL[card.id];
        if (passiveSkills === undefined) return false;
        const judge = passiveSkills.some((passiveSkill) => {
          const { targetIds, effectCategoryId } = processSkill(passiveSkill);
          if (filt.passiveBlueCategory.length !== 0) {
            const filtCategories = filt.passiveBlueCategory.map((e) => e.effectCategoryId);
            if (!filtCategories.includes(effectCategoryId)) return false;
          }
          if (filt.passiveBlueTarget.length !== 0) {
            const filtTargets = filt.passiveBlueTarget.map((e) => e.targetId);
            if (!targetIds.every((id) => filtTargets.includes(id))) return false;
          }
          return true;
        });
        if (!judge) return false;
      }
      // Passive red skill filter
      if (filt.passiveRedCategory.length !== 0
        || filt.passiveRedTarget.length !== 0
        || filt.passiveRedTrigger.length !== 0) {
        const passiveSkills = CARD_PASSIVE_SKILL[card.id];
        if (passiveSkills === undefined) return false;
        const judge = passiveSkills.some((passiveSkill) => {
          const { targetIds, effectCategoryId, triggerTypeId } = processSkill(passiveSkill);
          if (filt.passiveRedCategory.length !== 0) {
            const filtCategories = filt.passiveRedCategory.map((e) => e.effectCategoryId);
            if (!filtCategories.includes(effectCategoryId)) return false;
          }
          if (filt.passiveRedTarget.length !== 0) {
            const filtTargets = filt.passiveRedTarget.map((e) => e.targetId);
            if (!targetIds.every((id) => filtTargets.includes(id))) return false;
          }
          if (filt.passiveRedTrigger.length !== 0) {
            const filtTriggers = filt.passiveRedTrigger.map((e) => e.triggerId);
            if (!filtTriggers.includes(triggerTypeId)) return false;
          }
          return true;
        });
        if (!judge) return false;
      }
      return true;
    })
    .map((card) => ({
      ...card,
      critProb: getCritProb(card.t, card.critOffset),
    })), [filt]);
  return (
    <DataTable
      data={CARD_LIST}
      pageSize={25}
      columns={[
        {
          title: 'ID',
          render: (row) => <Text>{row.id}</Text>,
          customSort: (a, b) => defaultCmp(a.id, b.id),
        },
        {
          title: '아이콘',
          render: (row) => (
            <HStack spacing={2} justify="center">
              <CardIcon cardId={row.id} width="64px" height="64px" />
              <CardIcon cardId={row.id} width="64px" height="64px" awaken />
            </HStack>
          ),
        },
        {
          title: '이름',
          render: (row) => (
            <VStack spacing={1}>
              <Text fontSize="xs" color={tooltipColor}>
                {row.title}
                <br />
                {row.awakenTitle}
              </Text>
              <Text>{MEMBER[row.memberId]?.name ?? 'N/A'}</Text>
            </VStack>
          ),
          customSort: (a, b) => defaultCmp(a.memberId, b.memberId),
        },
        {
          title: '레어도',
          render: (row) => <Text>{RARITY[row.rarityId].symbol}</Text>,
          customSort: (a, b) => defaultCmp(a.rarityId, b.rarityId),
        },
        {
          title: '속성',
          render: (row) => {
            const att = ATTRIBUTE[row.attributeId];
            if (att === undefined) throw Error(`Attribute ${row.attributeId} not found`);
            return (
              <Image
                src={att.iconAssetPath}
                alt={`${att.symbol}-icon`}
                title={att.name}
                width="32px"
                height="32px"
              />
            );
          },
          customSort: (a, b) => defaultCmp(a.attributeId, b.attributeId),
        },
        {
          title: '타입',
          render: (row) => {
            const role = ROLE[row.roleId];
            if (role === undefined) throw Error(`Role ${row.roleId} not found`);
            return (
              <Image
                src={role.iconAssetPath}
                alt={`${role.symbol}-icon`}
                title={role.name}
                width="32px"
                height="32px"
              />
            );
          },
          customSort: (a, b) => defaultCmp(a.roleId, b.roleId),
        },
        {
          title: '★',
          render: (row) => <Text>{row.uncap}</Text>,
          customSort: (a, b) => defaultCmp(a.uncap, b.uncap),
        },
        {
          title: '어필',
          render: (row) => <Text>{row.a}</Text>,
          customSort: (a, b) => defaultCmp(a.a, b.a),
        },
        {
          title: '스태',
          render: (row) => <Text>{row.s}</Text>,
          customSort: (a, b) => defaultCmp(a.s, b.s),
        },
        {
          title: '테크닉',
          render: (row) => <Text>{row.t}</Text>,
          customSort: (a, b) => defaultCmp(a.t, b.t),
        },
        {
          title: '스탯합',
          render: (row) => <Text>{row.statSum}</Text>,
          customSort: (a, b) => defaultCmp(a.statSum, b.statSum),
        },
        {
          title: '크리율',
          render: (row) => <Text>{`${row.critProb.toFixed(2)}%`}</Text>,
          customSort: (a, b) => defaultCmp(a.critProb, b.critProb),
        },
        {
          title: '첫 등장',
          render: (row) => {
            const src = getCardSrc(row.id);
            if (src.type === 'event') return <Text>이벤트</Text>;
            if (src.type === 'gacha') {
              const gacha = GACHA[src.gachaId];
              if (gacha === undefined) throw Error(`Gacha ${src.gachaId} not found`);
              return <Text>{`가챠 (${gachaTypeToLabel(gacha.type)})`}</Text>;
            }
            return <span />;
          },
          customSort: (a, b) => {
            const aSrc = getCardSrc(a.id);
            const bSrc = getCardSrc(b.id);
            if (aSrc.type > bSrc.type) return 1;
            if (aSrc.type < bSrc.type) return -1;
            if (aSrc.type === 'event' && bSrc.type === 'event') return defaultCmp(aSrc.eventId, bSrc.eventId);
            if (aSrc.type === 'gacha' && bSrc.type === 'gacha') return defaultCmp(aSrc.gachaId, bSrc.gachaId);
            return 0;
          },
        },
        {
          title: '특기',
          render: (row) => {
            const activeSkill = CARD_ACTIVE_SKILL[row.id];
            if (activeSkill === undefined) return <span />;
            const shortStrs = activeSkill.effects.map((e) => {
              const skillEffect = SKILL_EFFECT[e.type];
              if (skillEffect === undefined) throw Error(`Skill effect ${e.type} not found`);
              const shortStr = skillEffect.shortTxt ?? skillEffect.str;
              const levelMap = getSkillLevelMap(row.id);
              const skillLevel = levelMap.activeSkill[row.uncap]!;
              const isPercent = isPercentValue(e);
              const value = e.values[skillLevel - 1]!;
              return shortStr.replace('X', isPercent ? `${value / 100}%` : `${value}`);
            });
            const { effectCategory, targets } = processSkill(activeSkill);
            return (
              <VStack>
                <Image
                  width="32px"
                  height="32px"
                  src={effectCategory.iconAssetPath}
                  title={effectCategory.name}
                />
                <VStack spacing={0}>
                  {shortStrs.map((e) => (
                    <Text key={e} fontSize="xs">{e}</Text>
                  ))}
                  {targets.length !== 0 && (
                    <Text fontSize="xs">{`대상: ${targets.join(', ')}`}</Text>
                  )}
                </VStack>
              </VStack>
            );
          },
          customSort: (a, b) => {
            const aActive = CARD_ACTIVE_SKILL[a.id];
            const bActive = CARD_ACTIVE_SKILL[b.id];
            if (aActive === undefined) return -1;
            if (bActive === undefined) return -1;
            const { effectCategory: aCategory } = processSkill(aActive);
            const { effectCategory: bCategory } = processSkill(bActive);
            if (aCategory.name < bCategory.name) return -1;
            if (aCategory.name > bCategory.name) return 1;
            const typeA = aActive.effects[0]!.type;
            const typeB = bActive.effects[0]!.type;
            if (typeA < typeB) return -1;
            if (typeA > typeB) return 1;
            const valueA = aActive.effects[0]!.values[getSkillLevelMap(a.id).activeSkill[a.uncap]! - 1]!;
            const valueB = bActive.effects[0]!.values[getSkillLevelMap(b.id).activeSkill[b.uncap]! - 1]!;
            return valueA - valueB;
          },
        },
        {
          title: '개성(패시브)',
          render: (row) => {
            const passiveSkills = CARD_PASSIVE_SKILL[row.id];
            if (passiveSkills === undefined) return <span />;
            const passiveSkill = passiveSkills[0]!;
            const shortStrs = passiveSkill.effects.map((e) => {
              const skillEffect = SKILL_EFFECT[e.type];
              if (skillEffect === undefined) throw Error(`Skill effect ${e.type} not found`);
              const shortStr = skillEffect.shortTxt ?? skillEffect.str;
              const levelMap = getSkillLevelMap(row.id);
              const skillLevel = levelMap.passiveSkills[0]![row.uncap]!;
              const isPercent = isPercentValue(e);
              const value = e.values[skillLevel - 1]!;
              return shortStr.replace('X', isPercent ? `${value / 100}%` : `${value}`);
            });
            const { effectCategory, targets } = processSkill(passiveSkill);
            return (
              <VStack>
                <Image
                  width="32px"
                  height="32px"
                  src={effectCategory.iconAssetPath}
                  title={effectCategory.name}
                />
                <VStack spacing={0}>
                  {shortStrs.map((e) => (
                    <Text key={e} fontSize="xs">{e}</Text>
                  ))}
                  {targets.length !== 0 && (
                    <Text fontSize="xs">{`대상: ${targets.join(', ')}`}</Text>
                  )}
                </VStack>
              </VStack>
            );
          },
          customSort: (a, b) => {
            const aPassives = CARD_PASSIVE_SKILL[a.id];
            const bPassives = CARD_PASSIVE_SKILL[b.id];
            if (aPassives === undefined) return -1;
            if (bPassives === undefined) return -1;
            const aPassive = aPassives[0]!;
            const bPassive = bPassives[0]!;
            const { effectCategory: aCategory } = processSkill(aPassive);
            const { effectCategory: bCategory } = processSkill(bPassive);
            if (aCategory.name < bCategory.name) return -1;
            if (aCategory.name > bCategory.name) return 1;
            const typeA = aPassive.effects[0]!.type;
            const typeB = bPassive.effects[0]!.type;
            if (typeA < typeB) return -1;
            if (typeA > typeB) return 1;
            const valueA = aPassive.effects[0]!.values[getSkillLevelMap(a.id).passiveSkills[0]![a.uncap]! - 1]!;
            const valueB = bPassive.effects[0]!.values[getSkillLevelMap(b.id).passiveSkills[0]![b.uncap]! - 1]!;
            return valueA - valueB;
          },
        },
        {
          title: '개성(라이브)',
          render: (row) => {
            const passiveSkills = CARD_PASSIVE_SKILL[row.id];
            if (passiveSkills === undefined) return <span />;
            const liveSkill = passiveSkills[1];
            if (liveSkill === undefined) return <span />;
            const shortStrs = liveSkill.effects.map((e) => {
              const skillEffect = SKILL_EFFECT[e.type];
              if (skillEffect === undefined) throw Error(`Skill effect ${e.type} not found`);
              const shortStr = skillEffect.shortTxt ?? skillEffect.str;
              const levelMap = getSkillLevelMap(row.id);
              const skillLevel = levelMap.passiveSkills[1]![row.uncap]!;
              const isPercent = isPercentValue(e);
              const value = e.values[skillLevel - 1]!;
              return shortStr.replace('X', isPercent ? `${value / 100}%` : `${value}`);
            });
            const { effectCategory, targets } = processSkill(liveSkill);
            return (
              <VStack>
                <Image
                  width="32px"
                  height="32px"
                  src={effectCategory.iconAssetPath}
                  title={effectCategory.name}
                />
                <VStack spacing={0}>
                  {shortStrs.map((e) => (
                    <Text key={e} fontSize="xs">{e}</Text>
                  ))}
                  {targets.length !== 0 && (
                    <Text fontSize="xs">{`대상: ${targets.join(', ')}`}</Text>
                  )}
                </VStack>
              </VStack>
            );
          },
          customSort: (a, b) => {
            const aPassives = CARD_PASSIVE_SKILL[a.id];
            const bPassives = CARD_PASSIVE_SKILL[b.id];
            if (aPassives === undefined) return -1;
            if (bPassives === undefined) return -1;
            const aLive = aPassives[1];
            const bLive = bPassives[1];
            if (aLive === undefined) return -1;
            if (bLive === undefined) return 1;
            const { effectCategory: aCategory } = processSkill(aLive);
            const { effectCategory: bCategory } = processSkill(bLive);
            if (aCategory.name < bCategory.name) return -1;
            if (aCategory.name > bCategory.name) return 1;
            const typeA = aLive.effects[0]!.type;
            const typeB = bLive.effects[0]!.type;
            if (typeA < typeB) return -1;
            if (typeA > typeB) return 1;
            const valueA = aLive.effects[0]!.values[getSkillLevelMap(a.id).passiveSkills[1]![a.uncap]! - 1]!;
            const valueB = bLive.effects[0]!.values[getSkillLevelMap(b.id).passiveSkills[1]![b.uncap]! - 1]!;
            return valueA - valueB;
          },
        },
      ]}
    />
  );
};

export default CardTable;
