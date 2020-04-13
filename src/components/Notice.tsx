import React from 'react';
import styled from 'styled-components';

const BorderedDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  margin-bottom: 8px;
  word-break: keep-all;
  & * {
    padding-left: 8px;
    padding-right: 8px;
  }
`;

const DenseH3 = styled.h3`
  margin-bottom: 0px;
`;
const StyledP = styled.p`
  text-align: center;
`;

interface OwnProps {
  hidden?: boolean,
}

const Notice: React.FC<OwnProps> = ({
  hidden,
}) => {
  if (hidden) return <div />;
  return (
    <BorderedDiv>
      <DenseH3>공지</DenseH3>
      <StyledP>
        개인 사정으로 인해 2020.05.14. - 2020.06.11. 동안 업데이트가 없을 예정입니다.
      </StyledP>
    </BorderedDiv>
  );
};

export default Notice;
