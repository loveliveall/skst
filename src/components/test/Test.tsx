import React from 'react';

import Table from '@/components/common/Table';
import { CARD, getCardIconAssetPath } from '@/data/cardList';
import { CARD_SKILL } from '@/data/cardSkill';
import { SKILL } from '@/data/skill';
import { SKILL_EFFECT_TYPE } from '@/data/skillEffectType';
import { SKILL_TARGET } from '@/data/skillTarget';
import { SKILL_TRIGGER_TYPE } from '@/data/skillTriggerType';

const Test: React.FC = () => {
  const data = Object.keys(CARD).map(Number).filter((id) => CARD_SKILL[id] !== undefined).map((id) => {
    const active = SKILL[CARD_SKILL[id].specialityId].detail;
    const passive = SKILL[CARD_SKILL[id].individuality.passiveId].detail;
    const liveId = CARD_SKILL[id].individuality?.liveId;
    const live = liveId === undefined ? liveId : SKILL[liveId].detail;
    const getString = (skill: typeof active | undefined) => {
      if (skill === undefined) {
        return 'No live skill';
      }
      const base = `${skill.triggerProb / 100}% 확률:
        ${SKILL_EFFECT_TYPE[skill.effectTypeId].desc}
        (${skill.effectValue.join(', ')}),
        대상: ${SKILL_TARGET[skill.skillTargetId].krName}`;
      if (skill.timing === 'onTrigger') {
        return `${base}, ${skill.triggerValue} ${SKILL_TRIGGER_TYPE[skill.triggerTypeId].krDesc}`;
      }
      return base;
    };
    return {
      id,
      active: getString(active),
      passive: getString(passive),
      live: getString(live),
    };
  });
  return (
    <Table
      column={[
        { title: 'ID', render: (rowData) => <span>{rowData.id}</span> },
        {
          title: '아이콘',
          render: (rowData) => (
            <img
              src={getCardIconAssetPath(rowData.id, false)}
              alt="icon"
            />
          ),
        },
        { title: '특기', render: (rowData) => <span>{rowData.active}</span> },
        { title: '패시브', render: (rowData) => <span>{rowData.passive}</span> },
        { title: '라이브', render: (rowData) => <span>{rowData.live}</span> },
      ]}
      data={data}
      pageSize={50}
    />
  );
};

export default Test;
