import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

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
  ];

  return (
    <>
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
      <Main>
        Hello World!
      </Main>
    </>
  );
};

export default App;
