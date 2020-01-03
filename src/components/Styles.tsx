import styled from 'styled-components';

export const FixedWrapper = styled.div`
  overflow-x: auto;
  max-width: calc(100vw - 20px);
`;

export const FlexBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const StyledButton = styled.button`
  border: 1px solid black;
  background: none;
  outline: none;
  box-shadow: none;
  border-radius: 4px;
  font-size: 1em;
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
