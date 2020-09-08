import React from 'react';
import styled from 'styled-components';

import { FlexBox, FixedWrapper } from '@/components/Styles';

import SlotSettings from './SlotSettings';

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
  word-break: keep-all;
`;

const VoltageCalculator: React.FC = () => (
  <VerticalFlex>
    <RowWrapper>
      <h2>볼티지 계산기 (베타)</h2>
    </RowWrapper>
    <RowWrapper>
      <CenterP>
        여기서 계산되는 볼티지 값은 추정 수치입니다.
        <br />
        해당 수치는 아래 식으로 계산됩니다:
        <br />
        (편성 스탯) = (고유 스탯) * (편성 스탯 버프 + 게스트 스탯 버프) + (악세서리 스탯)
        <br />
        (볼티지) = (편성 스탯) * (기본 스탯 증감) * (스탯 증감) * (크리티컬) * (판정 계수) * (콤보 계수)
        * (볼티지 버프) * (SP 계수) * (AC 계수) * (작전 계수) * (속성 계수) * (스태미너 계수)
        <br />
        해당 식은&nbsp;
        <a
          href="https://twitter.com/506Farley/status/1183093133170507776"
          target="_blank"
          rel="noreferrer"
        >
          이 트윗
        </a>
        을 참고하여 편의를 위해 일부 요소를 변형한 결과입니다.
        <br />
        <strong>
          크리티컬 관련 추정은&nbsp;
          <a href="/cards">
            카드 목록
          </a>
          에 있는 가정을 그대로 적용한 수치입니다.
        </strong>
        <br />
        크리티컬률 계산에 사용하는 스탯은 아래 식으로 계산됩니다:
        <br />
        (유효 스탯) = (편성 스탯) * (기본 스탯 증감) * (스탯 증감) * (속성 계수)
      </CenterP>
    </RowWrapper>
    <RowWrapper>
      <SlotSettings />
    </RowWrapper>
  </VerticalFlex>
);

export default VoltageCalculator;
