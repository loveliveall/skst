import React from 'react';

import Table from '@/components/common/Table';
import { CARD, getCardIconAssetPath } from '@/data/cardList';
import { CARD_SKILL } from '@/data/cardSkill';
import { getSkillInfoKR } from '@/data/skill';

const Test: React.FC = () => {
  const data = Object.keys(CARD).map(Number).filter((id) => CARD_SKILL[id] !== undefined).map((id) => {
    const activeInfo = getSkillInfoKR(CARD_SKILL[id].specialityId);
    const passiveInfo = getSkillInfoKR(CARD_SKILL[id].individuality.passiveId);
    const { liveId } = CARD_SKILL[id].individuality;
    const liveInfo = liveId !== undefined ? getSkillInfoKR(liveId) : undefined;
    const getString = (info: typeof activeInfo) => {
      if (info === undefined) return '';
      const prob = info.probString === '' ? '' : `발동확률: ${info.probString}`;
      return [prob, info.triggerString, info.effectString, `대상: ${info.targetString}`].join('. ');
    };
    return {
      id,
      active: {
        iconAssetPath: activeInfo?.iconAssetPath,
        str: getString(activeInfo),
      },
      passive: {
        iconAssetPath: passiveInfo?.iconAssetPath,
        str: getString(passiveInfo),
      },
      live: {
        iconAssetPath: liveInfo?.iconAssetPath,
        str: getString(liveInfo),
      },
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
              width="64px"
            />
          ),
        },
        {
          title: '특기',
          render: (rowData) => (
            <span>
              <img src={rowData.active.iconAssetPath} alt="img" width="64px" />
              {rowData.active.str}
            </span>
          ),
        },
        {
          title: '패시브',
          render: (rowData) => (
            <span>
              <img src={rowData.passive.iconAssetPath} alt="img" width="64px" />
              {rowData.passive.str}
            </span>
          ),
        },
        {
          title: '라이브',
          render: (rowData) => (
            <span>
              <img src={rowData.live.iconAssetPath} alt="img" width="64px" />
              {rowData.live.str}
            </span>
          ),
        },
      ]}
      data={data}
      pageSize={50}
    />
  );
};

export default Test;
