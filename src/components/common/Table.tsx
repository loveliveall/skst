import React from 'react';
import styled from 'styled-components';

import { FlexBox, StyledButton } from '@/components/Styles';

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

const NavigationButton = styled(StyledButton)`
  font-size: 0.5em;
  margin-left: 2px;
  margin-right: 2px;
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

  .clickable {
    cursor: pointer;
  }
`;

interface OwnProps<RowData extends object> {
  column: {
    title: string,
    render: (rowData: RowData) => JSX.Element,
    customSort?: (a: RowData, b: RowData) => number,
    defaultSort?: 'asc' | 'desc',
  }[],
  data: RowData[],
  pageSize: number,
}
type TableProps<RowData extends object> = OwnProps<RowData>;
type TableComp = <RowData extends object>(props: TableProps<RowData>) => React.ReactElement;

const Table: TableComp = ({
  column, data, pageSize,
}) => {
  const MAX_PAGE = Math.floor((data.length - 1) / pageSize) + 1;
  const PAGE_JUMP = 5;
  const [page, setPage] = React.useState(1);
  const defaultSortIdx = column.findIndex((col) => col.defaultSort !== undefined);
  const defaultSortBy: [number | undefined, 'asc' | 'desc'] = defaultSortIdx === -1 ? [undefined, 'asc'] : (
    [defaultSortIdx, column[defaultSortIdx].defaultSort as 'asc' | 'desc']
  );
  const [sortBy, setSortBy] = React.useState(defaultSortBy);

  const sortIdx = sortBy[0];
  const sortedData = sortIdx === undefined ? data : (
    [...data].sort((a, b) => {
      const sortFn = column[sortIdx].customSort;
      if (sortFn) {
        return (sortBy[1] === 'desc' ? -1 : 1) * sortFn(a, b);
      }
      console.error('Cannot sort with this column');
      return 0;
    })
  );

  React.useEffect(() => {
    setPage(1);
    setSortBy(defaultSortBy);
  }, [data]);

  const TableNavigation = (
    <NavGroup>
      <NavigationButton
        disabled={page === 1}
        onClick={() => {
          const tmp = page - PAGE_JUMP;
          setPage(tmp >= 1 ? tmp : 1);
        }}
      >
        <i className="fas fa-angle-double-left" />
      </NavigationButton>
      <NavigationButton
        disabled={page === 1}
        onClick={() => {
          if (page > 1) {
            setPage(page - 1);
          }
        }}
      >
        <i className="fas fa-angle-left" />
      </NavigationButton>
      <TextAlignDiv>
        {`${page}/${MAX_PAGE}`}
      </TextAlignDiv>
      <NavigationButton
        disabled={page === MAX_PAGE}
        onClick={() => {
          if (page < MAX_PAGE) {
            setPage(page + 1);
          }
        }}
      >
        <i className="fas fa-angle-right" />
      </NavigationButton>
      <NavigationButton
        disabled={page === MAX_PAGE}
        onClick={() => {
          const tmp = page + PAGE_JUMP;
          setPage(tmp <= MAX_PAGE ? tmp : MAX_PAGE);
        }}
      >
        <i className="fas fa-angle-double-right" />
      </NavigationButton>
    </NavGroup>
  );

  return (
    <OuterDiv>
      {TableNavigation}
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
                    className="clickable"
                    onClick={() => {
                      if ((sortBy[0] === undefined)
                      || (sortBy[0] !== idx)) {
                        setSortBy([idx, 'asc']);
                      } else if (sortBy[0] === idx && sortBy[1] === 'asc') {
                        setSortBy([idx, 'desc']);
                      } else {
                        setSortBy([undefined, 'asc']);
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
          {sortedData.slice(pageSize * (page - 1), pageSize * page).map((d, dIdx) => (
            <tr key={Math.random()}>
              <td>{(page - 1) * pageSize + dIdx + 1}</td>
              {column.map((col) => (
                <td key={Math.random()}>
                  {col.render(d)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </StyledTable>
      {TableNavigation}
    </OuterDiv>
  );
};

export default Table;
