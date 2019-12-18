import React from 'react';
import styled from 'styled-components';

import { FlexBox } from '@/components/Styles';

const OuterDiv = styled.div`
  width: 100%;
`;

const NavGroup = styled(FlexBox)`
  padding: 4px;
`;

const TextAlignDiv = styled.div`
  display: flex;
  align-items: center;
  padding-left: 8px;
  padding-right: 8px;
`;

const StyledButton = styled.button`
  border: 1px solid black;
  background: none;
  outline: none;
  box-shadow: none;
  border-radius: 4px;
  font-size: 0.5em;
  padding: 8px 16px 8px 16px;

  &:hover:enabled {
    cursor: pointer;
    background: #111;
    color: #f1f1f1;
  }
  &:disabled {
    border-color: gray;
  }
`;

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

interface OwnProps<RowData extends object> {
  column: {
    title: string,
    render: (rowData: RowData) => JSX.Element,
    customSort?: (a: RowData, b: RowData) => number,
  }[],
  data: RowData[],
}
type TableProps<RowData extends object> = OwnProps<RowData>;
type TableComp = <RowData extends object>(props: TableProps<RowData>) => React.ReactElement;

const Table: TableComp = ({
  column, data,
}) => {
  const PAGE_SIZE = 100;
  const MAX_PAGE = Math.floor(data.length / PAGE_SIZE) + 1;
  const [orderedData, setOrderedData] = React.useState(data);
  const [page, setPage] = React.useState(1);
  const [sortBy, setSortBy] = React.useState<[number | undefined, 'asc' | 'desc']>([undefined, 'asc']);

  return (
    <OuterDiv>
      <NavGroup>
        <StyledButton
          disabled={page === 1}
          onClick={() => {
            if (page > 1) {
              setPage(page - 1);
            }
          }}
        >
          <i className="fas fa-chevron-left" />
        </StyledButton>
        <TextAlignDiv>
          {`${page}/${MAX_PAGE}`}
        </TextAlignDiv>
        <StyledButton
          disabled={page === MAX_PAGE}
          onClick={() => {
            if (page < MAX_PAGE) {
              setPage(page + 1);
            }
          }}
        >
          <i className="fas fa-chevron-right" />
        </StyledButton>
      </NavGroup>
      <StyledTable>
        <thead>
          <tr>
            <th>#</th>
            {column.map((col, idx) => {
              const sortFn = col.customSort;
              if (sortFn) {
                const suffix = (() => {
                  if (sortBy[0] === undefined) return <i className="fas fa-sort" />;
                  if (sortBy[0] !== idx) return <i className="fas fa-sort" />;
                  if (sortBy[0] === idx) {
                    if (sortBy[1] === 'asc') {
                      return <i className="fas fa-sort-up" />;
                    }
                    return <i className="fas fa-sort-down" />;
                  }
                  return null;
                })();
                return (
                  <th
                    key={Math.random()}
                    onClick={() => {
                      if ((sortBy[0] === undefined)
                      || (sortBy[0] !== idx)) {
                        setSortBy([idx, 'asc']);
                        setOrderedData([...orderedData].sort(sortFn));
                      } else if (sortBy[0] === idx && sortBy[1] === 'asc') {
                        setSortBy([idx, 'desc']);
                        setOrderedData([...orderedData].sort((a, b) => -sortFn(a, b)));
                      } else {
                        setSortBy([undefined, 'asc']);
                        setOrderedData(data);
                      }
                    }}
                    style={{
                      backgroundColor: sortBy[0] === idx ? '#d1d1d1' : '',
                    }}
                  >
                    {col.title}
                    {' '}
                    {suffix}
                  </th>
                );
              }
              return (
                <th key={Math.random()}>{col.title}</th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {orderedData.slice(PAGE_SIZE * (page - 1), PAGE_SIZE * page).map((d, dIdx) => (
            <tr key={Math.random()}>
              <td>{(page - 1) * PAGE_SIZE + dIdx + 1}</td>
              {column.map((col) => (
                <td key={Math.random()}>
                  {col.render(d)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </OuterDiv>
  );
};

export default Table;
