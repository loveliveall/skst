import React from 'react';
import { Cell, LineCell } from './common';

const Legends: React.FC = () => (
  <>
    <Cell />
    <Cell center middle><strong>대미지 한계치</strong></Cell>
    <Cell center middle><strong>고유 어필</strong></Cell>
    <Cell center middle><strong>고유 테크닉</strong></Cell>
    <Cell center middle><strong>크리율 보정치</strong></Cell>
    <Cell center middle><strong>동속성 여부</strong></Cell>

    <Cell center middle>
      <span>
        <strong>작전 악세서리 설정</strong>
        <br />
        <strong>(카드와 동일 속성은 체크)</strong>
      </span>
    </Cell>
    <Cell center middle><strong>편성 어필 버프</strong></Cell>
    <Cell center middle><strong>편성 테크닉 버프</strong></Cell>
    <Cell center middle><strong>게스트 어필 버프</strong></Cell>
    <Cell center middle><strong>게스트 테크닉 버프</strong></Cell>

    <Cell center middle><strong>기본 어필 버프</strong></Cell>
    <Cell center middle><strong>기본 어필 디버프</strong></Cell>
    <Cell center middle><strong>기본 테크닉 버프</strong></Cell>
    <Cell center middle><strong>기본 테크닉 디버프</strong></Cell>
    <Cell center middle><strong>어필 버프</strong></Cell>

    <Cell center middle><strong>*어필 디버프</strong></Cell>
    <Cell center middle><strong>테크닉 버프</strong></Cell>
    <Cell center middle><strong>*테크닉 디버프</strong></Cell>
    <Cell center middle><strong>판정 계수</strong></Cell>
    <Cell center middle><strong>콤보 계수</strong></Cell>

    <Cell center middle><strong>볼티지 추가 버프</strong></Cell>
    <Cell center middle><strong>SP 발동 여부</strong></Cell>
    <Cell center middle><strong>AC 진입 여부</strong></Cell>
    <Cell center middle><strong>작전 Vo 계수</strong></Cell>
    <Cell center middle><strong>스태미너 계수</strong></Cell>

    <Cell center middle>
      <span>
        <strong>키즈나 보드</strong>
        <br />
        <strong>크리티컬률 추가</strong>
      </span>
    </Cell>
    <Cell center middle>
      <span>
        <strong>키즈나 보드</strong>
        <br />
        <strong>크리티컬치 추가</strong>
      </span>
    </Cell>
    <Cell center middle>
      <span>
        <strong>키즈나 보드</strong>
        <br />
        <strong>속성 일치 보너스 추가</strong>
      </span>
    </Cell>

    <LineCell />
    <Cell center middle><strong>편성 어필</strong></Cell>
    <Cell center middle><strong>편성 테크닉</strong></Cell>

    <LineCell />
    <Cell center middle><strong>크리율 추정</strong></Cell>
    <Cell center middle><strong>볼티지 추정</strong></Cell>
    <Cell center middle><strong>크리티컬 볼티지 추정</strong></Cell>
    <Cell center middle><strong>볼티지 기댓값 추정</strong></Cell>

    <LineCell />
    <Cell center middle><strong>크리율 추정(해제 시)</strong></Cell>
    <Cell center middle><strong>볼티지 추정(해제 시)</strong></Cell>
    <Cell center middle><strong>크리티컬 볼티지 추정(해제 시)</strong></Cell>
    <Cell center middle><strong>볼티지 기댓값 추정(해제 시)</strong></Cell>
  </>
);

export default Legends;
