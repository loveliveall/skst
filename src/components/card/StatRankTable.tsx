import React from 'react';
import styled from 'styled-components';
import { PARAMETER } from '@/data/cardParameter';
import { FULL_CARD_LIST, CARD } from '@/data/cardList';

const StyledTable = styled.table`
  border: 1px solid black;
  border-collapse: collapse;

  td, th {
    text-align: center;
    padding: 8px;
    border: 1px solid black;
    white-space: nowrap;
  }
`;

interface OwnProps {
  id: number,
  sameAttribute: boolean,
  sameRole: boolean,
}
type StatRankTableProps = OwnProps;

const StatRankTable: React.FC<StatRankTableProps> = ({
  id, sameAttribute, sameRole,
}) => {
  const card = CARD[id];
  const targetCardList = FULL_CARD_LIST.filter((c) => (
    (!sameAttribute || card.attributeId === c.attributeId)
    && (!sameRole || card.roleId === c.roleId)
  ));
  const parameter = PARAMETER[id];
  const maxUncap = parameter.length - 1;
  const uncapArray = [...Array(maxUncap + 1).keys()];
  const getParameterRank = (stat: 'appl' | 'stam' | 'tech') => uncapArray.map((uncap) => {
    const targetParam = parameter[uncap][stat];
    if (targetParam === 0) return null;
    return targetCardList.filter((c) => c.uncap === uncap).reduce((acc, curr) => ({
      rank: acc.rank + (curr[stat] > targetParam ? 1 : 0),
      tie: acc.tie + (curr[stat] === targetParam ? 1 : 0),
      total: acc.total + (curr[stat] !== 0 ? 1 : 0),
    }), { rank: 1, tie: -1, total: 0 });
  });

  return (
    <StyledTable>
      <tbody>
        <tr>
          <td>한돌</td>
          {uncapArray.map((uncap) => (
            <td key={uncap}>{uncap}</td>
          ))}
        </tr>
        {(['appl', 'stam', 'tech'] as const).map((stat) => {
          const statName = {
            appl: '어필',
            stam: '스태미너',
            tech: '테크닉',
          };
          type Color = [number, number, number];
          const blend = (color1: Color, color2: Color, ratio: number) => [0, 1, 2].map((idx) => Math.floor(
            color1[idx] * ratio + color2[idx] * (1 - ratio),
          ));
          const getCellColorCode = (alpha: number) => {
            const red: Color = [230, 124, 115];
            const yellow: Color = [255, 213, 101];
            const green: Color = [87, 187, 138];
            const result = alpha > 0.5 ? blend(red, yellow, 2 * alpha - 1) : blend(yellow, green, 2 * alpha);
            return `#${result.reduce((acc, curr) => `${acc}${curr.toString(16)}`, '')}`;
          };
          return (
            <tr key={stat}>
              <td>{statName[stat]}</td>
              {getParameterRank(stat).map((rankInfo) => {
                if (rankInfo === null) return <td key={Math.random()} />;
                const rankPercent = (rankInfo.rank - 1 + rankInfo.tie / 2) / (rankInfo.total - 1);
                return (
                  <td
                    key={Math.random()}
                    style={{
                      backgroundColor: getCellColorCode(rankPercent),
                    }}
                  >
                    {`#${rankInfo.rank}/${rankInfo.total}${rankInfo.tie !== 0 ? ` (${rankInfo.tie})` : ''}`}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
};

export default StatRankTable;
