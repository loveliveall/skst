import React from 'react';
import styled from 'styled-components';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';

import { FlexBox, StyledButton } from '@/components/Styles';
import { AppState, AC, SEL } from '@/store';

import SingleDeckInfo from './SingleDeckInfo';

const VerticalFlex = styled(FlexBox)`
  width: 100%;
  flex-direction: column;
  align-items: center;
`;
const Button = styled(StyledButton)`
  padding: 4px 8px 4px 8px;
`;
const FlexItem = styled.div`
  padding: 2px;
  white-space: nowrap;
`;

interface PropsFromState {
  decks: ReturnType<typeof SEL.simulatorDeckSettings>,
}
interface PropsFromDispatch {
  addDeck: () => void,
}
type DeckSettingsProps = PropsFromState & PropsFromDispatch;

const DeckSettings: React.FC<DeckSettingsProps> = ({
  decks, addDeck,
}) => (
  <VerticalFlex>
    {decks.map((deckInfo) => (
      <FlexItem key={deckInfo.key}>
        <SingleDeckInfo deckKey={deckInfo.key} />
      </FlexItem>
    ))}
    <FlexItem>
      <Button onClick={() => addDeck()}>
        비교 덱 추가
      </Button>
    </FlexItem>
  </VerticalFlex>
);

const mapStateToProps = (state: AppState): PropsFromState => ({
  decks: SEL.simulatorDeckSettings(state),
});

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => ({
  addDeck: () => {
    dispatch(AC.deckSimulator.addDeck(new Date().getTime()));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DeckSettings);
