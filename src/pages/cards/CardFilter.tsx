import React from 'react';
import {
  useColorModeValue,
  AccordionIcon,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Button,
  Center,
  Image, ImageProps,
  Select,
  HStack,
  VStack,
  Heading,
  IconButton,
} from '@chakra-ui/react';
import {
  AddIcon,
  DeleteIcon,
} from '@chakra-ui/icons';

import FixedWrapper from '@/components/FixedWrapper';

import { useAppDispatch, useAppSelector } from '@/store';
import {
  setAttributeFilter,
  setMemberFilter,
  setRarityFilter,
  setRoleFilter,
  setOutfitSeriesFilter,
  setUncapFilter,
  setFirstOutFilter,
  initializeFilter,
  changeActiveCategoryFilter,
  addActiveCategoryFilter,
  removeActiveCategoryFilter,
  changeActiveTargetFilter,
  removeActiveTargetFilter,
  addActiveTargetFilter,
  changePassiveBlueCategoryFilter,
  removePassiveBlueCategoryFilter,
  addPassiveBlueCategoryFilter,
  changePassiveBlueTargetFilter,
  removePassiveBlueTargetFilter,
  addPassiveBlueTargetFilter,
  changePassiveRedCategoryFilter,
  removePassiveRedCategoryFilter,
  addPassiveRedCategoryFilter,
  changePassiveRedTargetFilter,
  removePassiveRedTargetFilter,
  addPassiveRedTargetFilter,
  changePassiveRedTriggerFilter,
  removePassiveRedTriggerFilter,
  addPassiveRedTriggerFilter,
} from '@/store/card-filter/slice';
import { gachaTypeToLabel } from '@/utils';

import { GROUP, MEMBER } from '@/data/memberMetadata';
import {
  ATTRIBUTE, ROLE, RARITY, RARITYID,
} from '@/data/cardMetadata';
import { OUTFIT_SERIES } from '@/data/outfitSeries';
import { GACHA_TYPES, GachaType } from '@/data/gacha';
import { EFFECT_CATEGORY, SKILL_TARGET, SKILL_TRIGGER_TYPE } from '@/data/skillMetadata';

const ATTRIBUTE_IDS = Object.keys(ATTRIBUTE).map(Number);
const ROLE_IDS = Object.keys(ROLE).map(Number);
const RED_EFFECT_CATEGORY_IDS = Object.keys(EFFECT_CATEGORY).map(Number).filter(
  (id) => EFFECT_CATEGORY[id]!.type === 'red',
);
const BLUE_EFFECT_CATEGORY_IDS = Object.keys(EFFECT_CATEGORY).map(Number).filter(
  (id) => EFFECT_CATEGORY[id]!.type === 'blue',
);
const TARGET_IDS = Object.keys(SKILL_TARGET).map(Number);
const TRIGGER_IDS = Object.keys(SKILL_TRIGGER_TYPE).map(Number);

type ImageButtonProps = {
  active?: boolean,
} & ImageProps;
const ImageButton: React.FC<ImageButtonProps> = ({ active, ...props }) => (
  <Image
    height="32px"
    opacity={active ? 1 : 0.1}
    _hover={{
      cursor: 'pointer',
      opacity: active ? 0.7 : 0.3,
    }}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
);

type RowProps = {
  title: string,
};
const Row: React.FC<RowProps> = ({ title, children }) => (
  <FixedWrapper>
    <HStack spacing={2}>
      <Center flexShrink={0}>
        <Heading size="sm">{title}</Heading>
      </Center>
      {children}
    </HStack>
  </FixedWrapper>
);

