import React from 'react';
import styled from 'styled-components';
import { Switch, Route, NavLink } from 'react-router-dom';

import Home from '@/components/home/Home';
import Card from '@/components/card/Card';
import Cards from '@/components/cards/Cards';
import Gachas from '@/components/gachas/Gachas';
import Events from '@/components/events/Events';
import Test from '@/components/test/Test';

const FixedNav = styled.nav`
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

  // Mobile UI
  @media screen and (max-width: 768px) {
    height: auto;
    width: 100%;
    position: static;
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

const App: React.FC = () => {
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
  ];

  return (
    <>
      <Main>
        {window.location.hostname === 'localhost' && false && (
          <Test />
        )}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/card/:id" component={Card} />
          <Route path="/cards" component={Cards} />
          <Route path="/gachas" component={Gachas} />
          <Route path="/events" component={Events} />
        </Switch>
      </Main>
      <FixedNav>
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
      </FixedNav>
    </>
  );
};

export default App;
