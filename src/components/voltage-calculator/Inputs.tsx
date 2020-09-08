import React from 'react';
import styled from 'styled-components';
import { Cell } from 'styled-css-grid';

const StyledInput = styled.input`
  margin-right: 4px;
  margin-left: 4px;
`;

interface InputProps {
  id: string,
  value: number,
  onChange: (value: number) => void,
}

export const PositiveIntegerInputCell: React.FC<InputProps> = ({
  id, value, onChange,
}) => (
  <Cell center middle>
    <span>
      <StyledInput
        id={id}
        type="number"
        step="1"
        value={value}
        min="0"
        onChange={(event) => onChange(Number(event.target.value))}
        onFocus={(event) => event.target.select()}
      />
    </span>
  </Cell>
);

export const PositivePercentInputCell: React.FC<InputProps> = ({
  id, value, onChange,
}) => (
  <Cell center middle>
    <span>
      <StyledInput
        id={id}
        type="number"
        step="0.01"
        value={value}
        min="0"
        onChange={(event) => onChange(Number(event.target.value))}
        onFocus={(event) => event.target.select()}
      />
      %
    </span>
  </Cell>
);

interface BooleanInputProps {
  id: string,
  checked: boolean,
  onToggle: () => void,
  label: string,
}
export const BooleanInputCell: React.FC<BooleanInputProps> = ({
  id, checked, onToggle, label,
}) => (
  <Cell center middle>
    <span>
      <StyledInput
        id={id}
        type="checkbox"
        checked={checked}
        onChange={() => onToggle()}
      />
      {label}
    </span>
  </Cell>
);

export const PercentInputCell: React.FC<InputProps> = ({
  id, value, onChange,
}) => (
  <Cell center middle>
    <span>
      <StyledInput
        id={id}
        type="number"
        step="0.01"
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        onFocus={(event) => event.target.select()}
      />
      %
    </span>
  </Cell>
);