const CardFilter: React.FC = () => {
  const dispatch = useAppDispatch();
  const imgFilter = useColorModeValue(undefined, 'invert(1)');
  const filt = useAppSelector((state) => state.cardFilter);
  const attributeAll = ATTRIBUTE_IDS.every((aId) => filt.attribute[aId]);
  const roleAll = ROLE_IDS.every((rId) => filt.role[rId]);
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Center flex="1">필터 설정</Center>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel>
        <VStack spacing={4}>
          <Row title="멤버">
            <VStack spacing={2}>
              {Object.keys(GROUP).map(Number).map((gId) => {
                const mIds = Object.keys(MEMBER).map(Number).filter((mId) => MEMBER[mId]!.groupId === gId);
                const selected = mIds.every((mId) => filt.member[mId]);
                return (
                  <HStack key={gId} spacing={2}>
                    <ImageButton
                      active={selected}
                      src={GROUP[gId]!.iconAssetPath}
                      alt={`${GROUP[gId]!.symbol}-icon`}
                      title={GROUP[gId]!.name}
                      onClick={() => dispatch(setMemberFilter(mIds, !selected))}
                    />
                    {mIds.map((mId) => (
                      <ImageButton
                        key={mId}
                        active={filt.member[mId]}
                        src={MEMBER[mId]!.iconAssetPath}
                        alt={`${MEMBER[mId]!.enName}-icon`}
                        title={MEMBER[mId]!.name}
                        onClick={() => dispatch(setMemberFilter([mId], !filt.member[mId]))}
                      />
                    ))}
                  </HStack>
                );
              })}
            </VStack>
          </Row>
          <Row title="속성">
            <HStack spacing={2}>
              <ImageButton
                active={roleAll}
                src="/images/icons/all.png"
                alt="all-icon"
                title="전체 선택"
                onClick={() => dispatch(setRoleFilter(ROLE_IDS, !roleAll))}
                filter={imgFilter}
              />
              {ROLE_IDS.map((rId) => (
                <ImageButton
                  key={rId}
                  active={filt.role[rId]}
                  src={ROLE[rId]!.iconAssetPath}
                  alt={`${ROLE[rId]!.symbol}-icon`}
                  title={ROLE[rId]!.name}
                  onClick={() => dispatch(setRoleFilter([rId], !filt.role[rId]))}
                />
              ))}
            </HStack>
          </Row>
          <Row title="타입">
            <HStack spacing={2}>
              <ImageButton
                active={attributeAll}
                src="/images/icons/all.png"
                alt="all-icon"
                title="전체 선택"
                onClick={() => dispatch(setAttributeFilter(ATTRIBUTE_IDS, !attributeAll))}
                filter={imgFilter}
              />
              {ATTRIBUTE_IDS.map((aId) => (
                <ImageButton
                  key={aId}
                  active={filt.attribute[aId]}
                  src={ATTRIBUTE[aId]!.iconAssetPath}
                  alt={`${ATTRIBUTE[aId]!.symbol}-icon`}
                  title={ATTRIBUTE[aId]!.name}
                  onClick={() => dispatch(setAttributeFilter([aId], !filt.attribute[aId]))}
                />
              ))}
            </HStack>
          </Row>
          <Row title="레어도">
            <HStack spacing={2}>
              {Object.keys(RARITY).map(Number).map((rarityId: RARITYID) => (
                <ImageButton
                  key={rarityId}
                  active={filt.rarity[rarityId]}
                  src={RARITY[rarityId].iconAssetPath}
                  alt={`${RARITY[rarityId].symbol}-icon`}
                  title={RARITY[rarityId].symbol}
                  onClick={() => dispatch(setRarityFilter(rarityId, !filt.rarity[rarityId]))}
                />
              ))}
            </HStack>
          </Row>
          <Row title="특기">
            <HStack spacing={2} alignItems="flex-start">
              <VStack p={1} flexShrink={0}>
                <Heading size="sm">스킬 종류</Heading>
                {filt.activeCategory.map((v) => (
                  <HStack key={v.key}>
                    <Select
                      size="sm"
                      value={v.effectCategoryId}
                      onChange={(e) => dispatch(changeActiveCategoryFilter(v.key, Number(e.target.value)))}
                    >
                      {RED_EFFECT_CATEGORY_IDS.map((id) => (
                        <option key={id} value={id}>{EFFECT_CATEGORY[id]!.name}</option>
                      ))}
                    </Select>
                    <IconButton
                      aria-label="Remove effect category"
                      onClick={() => dispatch(removeActiveCategoryFilter(v.key))}
                      icon={<DeleteIcon />}
                      size="sm"
                    />
                  </HStack>
                ))}
                <IconButton
                  aria-label="Add effect category"
                  onClick={() => dispatch(addActiveCategoryFilter())}
                  icon={<AddIcon />}
                  size="sm"
                />
              </VStack>
              <VStack p={1} flexShrink={0}>
                <Heading size="sm">스킬 대상</Heading>
                {filt.activeTarget.map((v) => (
                  <HStack key={v.key}>
                    <Select
                      size="sm"
                      value={v.targetId}
                      onChange={(e) => dispatch(changeActiveTargetFilter(v.key, Number(e.target.value)))}
                    >
                      {TARGET_IDS.map((id) => {
                        const name = SKILL_TARGET[id]!.str;
                        return <option key={id} value={id}>{name === '' ? '대상 없음' : name}</option>;
                      })}
                    </Select>
                    <IconButton
                      aria-label="Remove effect target"
                      onClick={() => dispatch(removeActiveTargetFilter(v.key))}
                      icon={<DeleteIcon />}
                      size="sm"
                    />
                  </HStack>
                ))}
                <IconButton
                  aria-label="Add effect target"
                  onClick={() => dispatch(addActiveTargetFilter())}
                  icon={<AddIcon />}
                  size="sm"
                />
              </VStack>
            </HStack>
          </Row>
          <Row title="개성(패시브)">
            <HStack spacing={2} alignItems="flex-start">
              <VStack p={1} flexShrink={0}>
                <Heading size="sm">스킬 종류</Heading>
                {filt.passiveBlueCategory.map((v) => (
                  <HStack key={v.key}>
                    <Select
                      size="sm"
                      value={v.effectCategoryId}
                      onChange={(e) => dispatch(changePassiveBlueCategoryFilter(v.key, Number(e.target.value)))}
                    >
                      {BLUE_EFFECT_CATEGORY_IDS.map((id) => (
                        <option key={id} value={id}>{EFFECT_CATEGORY[id]!.name}</option>
                      ))}
                    </Select>
                    <IconButton
                      aria-label="Remove effect category"
                      onClick={() => dispatch(removePassiveBlueCategoryFilter(v.key))}
                      icon={<DeleteIcon />}
                      size="sm"
                    />
                  </HStack>
                ))}
                <IconButton
                  aria-label="Add effect category"
                  onClick={() => dispatch(addPassiveBlueCategoryFilter())}
                  icon={<AddIcon />}
                  size="sm"
                />
              </VStack>
              <VStack p={1} flexShrink={0}>
                <Heading size="sm">스킬 대상</Heading>
                {filt.passiveBlueTarget.map((v) => (
                  <HStack key={v.key}>
                    <Select
                      size="sm"
                      value={v.targetId}
                      onChange={(e) => dispatch(changePassiveBlueTargetFilter(v.key, Number(e.target.value)))}
                    >
                      {TARGET_IDS.map((id) => {
                        const name = SKILL_TARGET[id]!.str;
                        return <option key={id} value={id}>{name === '' ? '대상 없음' : name}</option>;
                      })}
                    </Select>
                    <IconButton
                      aria-label="Remove effect target"
                      onClick={() => dispatch(removePassiveBlueTargetFilter(v.key))}
                      icon={<DeleteIcon />}
                      size="sm"
                    />
                  </HStack>
                ))}
                <IconButton
                  aria-label="Add effect target"
                  onClick={() => dispatch(addPassiveBlueTargetFilter())}
                  icon={<AddIcon />}
                  size="sm"
                />
              </VStack>
            </HStack>
          </Row>
          <Row title="개성(라이브)">
            <HStack spacing={2} alignItems="flex-start">
              <VStack p={1} flexShrink={0}>
                <Heading size="sm">스킬 종류</Heading>
                {filt.passiveRedCategory.map((v) => (
                  <HStack key={v.key}>
                    <Select
                      size="sm"
                      value={v.effectCategoryId}
                      onChange={(e) => dispatch(changePassiveRedCategoryFilter(v.key, Number(e.target.value)))}
                    >
                      {RED_EFFECT_CATEGORY_IDS.map((id) => (
                        <option key={id} value={id}>{EFFECT_CATEGORY[id]!.name}</option>
                      ))}
                    </Select>
                    <IconButton
                      aria-label="Remove effect category"
                      onClick={() => dispatch(removePassiveRedCategoryFilter(v.key))}
                      icon={<DeleteIcon />}
                      size="sm"
                    />
                  </HStack>
                ))}
                <IconButton
                  aria-label="Add effect category"
                  onClick={() => dispatch(addPassiveRedCategoryFilter())}
                  icon={<AddIcon />}
                  size="sm"
                />
              </VStack>
              <VStack p={1} flexShrink={0}>
                <Heading size="sm">스킬 대상</Heading>
                {filt.passiveRedTarget.map((v) => (
                  <HStack key={v.key}>
                    <Select
                      size="sm"
                      value={v.targetId}
                      onChange={(e) => dispatch(changePassiveRedTargetFilter(v.key, Number(e.target.value)))}
                    >
                      {TARGET_IDS.map((id) => {
                        const name = SKILL_TARGET[id]!.str;
                        return <option key={id} value={id}>{name === '' ? '대상 없음' : name}</option>;
                      })}
                    </Select>
                    <IconButton
                      aria-label="Remove effect target"
                      onClick={() => dispatch(removePassiveRedTargetFilter(v.key))}
                      icon={<DeleteIcon />}
                      size="sm"
                    />
                  </HStack>
                ))}
                <IconButton
                  aria-label="Add effect target"
                  onClick={() => dispatch(addPassiveRedTargetFilter())}
                  icon={<AddIcon />}
                  size="sm"
                />
              </VStack>
              <VStack p={1} flexShrink={0}>
                <Heading size="sm">발동 조건</Heading>
                {filt.passiveRedTrigger.map((v) => (
                  <HStack key={v.key}>
                    <Select
                      size="sm"
                      value={v.triggerId}
                      onChange={(e) => dispatch(changePassiveRedTriggerFilter(v.key, Number(e.target.value)))}
                    >
                      {TRIGGER_IDS.map((id) => (
                        <option key={id} value={id}>{SKILL_TRIGGER_TYPE[id]!.str}</option>
                      ))}
                    </Select>
                    <IconButton
                      aria-label="Remove effect trigger"
                      onClick={() => dispatch(removePassiveRedTriggerFilter(v.key))}
                      icon={<DeleteIcon />}
                      size="sm"
                    />
                  </HStack>
                ))}
                <IconButton
                  aria-label="Add effect trigger"
                  onClick={() => dispatch(addPassiveRedTriggerFilter())}
                  icon={<AddIcon />}
                  size="sm"
                />
              </VStack>
            </HStack>
          </Row>
          <Row title="한돌">
            <Select
              size="sm"
              value={filt.uncap}
              onChange={(e) => dispatch(setUncapFilter(Number(e.target.value)))}
            >
              <option value={-1}>모두</option>
              {new Array(6).fill(null).map((_, idx) => (
                // eslint-disable-next-line react/no-array-index-key
                <option key={idx} value={idx}>{idx}</option>
              ))}
            </Select>
          </Row>
          <Row title="의상">
            <Select
              size="sm"
              value={filt.outfitSeriesId}
              onChange={(e) => dispatch(setOutfitSeriesFilter(Number(e.target.value)))}
            >
              <option value={-1}>모두</option>
              {Object.keys(OUTFIT_SERIES).map(Number).map((oId) => (
                <option key={oId} value={oId}>{OUTFIT_SERIES[oId]!.name}</option>
              ))}
            </Select>
          </Row>
          <Row title="첫 등장">
            <HStack spacing={2}>
              <Select
                size="sm"
                value={filt.firstOut?.type ?? 'all'}
                onChange={(e) => {
                  const selected = e.target.value;
                  if (selected === 'all') dispatch(setFirstOutFilter(null));
                  else if (selected === 'event') dispatch(setFirstOutFilter({ type: 'event' }));
                  else if (selected === 'gacha') dispatch(setFirstOutFilter({ type: 'gacha', gachaType: null }));
                }}
              >
                <option value="all">모두</option>
                {['event', 'gacha'].map((t) => {
                  const label = (() => {
                    if (t === 'event') return '이벤트';
                    if (t === 'gacha') return '가챠';
                    return 'N/A';
                  })();
                  return <option key={t} value={t}>{label}</option>;
                })}
              </Select>
              {filt.firstOut?.type === 'gacha' && (
                <Select
                  size="sm"
                  value={filt.firstOut.gachaType ?? 'all'}
                  onChange={(e) => dispatch(setFirstOutFilter({
                    type: 'gacha',
                    gachaType: e.target.value === 'all' ? null : e.target.value as GachaType,
                  }))}
                >
                  <option value="all">모두</option>
                  {GACHA_TYPES.map((t) => (
                    <option key={t} value={t}>{gachaTypeToLabel(t)}</option>
                  ))}
                </Select>
              )}
            </HStack>
          </Row>
          <Button onClick={() => dispatch(initializeFilter())}>초기화</Button>
        </VStack>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default CardFilter;
