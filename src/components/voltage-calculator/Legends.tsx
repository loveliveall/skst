import React from 'react';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';
import { Cell, LineCell } from './common';

const Strong = styled.strong`
  cursor: help;
  border-bottom: 1px dotted black;
`;

const Legends: React.FC = () => (
  <>
    <Cell />
    <Cell center middle><span data-tip data-for="max-damage"><Strong>대미지 한계치</Strong></span></Cell>
    <ReactTooltip id="max-damage" aria-haspopup="true">
      <p>일반적으로 이야기하는 맥뎀을 입력합니다.</p>
      <p>상급은 50000, 상급+는 150000이 기본값입니다.</p>
    </ReactTooltip>
    <Cell center middle><span data-tip data-for="raw-stat"><Strong>고유 어필</Strong></span></Cell>
    <Cell center middle><span data-tip data-for="raw-stat"><Strong>고유 테크닉</Strong></span></Cell>
    <ReactTooltip id="raw-stat" aria-haspopup="true">
      <p>카드 정보에서 초록색 숫자를 제외한 스탯을 입력합니다.</p>
      <img src="/images/card_stat_help.jpg" alt="card-stat-help" />
    </ReactTooltip>
    <Cell center middle><span data-tip data-for="crit-base"><Strong>크리율 보정치</Strong></span></Cell>
    <ReactTooltip id="crit-base" aria-haspopup="true">
      <p>해당 카드의 크리 보정치를 입력합니다.</p>
      <p>
        크리 보정치는 이 사이트 카드 세부 정보에서 확인할 수 있으며,
        <br />
        일반적으로 세 스탯 중 테크닉이 가장 높은 수치일 때 15%p, 그 외엔 0%p의 값을 갖습니다.
      </p>
    </ReactTooltip>
    <Cell center middle><span data-tip data-for="is-same-attr"><Strong>동속성 여부</Strong></span></Cell>
    <ReactTooltip id="is-same-attr" aria-haspopup="true">
      <p>카드와 곡의 속성이 같을 경우 체크합니다.</p>
    </ReactTooltip>

    <Cell center middle>
      <span data-tip data-for="accessories">
        <Strong>작전 악세서리 설정</Strong>
        <br />
        <Strong>(카드와 동일 속성은 체크)</Strong>
      </span>
    </Cell>
    <ReactTooltip id="accessories" aria-haspopup="true">
      <p>카드가 포함된 작전의 악세서리 설정을 입력합니다.</p>
      <p>악세서리와 카드의 속성이 같은 경우, 해당 악세서리의 체크박스를 활성화 합니다.</p>
    </ReactTooltip>
    <Cell center middle><span data-tip data-for="formation-stat-buff"><Strong>편성 어필 버프</Strong></span></Cell>
    <Cell center middle><span data-tip data-for="formation-stat-buff"><Strong>편성 테크닉 버프</Strong></span></Cell>
    <ReactTooltip id="formation-stat-buff" aria-haspopup="true">
      <p>
        라이브 편성에 포함된 모든(자신 포함) 패시브 개성 및 패시브 히라메키 중
        <br />
        이 카드에 적용되는 스탯 버프들을 모두 더한 뒤(합연산) 총합을 입력합니다.
      </p>
      <p>
        예를 들어, 전원 기본 어필 추가 4.2%와 동작전 기본 어필 추가 7%의 효과를 받을 경우,
        <br />
        총 효과량은 11.2%입니다.
      </p>
    </ReactTooltip>
    <Cell center middle><span data-tip data-for="guest-stat-buff"><Strong>게스트 어필 버프</Strong></span></Cell>
    <Cell center middle><span data-tip data-for="guest-stat-buff"><Strong>게스트 테크닉 버프</Strong></span></Cell>
    <ReactTooltip id="guest-stat-buff" aria-haspopup="true">
      <p>
        게스트로 포함시키는 카드의 패시브 개성 및 패시브 히라메키 중
        <br />
        이 카드에 적용되는 스탯 버프들을 모두 더한 뒤(합연산) 총합을 입력합니다.
      </p>
    </ReactTooltip>

    <Cell center middle><span data-tip data-for="base-stat-buff"><Strong>기본 어필 버프</Strong></span></Cell>
    <Cell center middle><span data-tip data-for="base-stat-debuff"><Strong>기본 어필 디버프</Strong></span></Cell>
    <Cell center middle><span data-tip data-for="base-stat-buff"><Strong>기본 테크닉 버프</Strong></span></Cell>
    <Cell center middle><span data-tip data-for="base-stat-debuff"><Strong>기본 테크닉 디버프</Strong></span></Cell>
    <ReactTooltip id="base-stat-buff" aria-haspopup="true">
      <p>
        패시브 개성 및 패시브 히라메키를 제외한 &quot;기본 스탯 추가&quot; 중
        <br />
        이 카드에 적용되는 기본 스탯 버프들을 모두 더한 뒤(합연산) 총합을 입력합니다.
      </p>
      <p>
        대표적인 예시로, 페스 마리의 라이브 개성인 곡 시작 시 기본 어필 5% 추가,
        <br />
        음표 브로치 악세서리의 남은 체력 비례 기본 어필 추가 등이 여기에 포함됩니다.
      </p>
    </ReactTooltip>
    <ReactTooltip id="base-stat-debuff" aria-haspopup="true">
      <p>
        곡 기믹이나 AC 효과 등으로 인한 &quot;기본 스탯 감소&quot; 중
        <br />
        이 카드에 적용되는 기본 스탯 감소를 모두 더한 뒤(합연산) 총합을 입력합니다.
      </p>
      <p>
        대표적인 예시로, 곡 기믹에 의한 기본 어필 감소 15% 등이 여기에 포함되며,
        <br />
        이 효과는 초기 리코등에 의한 저하 효과 해제로&nbsp;
        <strong>해제되지 않습니다.</strong>
      </p>
    </ReactTooltip>

    <Cell center middle><span data-tip data-for="stat-buff"><Strong>어필 버프</Strong></span></Cell>
    <Cell center middle><span data-tip data-for="stat-debuff"><Strong>*어필 디버프</Strong></span></Cell>
    <Cell center middle><span data-tip data-for="stat-buff"><Strong>테크닉 버프</Strong></span></Cell>
    <Cell center middle><span data-tip data-for="stat-debuff"><Strong>*테크닉 디버프</Strong></span></Cell>
    <ReactTooltip id="stat-buff" aria-haspopup="true">
      <p>
        패시브 개성 및 패시브 히라메키를 제외한 &quot;스탯 추가&quot; 중
        <br />
        이 카드에 적용되는 스탯 버프들을 모두 더한 뒤(합연산) 총합을 입력합니다.
      </p>
      <p>대표적인 예시로, 초기 카난의 특기인 전원 어필 추가 등이 여기에 포함됩니다.</p>
    </ReactTooltip>
    <ReactTooltip id="stat-debuff" aria-haspopup="true">
      <p>
        곡 기믹이나 AC 효과 등으로 인한 &quot;스탯 감소&quot; 중
        <br />
        이 카드에 적용되는 스탯 감소를 모두 더한 뒤(합연산) 총합을 입력합니다.
      </p>
      <p>
        대표적인 예시로, 곡 기믹에 의한 타속 어필 감소 10% 등이 여기에 포함되며,
        <br />
        이 효과는 초기 리코등에 의한 저하 효과로&nbsp;
        <strong>해제됩니다.</strong>
      </p>
    </ReactTooltip>

    <Cell center middle><span data-tip data-for="judgement-factor"><Strong>판정 계수</Strong></span></Cell>
    <ReactTooltip id="judgement-factor" aria-haspopup="true">
      <p>노트 탭 시의 판정을 입력합니다.</p>
    </ReactTooltip>
    <Cell center middle><span data-tip data-for="combo-factor"><Strong>콤보 계수</Strong></span></Cell>
    <ReactTooltip id="combo-factor" aria-haspopup="true">
      <p>노트 탭 시의 콤보 수치를 입력합니다.</p>
    </ReactTooltip>
    <Cell center middle><span data-tip data-for="voltage-buff"><Strong>볼티지 추가 버프</Strong></span></Cell>
    <ReactTooltip id="voltage-buff" aria-haspopup="true">
      <p>
        각종 특기, 라이브 개성 등으로 인한 볼티지 추가 버프 중
        <br />
        이 카드에 적용되는 볼티지 추가 버프를 모두 더한 뒤(합연산) 총합을 입력합니다.
      </p>
    </ReactTooltip>
    <Cell center middle><span data-tip data-for="is-sp"><Strong>SP 발동 여부</Strong></span></Cell>
    <ReactTooltip id="is-sp" aria-haspopup="true">
      <p>SP 발동 중의 볼티지를 계산할 경우 체크합니다.</p>
    </ReactTooltip>
    <Cell center middle><span data-tip data-for="is-ac"><Strong>AC 진입 여부</Strong></span></Cell>
    <ReactTooltip id="is-ac" aria-haspopup="true">
      <p>AC 구간에서의 볼티지를 계산할 경우 체크합니다.</p>
    </ReactTooltip>
    <Cell center middle><span data-tip data-for="subunit-vo"><Strong>작전 Vo 계수</Strong></span></Cell>
    <ReactTooltip id="subunit-vo" aria-haspopup="true">
      <p>카드가 속한 작전의 작전 효과 중, Vo 부분의 값을 입력합니다.</p>
    </ReactTooltip>
    <Cell center middle><span data-tip data-for="stamina-factor"><Strong>스태미너 계수</Strong></span></Cell>
    <ReactTooltip id="stamina-factor" aria-haspopup="true">
      <p>스태미너 상태에 따른 볼티지를 계산할 경우 체크합니다.</p>
      <p>
        초록색은 100% - 70%,
        <br />
        노란색은 70% - 30%,
        <br />
        빨간색은 30% - 0%
        <br />
        의 체력일 경우를 의미합니다.
      </p>
    </ReactTooltip>

    <Cell center middle>
      <span data-tip data-for="kizuna-help">
        <Strong>키즈나 보드</Strong>
        <br />
        <Strong>크리티컬률 추가</Strong>
      </span>
    </Cell>
    <Cell center middle>
      <span data-tip data-for="kizuna-help">
        <Strong>키즈나 보드</Strong>
        <br />
        <Strong>크리티컬치 추가</Strong>
      </span>
    </Cell>
    <Cell center middle>
      <span data-tip data-for="kizuna-help">
        <Strong>키즈나 보드</Strong>
        <br />
        <Strong>속성 일치 보너스 추가</Strong>
      </span>
    </Cell>
    <ReactTooltip id="kizuna-help" aria-haspopup="true">
      <p>키즈나 보드 효과량 보기에서 해당하는 값을 찾아 입력합니다.</p>
      <img src="/images/kizuna_help.jpg" alt="kizuna-help" />
    </ReactTooltip>

    <LineCell />
    <Cell center middle><span data-tip data-for="form-stat"><Strong>편성 어필</Strong></span></Cell>
    <Cell center middle><span data-tip data-for="form-stat"><Strong>편성 테크닉</Strong></span></Cell>
    <ReactTooltip id="form-stat" aria-haspopup="true">
      <p>라이브 편성 화면에서 확인할 수 있는 스탯 값입니다.</p>
      <p>게스트 스탯 버프가 입력된 경우 값이 달라지게 됩니다.</p>
    </ReactTooltip>

    <LineCell />
    <Cell center middle><span data-tip data-for="crit-prob-appx"><Strong>크리율 추정</Strong></span></Cell>
    <ReactTooltip id="crit-prob-appx" aria-haspopup="true">
      <p>입력 값을 기반으로 계산한 크리티컬률입니다.</p>
    </ReactTooltip>
    <Cell center middle><span data-tip data-for="voltage-appx"><Strong>볼티지 추정</Strong></span></Cell>
    <ReactTooltip id="voltage-appx" aria-haspopup="true">
      <p>입력 값을 기반으로 계산한 크리티컬이 터지지 않은 경우의 볼티지입니다.</p>
    </ReactTooltip>
    <Cell center middle><span data-tip data-for="crit-voltage-appx"><Strong>크리티컬 볼티지 추정</Strong></span></Cell>
    <ReactTooltip id="crit-voltage-appx" aria-haspopup="true">
      <p>입력 값을 기반으로 계산한 크리티컬 발동 시의 볼티지입니다.</p>
    </ReactTooltip>
    <Cell center middle><span data-tip data-for="exp-voltage-appx"><Strong>볼티지 기댓값 추정</Strong></span></Cell>
    <ReactTooltip id="exp-voltage-appx" aria-haspopup="true">
      <p>입력 값을 기반으로 하여 크리티컬을 반영해 계산한 볼티지 기댓값입니다.</p>
      <p>(볼티지 추정) * (1 - (크리율 추정)) + (크리티컬 볼티지 추정) * (크리율 추정) 으로 계산합니다.</p>
    </ReactTooltip>

    <LineCell />
    <Cell center middle><span data-tip data-for="cleanse"><Strong>크리율 추정(해제 시)</Strong></span></Cell>
    <Cell center middle><span data-tip data-for="cleanse"><Strong>볼티지 추정(해제 시)</Strong></span></Cell>
    <Cell center middle><span data-tip data-for="cleanse"><Strong>크리티컬 볼티지 추정(해제 시)</Strong></span></Cell>
    <Cell center middle><span data-tip data-for="cleanse"><Strong>볼티지 기댓값 추정(해제 시)</Strong></span></Cell>
    <ReactTooltip id="cleanse" aria-haspopup="true">
      <p>위 추정들과 동일하게 계산되나, 저하/감소 효과 해제가 발동한 경우를 기준으로 합니다.</p>
      <p>
        즉, 모든 스탯 디버프 효과(입력 항목 중 *이 붙은 항목)를 제거하여 계산합니다.
        <br />
        (주의: 기본 스탯 디버프 효과는 제거하지 않습니다.)
      </p>
    </ReactTooltip>
  </>
);

export default Legends;
