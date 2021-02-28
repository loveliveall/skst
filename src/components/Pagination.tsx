import React from 'react';
import {
  Button,
  IconButton,
  HStack,
  Text,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

type PageButtonProps = {
  page: number,
  setPage: (newV: number) => void,
  active?: boolean,
};
const PageButton: React.FC<PageButtonProps> = ({ page, setPage, active }) => (
  <Button
    onClick={() => setPage(page)}
    size="sm"
    colorScheme={active ? 'telegram' : undefined}
  >
    {page}
  </Button>
);

const TripleDots: React.FC = () => (
  <Text>…</Text>
);

export type PaginationProps = {
  page: number,
  pageCount: number,
  setPage: (newV: number) => void,
};

const Pagination: React.FC<PaginationProps> = ({
  page, setPage, pageCount,
}) => {
  const range = new Array(5).fill(null)
    .map((_, idx) => page + idx - 2)
    .filter((e) => e > 1 && e < pageCount);
  const onNextPage = () => {
    setPage(Math.min(pageCount, page + 1));
  };
  const onPrevPage = () => {
    setPage(Math.max(1, page - 1));
  };
  return (
    <HStack>
      <IconButton aria-label="prev-page" onClick={onPrevPage} icon={<ChevronLeftIcon />} size="sm" />
      <PageButton page={1} setPage={setPage} active={page === 1} />
      {range.length > 0 && range[0] !== 2 && <TripleDots />}
      {range.map((p) => (
        <PageButton key={p} page={p} setPage={setPage} active={page === p} />
      ))}
      {range.length > 0 && range[range.length - 1] !== pageCount - 1 && <TripleDots />}
      {pageCount !== 1 && <PageButton page={pageCount} setPage={setPage} active={page === pageCount} />}
      <IconButton aria-label="next-page" onClick={onNextPage} icon={<ChevronRightIcon />} size="sm" />
    </HStack>
  );
};

export default Pagination;
