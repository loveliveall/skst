import React from 'react';
import styled from 'styled-components';
import { Cell as LibraryCell } from 'styled-css-grid';

export const Cell = styled(LibraryCell)`
  min-width: 280px;
`;

export const LineCell: React.FC = () => (
  <Cell center middle><div style={{ borderTop: '1px solid black' }} /></Cell>
);

export const ROW_NUM = 42;
