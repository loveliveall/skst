import React from 'react';
import styled from 'styled-components';

import { FlexBox, FixedWrapper } from '@/components/Styles';

import Settings from './Settings';
import DeckSettings from './DeckSettings';

const MobileOnlyDiv = styled.div`
  // Hide on desktop
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const VerticalFlex = styled(FlexBox)`
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const RowWrapper = styled(FixedWrapper)`
  padding-top: 4px;
  padding-bottom: 4px;
`;

const CenterP = styled.p`
  text-align: center;
  line-height: 1.6em;
`;

const DeckSimulator: React.FC = () => {
  console.log('test');
  return (
    <VerticalFlex>
      <MobileOnlyDiv>
        <RowWrapper>
          <h3 style={{ wordBreak: 'keep-all', textAlign: 'center' }}>본 화면은 PC 환경에 최적화 되어 있습니다.</h3>
        </RowWrapper>
      </MobileOnlyDiv>
      <RowWrapper>
        <CenterP>
          여기서 계산되는 보정 스탯은 추정치이니 참고용으로만 사용해 주세요.
          <br />
          보정 스탯은 (편성 스탯) * (기본 스탯 증감치) * (스탯 증감치) * (동속성 효과)로 계산됩니다.
        </CenterP>
        <CenterP>
          <strong>사용방법</strong>
          <br />
          라이브 편성에서 보이는 각 카드의 스탯을 입력하고 곡의 속성과 원하는 라이브 곡 효과들을 설정해 주세요.
          <br />
          설정한 곡 속성 및 라이브 곡 효과가 적용된 상태의 보정 스탯(추정)이 계산됩니다.
        </CenterP>
      </RowWrapper>
      <RowWrapper style={{ border: '1px solid black' }}>
        <Settings />
      </RowWrapper>
      <RowWrapper>
        <DeckSettings />
      </RowWrapper>
    </VerticalFlex>
  );
};


export default DeckSimulator;
