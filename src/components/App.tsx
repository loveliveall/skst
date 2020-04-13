import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import styled from 'styled-components';
import { Switch, Route, NavLink } from 'react-router-dom';

import { AppState, SEL, AC } from '@/store';

import { FlexBox } from '@/components/Styles';

import Home from '@/components/home/Home';
import Card from '@/components/card/Card';
import Cards from '@/components/cards/Cards';
import Gachas from '@/components/gachas/Gachas';
import Event from '@/components/event/Event';
import Events from '@/components/events/Events';
import DeckSimulator from '@/components/deck-simulator/DeckSimulator';
import CardComparator from '@/components/card-comparator/CardComparator';
import Test from '@/components/test/Test';
import Notice from './Notice';

const FixedNavDesktop = styled.nav`
  height: 100%;
  width: 160px;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;
  padding-bottom: 20px;

  // Hide on mobile
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const FixedNavMobile = styled.nav`
  width: 100%;
  position: relative;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;
  padding-bottom: 20px;

  // Hide on desktop
  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const TransparentButton = styled.button`
  width: 100%;
  color: #f1f1f1;
  border: 0px solid black;
  background: none;
  outline: none;
  box-shadow: none;
  font-size: 20px;
`;

const StyledButton = styled.button`
  width: 100%;
  border: 0px solid black;
  background: none;
  outline: none;
  box-shadow: none;
  font-size: 20px;
  text-decoration: none;
  color: #818181;
  cursor: pointer;

  &:hover {
    color: #f1f1f1;
  }
`;

const StyledNavLink = styled(NavLink)`
  display: block;
  padding: 6px 16px 6px 16px;
  text-decoration: none;
  font-size: 20px;
  color: #818181;

  &:hover {
    color: #f1f1f1;
  }
`;

const Main = styled.div`
  margin-left: 160px;
  padding: 12px 10px;

  // Mobile UI
  @media screen and (max-width: 768px) {
    margin-left: 0px;
  }
`;

interface PageInfo {
  key: string,
  path: string,
  title: string,
  exact: boolean,
}

interface PropsFromState {
  isJPEdition: ReturnType<typeof SEL.dbIsJPEdition>,
}
interface PropsFromDispatch {
  toggleEdition: () => void,
}
type AppProps = PropsFromState & PropsFromDispatch;

const App: React.FC<AppProps> = ({
  isJPEdition, toggleEdition,
}) => {
  const [openNav, setOpenNav] = React.useState(false);

  const pages: PageInfo[] = [
    {
      key: 'home',
      path: '/',
      title: '홈',
      exact: true,
    },
    {
      key: 'cards',
      path: '/cards',
      title: '카드 목록',
      exact: false,
    },
    {
      key: 'gachas',
      path: '/gachas',
      title: '가챠 목록',
      exact: false,
    },
    {
      key: 'events',
      path: '/events',
      title: '이벤트 목록',
      exact: false,
    },
    {
      key: 'deck-simulator',
      path: '/deck-simulator',
      title: '덱 비교기',
      exact: false,
    },
    {
      key: 'card-comparator',
      path: '/card-comparator',
      title: '카드 비교기',
      exact: false,
    },
  ];

  return (
    <>
      <FixedNavDesktop>
        <StyledButton
          type="button"
          onClick={() => toggleEdition()}
        >
          {isJPEdition ? '일본판' : '글로벌판'}
        </StyledButton>
        {pages.map((page) => (
          <StyledNavLink
            key={page.key}
            exact={page.exact}
            to={page.path}
            activeStyle={{ color: '#f1f1f1' }}
          >
            {page.title}
          </StyledNavLink>
        ))}
      </FixedNavDesktop>
      <FixedNavMobile>
        <FlexBox>
          <TransparentButton
            type="button"
            onClick={() => toggleEdition()}
            style={{
              paddingBottom: '8px',
            }}
          >
            {isJPEdition ? '일본판' : '글로벌판'}
          </TransparentButton>
          <TransparentButton
            type="button"
            onClick={() => setOpenNav(!openNav)}
            style={{
              paddingBottom: openNav ? '8px' : '0px',
            }}
          >
            {openNav ? '메뉴 닫기' : '메뉴 열기'}
          </TransparentButton>
        </FlexBox>
        {openNav && pages.map((page) => (
          <StyledNavLink
            key={page.key}
            exact={page.exact}
            to={page.path}
            activeStyle={{ color: '#f1f1f1' }}
          >
            {page.title}
          </StyledNavLink>
        ))}
      </FixedNavMobile>
      <Main>
        {window.location.hostname === 'localhost' && false && (
          <Test />
        )}
        <Notice />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/card/:id" component={Card} />
          <Route path="/cards" component={Cards} />
          <Route path="/gachas" component={Gachas} />
          <Route path="/event/:id" component={Event} />
          <Route path="/events" component={Events} />
          <Route path="/deck-simulator" component={DeckSimulator} />
          <Route path="/card-comparator" component={CardComparator} />
        </Switch>
      </Main>
    </>
  );
};

const mapStateToProps = (state: AppState): PropsFromState => ({
  isJPEdition: SEL.dbIsJPEdition(state),
});

const mapDispatchToProps = (dispatch: Dispatch): PropsFromDispatch => ({
  toggleEdition: () => {
    dispatch(AC.db.toggleEdition());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
