import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import styled from 'styled-components';
import { AppState, AC, SEL } from '@/store';

import { ATTRIBUTE, ROLE } from '@/data/cardMetadata';
import { GROUP, MEMBER } from '@/data/memberMetadata';

const StyledTable = styled.table`
  border: 1px solid black;
  border-collapse: collapse;

  td, th {
    text-align: center;
    padding: 4px;
    border: 1px solid black;
    white-space: nowrap;
  }
`;
const BorderlessTable = styled(StyledTable)`
  border: 0px;

  td, th {
    padding: 0px;
    border: 0px;
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
  member: ReturnType<typeof SEL.cardsMemberFilter>,
  attribute: ReturnType<typeof SEL.cardsAttributeFilter>,
  role: ReturnType<typeof SEL.cardsRoleFilter>,
  uncap: ReturnType<typeof SEL.cardsUncapFilter>,
}
interface PropsFromDispatch {
  setMember: (ids: number[], value: boolean) => void,
  setAttribute: (id: number, value: boolean) => void,
  setRole: (id: number, value: boolean) => void,
  setUncap: (uncap: number | null) => void,
}
type CardFilter = PropsFromState & PropsFromDispatch;

function memberIdInGroup(gId: number) {
  return Object.keys(MEMBER).map(Number).filter((id) => MEMBER[id].groupId === gId);
}

const CardFilter: React.FC<CardFilter> = ({
  member, attribute, role, uncap, setMember, setAttribute, setRole, setUncap,
}) => (
  <StyledTable>
    <tbody>
      <tr>
        <td rowSpan={4}>필터</td>
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
                        alt="group-icon"
                        onClick={() => setMember(mIds, !selected)}
                      />
                    </td>
                    {mIds.map((mId) => (
                      <td key={Math.random()}>
                        <TinyImg
                          className={member[mId] ? 'on' : 'off'}
                          src={MEMBER[mId].iconAssetPath}
                          alt="member-icon"
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
          {Object.keys(ATTRIBUTE).map(Number).map((id) => (
            <SmallImg
              key={id}
              className={attribute[id] ? 'on' : 'off'}
              src={ATTRIBUTE[id].iconAssetPath}
              alt="attribute-icon"
              onClick={() => setAttribute(id, !attribute[id])}
            />
          ))}
        </td>
      </tr>
      <tr>
        <td>타입</td>
        <td>
          {Object.keys(ROLE).map(Number).map((id) => (
            <SmallImg
              key={id}
              className={role[id] ? 'on' : 'off'}
              src={ROLE[id].iconAssetPath}
              alt="type-icon"
              onClick={() => setRole(id, !role[id])}
            />
          ))}
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
    </tbody>
  </StyledTable>
);

const mapStateToProps = (state: AppState): PropsFromState => ({
  member: SEL.cardsMemberFilter(state),
  attribute: SEL.cardsAttributeFilter(state),
  role: SEL.cardsRoleFilter(state),
  uncap: SEL.cardsUncapFilter(state),
});

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => ({
  setMember: (ids, value) => {
    dispatch(AC.cards.setMemberFilter(ids, value));
  },
  setAttribute: (id, value) => {
    dispatch(AC.cards.setAttributeFilter(id, value));
  },
  setRole: (id, value) => {
    dispatch(AC.cards.setRoleFilter(id, value));
  },
  setUncap: (uncap) => {
    dispatch(AC.cards.setUncapFilter(uncap));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CardFilter);
