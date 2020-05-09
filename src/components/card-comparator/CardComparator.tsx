import React from 'react';
import styled from 'styled-components';

import { FlexBox, FixedWrapper } from '@/components/Styles';

import Settings from '@/components/deck-simulator/Settings';
import CardSettings from './CardSettings';
import CardSelectModal from './CardSelectModal';

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

const CardComparator: React.FC = () => (
  <>
    <VerticalFlex>
      <RowWrapper>
        <CenterP>
          여기서 계산되는 스탯은 아래 식을 통해 계산됩니다:
          <br />
          (카드 기본 스탯) * (인연 버프) * (기본 스탯 증감) * (스탯 증감) * (동속성 효과)
          <br />
          카드 자체의 특기, 개성(패시브), 타입 등은 계산에 영향을 미치지 않습니다! 주의해주세요.
          <br />
          <strong>
            크리티컬 관련 추정은&nbsp;
            <a href="/cards">
              카드 목록
            </a>
            에 있는 가정을 그대로 적용한 수치입니다.
          </strong>
          <br />
          인연 레벨 85 이상의 인연 버프는 추정치를 적용한 수치입니다.
          <br />
          추정치 식은 Math.floor(200 * Math.pow(LV - 1, 1/3) - 50) 입니다.
        </CenterP>
      </RowWrapper>
      <RowWrapper style={{ border: '1px solid black' }}>
        <Settings />
      </RowWrapper>
      <RowWrapper>
        <CardSettings />
      </RowWrapper>
    </VerticalFlex>
    <CardSelectModal />
  </>
);

export default CardComparator;
