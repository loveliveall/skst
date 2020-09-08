import React from 'react';
import styled from 'styled-components';
import { Grid, Cell as LibraryCell } from 'styled-css-grid';
import { useSelector, useDispatch } from 'react-redux';

import { StyledButton, FlexBox } from '@/components/Styles';
import { AC, SEL } from '@/store';

import { ACCESSORY_PARAMETERS } from '@/data/accessoryParameters';

import {
  PositiveIntegerInputCell,
  PositivePercentInputCell,
  BooleanInputCell,
} from './Inputs';

const A = AC.voltageCalculator;

const Cell = styled(LibraryCell)`
  min-width: 280px;
`;
const VerticalFlex = styled(FlexBox)`
  flex-direction: column;
`;
const StyledInput = styled.input`
  margin-right: 4px;
  margin-left: 4px;
`;
const StyledSelect = styled.select`
  margin-right: 4px;
  margin-left: 4px;
`;
const Button = styled(StyledButton)`
  padding: 4px 8px 4px 8px;
`;
const Legends = (
  <>
    <Cell />
    <Cell center middle><strong>대미지 한계치</strong></Cell>
    <Cell center middle><strong>고유 어필</strong></Cell>
    <Cell center middle><strong>고유 테크닉</strong></Cell>
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

    <Cell center middle><strong>어필 디버프</strong></Cell>
    <Cell center middle><strong>테크닉 버프</strong></Cell>
    <Cell center middle><strong>테크닉 디버프</strong></Cell>
    <Cell center middle><strong>판정 계수</strong></Cell>
    <Cell center middle><strong>콤보 계수</strong></Cell>

    <Cell center middle><strong>볼티지 추가 버프</strong></Cell>
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
  </>
);
const ROW_NUM = 27;

