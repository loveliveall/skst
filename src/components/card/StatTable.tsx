import React from 'react';
import styled from 'styled-components';
import { PARAMETER } from '@/data/cardParameter';
import { FULL_CARD_LIST } from '@/data/cardList';

const StyledTable = styled.table`
  border: 1px solid black;
  border-collapse: collapse;

  td, th {
    text-align: center;
    padding: 4px;
    border: 1px solid black;
    white-space: nowrap;
  }
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
            <>
              <td>{uncap}</td>
              {uncap !== maxUncap && <td>-</td>}
            </>
          ))}
        </tr>
        <tr>
          <td>어필</td>
          {uncapArray.map((uncap) => {
            const applExist = parameter[uncap].appl !== 0;
            return (
              <>
                <td>{applExist ? parameter[uncap].appl : '?'}</td>
                {uncap !== maxUncap && (
                  <td>{applExist ? `+${parameter[uncap + 1].appl - parameter[uncap].appl}` : '?'}</td>
                )}
              </>
            );
          })}
        </tr>
        <tr>
          <td>동일 한돌 내 어필 순위</td>
          {uncapArray.map((uncap) => {
            if (parameter[uncap].appl !== 0) {
              const sameUncapList = FULL_CARD_LIST.filter((card) => card.uncap === uncap);
              const rank = sameUncapList.sort((a, b) => b.appl - a.appl).findIndex((card) => card.id === id) + 1;
              return (
                <>
                  <td>{`#${rank}/${sameUncapList.length}`}</td>
                  {uncap !== maxUncap && <td />}
                </>
              );
            }
            return (
              <>
                <td>?</td>
                {uncap !== maxUncap && <td />}
              </>
            );
          })}
        </tr>
        <tr>
          <td>스태미너</td>
          {uncapArray.map((uncap) => {
            const stamExist = parameter[uncap].stam !== 0;
            return (
              <>
                <td>{stamExist ? parameter[uncap].stam : '?'}</td>
                {uncap !== maxUncap && (
                  <td>{stamExist ? `+${parameter[uncap + 1].stam - parameter[uncap].stam}` : '?'}</td>
                )}
              </>
            );
          })}
        </tr>
        <tr>
          <td>동일 한돌 내 스태미너 순위</td>
          {uncapArray.map((uncap) => {
            if (parameter[uncap].stam !== 0) {
              const sameUncapList = FULL_CARD_LIST.filter((card) => card.uncap === uncap);
              const rank = sameUncapList.sort((a, b) => b.stam - a.stam).findIndex((card) => card.id === id) + 1;
              return (
                <>
                  <td>{`#${rank}/${sameUncapList.length}`}</td>
                  {uncap !== maxUncap && <td />}
                </>
              );
            }
            return (
              <>
                <td>?</td>
                {uncap !== maxUncap && <td />}
              </>
            );
          })}
        </tr>
        <tr>
          <td>테크닉</td>
          {uncapArray.map((uncap) => {
            const techExist = parameter[uncap].tech !== 0;
            return (
              <>
                <td>{techExist ? parameter[uncap].tech : '?'}</td>
                {uncap !== maxUncap && (
                  <td>{techExist ? `+${parameter[uncap + 1].tech - parameter[uncap].tech}` : '?'}</td>
                )}
              </>
            );
          })}
        </tr>
        <tr>
          <td>동일 한돌 내 테크닉 순위</td>
          {uncapArray.map((uncap) => {
            if (parameter[uncap].tech !== 0) {
              const sameUncapList = FULL_CARD_LIST.filter((card) => card.uncap === uncap);
              const rank = sameUncapList.sort((a, b) => b.tech - a.tech).findIndex((card) => card.id === id) + 1;
              return (
                <>
                  <td>{`#${rank}/${sameUncapList.length}`}</td>
                  {uncap !== maxUncap && <td />}
                </>
              );
            }
            return (
              <>
                <td>?</td>
                {uncap !== maxUncap && <td />}
              </>
            );
          })}
        </tr>
      </tbody>
    </StyledTable>
  );
};

export default StatTable;
