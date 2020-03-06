import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import styled from 'styled-components';
import { AppState, AC, SEL } from '@/store';

import { ATTRIBUTE, ROLE, RARITY } from '@/data/cardMetadata';
import { GROUP, MEMBER } from '@/data/memberMetadata';
import { OUTFIT_SERIES } from '@/data/outfitSeries';
import SpecCategoryFilter from './filters/SpecCategoryFilter';
import SpecTargetFilter from './filters/SpecTargetFilter';
import IndivPCategoryFilter from './filters/IndivPCategoryFilter';
import IndivPTargetFilter from './filters/IndivPTargetFilter';

const BorderlessTable = styled.table`
  && { // Overriding parent component's style
    border: 0px;
    border-collapse: collapse;
    width: 100%;

    td, th {
      text-align: center;
      padding: 0px;
      border: 0px;
      white-space: nowrap;
    }
  }
`;

const SmallImg = styled.img`
  padding: 2px;
  width: 32px;
  height: 32px;
  &.on {
    opacity: 1;
  }
  &.off {
    opacity: 0.1;
  }
  &:hover {
    cursor: pointer;
  }
  &.on:hover {
    opacity: 0.7;
  }
  &.off:hover {
    opacity: 0.3;
  }
`;

const TinyImg = styled(SmallImg)`
  width: 32px;
  height: 32px;
`;
const GroupImg = styled(TinyImg)`
  width: auto;
`;

interface PropsFromState {
  isJPEdition: ReturnType<typeof SEL.dbIsJPEdition>,
  member: ReturnType<typeof SEL.cardsMemberFilter>,
  attribute: ReturnType<typeof SEL.cardsAttributeFilter>,
  role: ReturnType<typeof SEL.cardsRoleFilter>,
  rarity: ReturnType<typeof SEL.cardsRarityFilter>,
  uncap: ReturnType<typeof SEL.cardsUncapFilter>,
  outfitId: ReturnType<typeof SEL.cardsOutfitFilter>,
}
interface PropsFromDispatch {
  setMember: (ids: number[], value: boolean) => void,
  setAttribute: (id: number[], value: boolean) => void,
  setRole: (id: number[], value: boolean) => void,
  setRarity: (id: number, value: boolean) => void,
  setUncap: (uncap: number | null) => void,
  setOutfit: (id: number | null) => void,
}
type CardFilterRows = PropsFromState & PropsFromDispatch;

function memberIdInGroup(gId: number) {
  return Object.keys(MEMBER).map(Number).filter((id) => MEMBER[id].groupId === gId);
}
const attributeAllIds = Object.keys(ATTRIBUTE).map(Number);
const roleAllIds = Object.keys(ROLE).map(Number);