const SlotSettings: React.FC = () => {
  const dispatch = useDispatch();
  const settings = useSelector(SEL.voltageCalculatorSettings);
  return (
    <Grid
      flow="column"
      columns={settings.length + 2}
      minRowHeight="0px"
    >
      {Legends}
      {settings.map((slotInfo) => {
        const { key } = slotInfo;
        return (
          <React.Fragment key={key}>
            <Cell center middle>
              <span>
                <Button onClick={() => dispatch(A.duplicateSlot(key))}>
                  복제
                </Button>
                <Button onClick={() => dispatch(A.removeSlot(key))}>
                  삭제
                </Button>
              </span>
            </Cell>
            <PositiveIntegerInputCell
              id="max-damage"
              value={slotInfo.maxDamage}
              onChange={(value) => dispatch(A.editSlotMaxDamage(key, value))}
            />
            <PositiveIntegerInputCell
              id="raw-appl"
              value={slotInfo.rawAppl}
              onChange={(value) => dispatch(A.editSlotRawAppl(key, value))}
            />
            <PositiveIntegerInputCell
              id="raw-tech"
              value={slotInfo.rawTech}
              onChange={(value) => dispatch(A.editSlotRawTech(key, value))}
            />
            <BooleanInputCell
              id="is-same-attr"
              checked={slotInfo.isSameAttr}
              onToggle={() => dispatch(A.toggleSlotIsSameAttr(key))}
              label="카드/곡 동속성"
            />
            <Cell center middle>
              <VerticalFlex>
                {slotInfo.accessories.map((accessory, idx) => {
                  const { id, isSameAttr } = accessory;
                  return (
                    // eslint-disable-next-line react/no-array-index-key
                    <div key={`accessory-${idx}`}>
                      <StyledInput
                        id={`accessory-same-attr-${idx}`}
                        type="checkbox"
                        checked={isSameAttr}
                        onChange={() => dispatch(A.editSlotAccessory(key, idx, !isSameAttr, id))}
                      />
                      <StyledSelect
                        id={`accessory-${idx}`}
                        value={id}
                        onChange={(event) => dispatch(
                          A.editSlotAccessory(key, idx, isSameAttr, Number(event.target.value)),
                        )}
                      >
                        {Object.keys(ACCESSORY_PARAMETERS).map(Number).map((paramId) => {
                          const { desc, stat } = ACCESSORY_PARAMETERS[paramId];
                          return (
                            <option key={paramId} value={paramId}>
                              {`${desc}(${stat.appl}/${stat.stam}/${stat.tech})`}
                            </option>
                          );
                        })}
                      </StyledSelect>
                    </div>
                  );
                })}
              </VerticalFlex>
            </Cell>
            <PositivePercentInputCell
              id="formation-appl-buff"
              value={slotInfo.formationApplPercents}
              onChange={(value) => dispatch(A.editSlotFormationApplBuff(key, value))}
            />
            <PositivePercentInputCell
              id="formation-tech-buff"
              value={slotInfo.formationTechPercents}
              onChange={(value) => dispatch(A.editSlotFormationTechBuff(key, value))}
            />
            <PositivePercentInputCell
              id="guest-appl-buff"
              value={slotInfo.guestApplPercents}
              onChange={(value) => dispatch(A.editSlotGuestApplBuff(key, value))}
            />
            <PositivePercentInputCell
              id="guest-tech-buff"
              value={slotInfo.guestTechPercents}
              onChange={(value) => dispatch(A.editSlotGuestTechBuff(key, value))}
            />
            <PositivePercentInputCell
              id="base-appl-buff"
              value={slotInfo.baseApplBuff}
              onChange={(value) => dispatch(A.editSlotBaseApplBuff(key, value))}
            />
            <PositivePercentInputCell
              id="base-appl-debuff"
              value={slotInfo.baseApplDebuff}
              onChange={(value) => dispatch(A.editSlotBaseApplDebuff(key, value))}
            />
            <PositivePercentInputCell
              id="base-tech-buff"
              value={slotInfo.baseTechBuff}
              onChange={(value) => dispatch(A.editSlotBaseTechBuff(key, value))}
            />
            <PositivePercentInputCell
              id="base-tech-debuff"
              value={slotInfo.baseTechDebuff}
              onChange={(value) => dispatch(A.editSlotBaseTechDebuff(key, value))}
            />
            <PositivePercentInputCell
              id="appl-buff"
              value={slotInfo.applBuff}
              onChange={(value) => dispatch(A.editSlotApplBuff(key, value))}
            />
            <PositivePercentInputCell
              id="appl-debuff"
              value={slotInfo.applDebuff}
              onChange={(value) => dispatch(A.editSlotApplDebuff(key, value))}
            />
            <PositivePercentInputCell
              id="tech-buff"
              value={slotInfo.techBuff}
              onChange={(value) => dispatch(A.editSlotTechBuff(key, value))}
            />
            <PositivePercentInputCell
              id="tech-debuff"
              value={slotInfo.techDebuff}
              onChange={(value) => dispatch(A.editSlotTechDebuff(key, value))}
            />
            <Cell center middle>
              <span>
                <StyledSelect
                  id="judgement-factor"
                  value={slotInfo.judgementFactor}
                  onChange={(event) => dispatch(A.editSlotJudgementFactor(key, Number(event.target.value)))}
                >
                  <option value={1.2}>WONDERFUL (1.2)</option>
                  <option value={1.1}>GREAT (1.1)</option>
                  <option value={1.0}>NICE (1.0)</option>
                  <option value={0.8}>BAD (0.8)</option>
                </StyledSelect>
              </span>
            </Cell>
            <Cell center middle>
              <span>
                <StyledSelect
                  id="combo-factor"
                  value={slotInfo.comboFactor}
                  onChange={(event) => dispatch(A.editSlotComboFactor(key, Number(event.target.value)))}
                >
                  <option value={1.00}>0-10 COMBO (1.00)</option>
                  <option value={1.01}>11-30 COMBO (1.01)</option>
                  <option value={1.02}>31-50 COMBO (1.02)</option>
                  <option value={1.03}>51-70 COMBO (1.03)</option>
                  <option value={1.05}>71+ COMBO (1.05)</option>
                </StyledSelect>
              </span>
            </Cell>
            <PositivePercentInputCell
              id="voltage-buff"
              value={slotInfo.voltageBuffPercent}
              onChange={(value) => dispatch(A.editSlotVoltageBuff(key, value))}
            />
            <BooleanInputCell
              id="is-ac"
              checked={slotInfo.isAC}
              onToggle={() => dispatch(A.toggleSlotIsAC(key))}
              label="AC 상태"
            />
            <Cell center middle>
              <span>
                <StyledSelect
                  id="subunit-vo-factor"
                  value={slotInfo.subunitVoFactor}
                  onChange={(event) => dispatch(A.editSlotSubunitVo(key, Number(event.target.value)))}
                >
                  <option value={1.15}>+15%</option>
                  <option value={1.10}>+10%</option>
                  <option value={1.055}>+5.5%</option>
                  <option value={1.05}>+5%</option>
                  <option value={1.005}>+0.5%</option>
                  <option value={1.00}>+0%</option>
                  <option value={0.96}>-4%</option>
                  <option value={0.955}>-4.5%</option>
                  <option value={0.95}>-5%</option>
                  <option value={0.91}>-9%</option>
                  <option value={0.905}>-9.5%</option>
                  <option value={0.90}>-10%</option>
                  <option value={0.865}>-13.5%</option>
                  <option value={0.86}>-14%</option>
                  <option value={0.855}>-14.5%</option>
                  <option value={0.85}>-15%</option>
                </StyledSelect>
              </span>
            </Cell>
            <Cell center middle>
              <span>
                <StyledSelect
                  id="stamina-factor"
                  value={slotInfo.staminaFactor}
                  onChange={(event) => dispatch(A.editSlotStaminaFactor(key, Number(event.target.value)))}
                >
                  <option value={1.0}>초록색 (1.0)</option>
                  <option value={0.8}>노란색 (0.8)</option>
                  <option value={0.6}>빨간색 (0.6)</option>
                </StyledSelect>
              </span>
            </Cell>
            <PositivePercentInputCell
              id="crit-prob-add"
              value={slotInfo.critProbAddPercent}
              onChange={(value) => dispatch(A.editSlotCritProbAdd(key, value))}
            />
            <PositivePercentInputCell
              id="crit-damage-add"
              value={slotInfo.critDamageAddPercent}
              onChange={(value) => dispatch(A.editSlotCritDamageAdd(key, value))}
            />
            <PositivePercentInputCell
              id="same-attr-bonus"
              value={slotInfo.sameAttrBonusPercent}
              onChange={(value) => dispatch(A.editSlotSameAttrBonus(key, value))}
            />
          </React.Fragment>
        );
      })}
      <Cell height={ROW_NUM}>
        <Button onClick={() => dispatch(A.addSlot(new Date().getTime()))}>
          슬롯 추가
        </Button>
      </Cell>
    </Grid>
  );
};

export default SlotSettings;
