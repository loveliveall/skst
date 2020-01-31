import React from 'react';
import styled from 'styled-components';
import { PARAMETER } from '@/data/cardParameter';

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

const SmallFont = styled.td`
  font-size: 0.7em;
`;

interface OwnProps {
  id: number,
}
type StatTableProps = OwnProps;

const StatTable: React.FC<StatTableProps> = ({
  id,
}) => {
  const parameter = PARAMETER[id];
  const maxUncap = parameter.length - 1;
  const uncapArray = [...Array(maxUncap + 1).keys()];
  return (
    <StyledTable>
      <tbody>
        <tr>
          <td>한돌</td>
          {uncapArray.map((uncap) => (
            <React.Fragment key={uncap}>
              <td>{uncap}</td>
              {uncap !== maxUncap && <td>-</td>}
            </React.Fragment>
          ))}
        </tr>
        {(['appl', 'stam', 'tech'] as const).map((stat) => {
          const statName = {
            appl: '어필',
            stam: '스태미너',
            tech: '테크닉',
          };
          const statColor = {
            appl: '#E51C60',
            stam: '#078A21',
            tech: '#A56A0A',
          };
          return (
            <tr style={{ color: statColor[stat] }} key={stat}>
              <td>{statName[stat]}</td>
              {uncapArray.map((uncap) => {
                const statExist = parameter[uncap][stat] !== 0;
                return (
                  <React.Fragment key={uncap}>
                    <td>{statExist ? parameter[uncap][stat] : '?'}</td>
                    {uncap !== maxUncap && (
                      <SmallFont>
                        {statExist ? `+${parameter[uncap + 1][stat] - parameter[uncap][stat]}` : '?' }
                      </SmallFont>
                    )}
                  </React.Fragment>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </StyledTable>
  );
};

export default StatTable;
