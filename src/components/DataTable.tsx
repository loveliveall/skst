import React from 'react';
import {
  useColorModeValue,
  Table,
  Thead,
  Tbody,
  Tr,
  Th as ChakraTh, TableColumnHeaderProps,
  Td as ChakraTd, TableCellProps,
  VStack,
} from '@chakra-ui/react';
import { ArrowUpDownIcon, ArrowUpIcon, ArrowDownIcon } from '@chakra-ui/icons';

import FixedWrapper from '@/components/FixedWrapper';
import Pagination from '@/components/Pagination';

const Td: React.FC<TableCellProps> = ({ children, ...props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <ChakraTd textAlign="center" paddingX={4} paddingY={2} whiteSpace="nowrap" {...props}>
    {children}
  </ChakraTd>
);
const Th: React.FC<TableColumnHeaderProps> = ({ children, ...props }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <ChakraTh textAlign="center" paddingX={4} paddingY={2} whiteSpace="nowrap" {...props}>
    {children}
  </ChakraTh>
);

type SortOrder = 'asc' | 'desc';
type Column<RowData extends object> = {
  title: string,
  render: (rowData: RowData) => React.ReactElement,
  customSort?: (a: RowData, b: RowData) => number,
  defaultSort?: SortOrder,
};

type DataTableProps<RowData extends object> = {
  columns: Column<RowData>[],
  data: RowData[],
  pageSize: number,
};
type DataTableComp = <RowData extends object>(
  props: React.PropsWithChildren<DataTableProps<RowData>>
) => React.ReactElement;

type SortBy = {
  colIdx: number,
  order: SortOrder,
} | null;

function getDefaultSortBy<RowData extends object>(columns: Column<RowData>[]): SortBy {
  const defaultSortColIdx = columns.findIndex((col) => col.defaultSort !== undefined);
  const defaultSortBy: SortBy = defaultSortColIdx === -1 ? null : {
    colIdx: defaultSortColIdx,
    // Non-null 1: defaultSortIdx comes from columns.findIndex
    // Non-null 2: defaultSortIdx !== -1 so we found element s.t. col.defaultSort !=== undefined
    order: columns[defaultSortColIdx]!.defaultSort!,
  };
  return defaultSortBy;
}

const DataTable: DataTableComp = ({
  columns, data, pageSize,
}) => {
  const MAX_PAGE = Math.max(Math.ceil(data.length / pageSize), 1);
  const sortColBgColor = useColorModeValue('gray.200', 'gray.700');
  const [page, setPage] = React.useState(1); // 1-indexed
  const [sortBy, setSortBy] = React.useState(getDefaultSortBy(columns));
  const sortedData = React.useMemo(() => {
    if (sortBy === null) return data;
    return [...data].sort((a, b) => {
      const sortFn = columns[sortBy.colIdx]?.customSort;
      if (sortFn !== undefined) {
        return (sortBy.order === 'desc' ? -1 : 1) * sortFn(a, b);
      }
      console.error(`Cannot sort with column ${sortBy.colIdx}`);
      return 0;
    });
  }, [columns, data, sortBy]);

  React.useEffect(() => {
    setPage(1);
    setSortBy(getDefaultSortBy(columns));
  }, [data, columns]);

  const TableHeader = React.useMemo(() => (
    <>
      <Th>#</Th>
      {columns.map((col, idx) => {
        const sortFn = col.customSort;
        if (sortFn !== undefined) {
          // Sortable
          const Icon = (() => {
            if (sortBy === null) return ArrowUpDownIcon;
            if (sortBy.colIdx !== idx) return ArrowUpDownIcon;
            if (sortBy.order === 'asc') return ArrowUpIcon;
            return ArrowDownIcon;
          })();
          return (
            <Th
              key={col.title}
              cursor="pointer"
              onClick={() => {
                if (sortBy === null || sortBy.colIdx !== idx) setSortBy({ colIdx: idx, order: 'asc' });
                else if (sortBy.order === 'asc') setSortBy({ colIdx: idx, order: 'desc' });
                else setSortBy(null);
              }}
              bgColor={sortBy?.colIdx === idx ? sortColBgColor : undefined}
            >
              {col.title}
              &nbsp;
              <Icon />
            </Th>
          );
        }
        return (
          <Th key={col.title}>{col.title}</Th>
        );
      })}
    </>
  ), [columns, sortBy, setSortBy]);

  const TableBody = React.useMemo(() => (
    <>
      {sortedData.slice((page - 1) * pageSize, page * pageSize).map((d, dIdx) => (
        <Tr key={Math.random()}>
          <Td>{(page - 1) * pageSize + dIdx + 1}</Td>
          {columns.map((col) => (
            <Td key={col.title}>
              {col.render(d)}
            </Td>
          ))}
        </Tr>
      ))}
    </>
  ), [sortedData, page, pageSize, columns]);

  return (
    <VStack>
      <Pagination
        page={page}
        pageCount={MAX_PAGE}
        setPage={setPage}
      />
      <FixedWrapper>
        <Table size="sm">
          <Thead>
            <Tr>
              {TableHeader}
            </Tr>
          </Thead>
          <Tbody>
            {TableBody}
          </Tbody>
        </Table>
      </FixedWrapper>
      <Pagination
        page={page}
        pageCount={MAX_PAGE}
        setPage={setPage}
      />
    </VStack>
  );
};

export default DataTable;
