import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';
import {
  useColorModeValue,
  Box,
  Button,
  Link,
} from '@chakra-ui/react';

import Home from '@/pages/Home';
import Card from '@/pages/card';
import Cards from '@/pages/cards';
import CardComparator from '@/pages/card-comparator';
import DeckSimulator from '@/pages/deck-simulator';
import Events from '@/pages/events';
import Gachas from '@/pages/gachas';
import Settings from '@/pages/settings';
import VoltageCalculator from '@/pages/voltage-calculator';

import { DESKTOP_BP, NAVBAR_WIDTH } from '@/consts';

type StyledLinkProps = {
  to: string,
  exact?: boolean,
};

const StyledLink: React.FC<StyledLinkProps> = ({ to, exact, children }) => {
  const activeLinkStyle = useColorModeValue('gray.900', 'gray.50');
  const inactiveLinkStyle = useColorModeValue('gray.500', 'gray.400');
  return (
    <Link
      display="block"
      padding={1}
      fontSize="lg"
      color={inactiveLinkStyle}
      textDecoration="none"
      _hover={{
        textDecoration: 'none',
        color: activeLinkStyle,
      }}
      // `activeStyle` prop is not working, so `sx` prop is used for workaround
      // NavLink sets `active` class on active navlink
      sx={{
        '&.active': {
          color: activeLinkStyle,
        },
      }}
      as={NavLink}
      to={to}
      exact={exact}
    >
      {children}
    </Link>
  );
};

const NavbarContent: React.FC = () => (
  <Box as="nav" padding={2}>
    <StyledLink exact to="/">홈</StyledLink>
    <StyledLink to="/cards">카드 목록</StyledLink>
    <StyledLink to="/events">이벤트 목록</StyledLink>
    <StyledLink to="/gachas">가챠 목록</StyledLink>
    <StyledLink to="/settings">설정</StyledLink>
  </Box>
);

const Navbar: React.FC = () => {
  const navbarBGColor = useColorModeValue('gray.200', 'gray.700');
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      {/* Desktop Navbar */}
      <Box
        display={{ base: 'none', [DESKTOP_BP]: 'block' }}
        position="fixed"
        height="100%"
        width={NAVBAR_WIDTH}
        bgColor={navbarBGColor}
      >
        <NavbarContent />
      </Box>
      {/* Mobile Navbar */}
      <Box
        display={{ base: 'block', [DESKTOP_BP]: 'none' }}
        bgColor={navbarBGColor}
      >
        <Box textAlign="center">
          <Button
            margin={1}
            onClick={() => setNavbarOpen(!navbarOpen)}
            variant="ghost"
          >
            {navbarOpen ? '메뉴 닫기' : '메뉴 열기'}
          </Button>
        </Box>
        {navbarOpen && <NavbarContent />}
      </Box>
    </>
  );
};

const App: React.FC = () => (
  <>
    <Navbar />
    {/* Contents */}
    <Box
      padding={4}
      paddingTop={8}
      marginLeft={{ base: '0px', [DESKTOP_BP]: NAVBAR_WIDTH }}
    >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/card/:id" component={Card} />
        <Route path="/cards" component={Cards} />
        <Route path="/card-comparator" component={CardComparator} />
        <Route path="/deck-simulator" component={DeckSimulator} />
        <Route path="/events" component={Events} />
        <Route path="/gachas" component={Gachas} />
        <Route path="/settings" component={Settings} />
        <Route path="/voltage-calculator" component={VoltageCalculator} />
      </Switch>
    </Box>
  </>
);

export default App;