const CardFilterRows: React.FC<CardFilterRows> = ({
  isJPEdition,
  member, attribute, role, rarity, uncap, outfitId,
  setMember, setAttribute, setRole, setRarity, setUncap, setOutfit,
}) => {
  const attributeAll = attributeAllIds.every((id) => attribute[id]);
  const roleAll = roleAllIds.every((id) => role[id]);
  return (
    <>
      <tr>
        <td rowSpan={8}>필터</td>
        <td>멤버</td>
        <td>
          <BorderlessTable>
            <tbody>
              {Object.keys(GROUP).map(Number).map((gId) => {
                const mIds = memberIdInGroup(gId);
                const selected = mIds.every((mId) => member[mId]);
                return (
                  <tr key={Math.random()}>
                    <td>
                      <GroupImg
                        className={selected ? 'on' : 'off'}
                        src={GROUP[gId].iconAssetPath}
                        alt={`${GROUP[gId].symbol}-icon`}
                        title={GROUP[gId].name}
                        onClick={() => setMember(mIds, !selected)}
                      />
                    </td>
                    {mIds.map((mId) => (
                      <td key={Math.random()}>
                        <TinyImg
                          className={member[mId] ? 'on' : 'off'}
                          src={MEMBER[mId].iconAssetPath}
                          alt={`${MEMBER[mId].enName}-icon`}
                          title={MEMBER[mId].name}
                          onClick={() => setMember([mId], !member[mId])}
                        />
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </BorderlessTable>
        </td>
      </tr>
      <tr>
        <td>속성</td>
        <td>
          <SmallImg
            className={attributeAll ? 'on' : 'off'}
            src="/images/icons/all.png"
            alt="all-icon"
            title="전체 선택"
            onClick={() => setAttribute(attributeAllIds, !attributeAll)}
          />
          {Object.keys(ATTRIBUTE).map(Number).map((id) => (
            <SmallImg
              key={id}
              className={attribute[id] ? 'on' : 'off'}
              src={ATTRIBUTE[id].iconAssetPath}
              alt={`${ATTRIBUTE[id].symbol}-icon`}
              title={ATTRIBUTE[id].name}
              onClick={() => setAttribute([id], !attribute[id])}
            />
          ))}
        </td>
      </tr>
      <tr>
        <td>타입</td>
        <td>
          <SmallImg
            className={roleAll ? 'on' : 'off'}
            src="/images/icons/all.png"
            alt="all-icon"
            title="전체 선택"
            onClick={() => setRole(roleAllIds, !roleAll)}
          />
          {Object.keys(ROLE).map(Number).map((id) => (
            <SmallImg
              key={id}
              className={role[id] ? 'on' : 'off'}
              src={ROLE[id].iconAssetPath}
              alt={`${ROLE[id].symbol}-icon`}
              title={ROLE[id].name}
              onClick={() => setRole([id], !role[id])}
            />
          ))}
        </td>
      </tr>
      <tr>
        <td>레어도</td>
        <td>
          {Object.keys(RARITY).map(Number).map((id) => (
            <SmallImg
              key={id}
              className={rarity[id] ? 'on' : 'off'}
              src={RARITY[id].iconAssetPath}
              alt={`${RARITY[id].symbol}`}
              title={RARITY[id].symbol}
              onClick={() => setRarity(id, !rarity[id])}
            />
          ))}
        </td>
      </tr>
      <tr>
        <td>특기</td>
        <td>
          <BorderlessTable>
            <tbody>
              <tr>
                <td>스킬 종류</td>
                <td>스킬 대상</td>
              </tr>
              <tr>
                <td style={{ padding: '4px' }}><SpecCategoryFilter /></td>
                <td style={{ padding: '4px' }}><SpecTargetFilter /></td>
              </tr>
            </tbody>
          </BorderlessTable>
        </td>
      </tr>
      <tr>
        <td>개성(패시브)</td>
        <td>
          <BorderlessTable>
            <tbody>
              <tr>
                <td>스킬 종류</td>
                <td>스킬 대상</td>
              </tr>
              <tr>
                <td style={{ padding: '4px' }}><IndivPCategoryFilter /></td>
                <td style={{ padding: '4px' }}><IndivPTargetFilter /></td>
              </tr>
            </tbody>
          </BorderlessTable>
        </td>
      </tr>
      <tr>
        <td>한돌</td>
        <td>
          <select
            id="uncap-filter"
            value={uncap === null ? 'all' : uncap}
            onChange={(event) => {
              const selected = event.target.value;
              if (selected === 'all') setUncap(null);
              else setUncap(Number(event.target.value));
            }}
          >
            <option value="all">모두</option>
            {
              new Array(6).fill(null).map((_, idx) => (
                <option key={Math.random()} value={idx}>{idx}</option>
              ))
            }
          </select>
        </td>
      </tr>
      <tr>
        <td>의상</td>
        <td>
          <select
            id="outfit-filter"
            value={outfitId === null ? 'all' : outfitId}
            onChange={(event) => {
              const selected = event.target.value;
              if (selected === 'all') setOutfit(null);
              else setOutfit(Number(event.target.value));
            }}
          >
            <option value="all">모두</option>
            {Object.keys(OUTFIT_SERIES).map(Number).map((id) => (
              <option key={Math.random()} value={id}>
                {isJPEdition ? OUTFIT_SERIES[id].name : (OUTFIT_SERIES[id].nameGlobal || '미출시')}
              </option>
            ))}
          </select>
        </td>
      </tr>
    </>
  );
};

const mapStateToProps = (state: AppState): PropsFromState => ({
  isJPEdition: SEL.dbIsJPEdition(state),
  member: SEL.cardsMemberFilter(state),
  attribute: SEL.cardsAttributeFilter(state),
  role: SEL.cardsRoleFilter(state),
  rarity: SEL.cardsRarityFilter(state),
  uncap: SEL.cardsUncapFilter(state),
  outfitId: SEL.cardsOutfitFilter(state),
});

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => ({
  setMember: (ids, value) => {
    dispatch(AC.cards.setMemberFilter(ids, value));
  },
  setAttribute: (ids, value) => {
    dispatch(AC.cards.setAttributeFilter(ids, value));
  },
  setRole: (ids, value) => {
    dispatch(AC.cards.setRoleFilter(ids, value));
  },
  setRarity: (id, value) => {
    dispatch(AC.cards.setRarityFilter(id, value));
  },
  setUncap: (uncap) => {
    dispatch(AC.cards.setUncapFilter(uncap));
  },
  setOutfit: (id) => {
    dispatch(AC.cards.setOutfitSeriesId(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CardFilterRows);
