import React from 'react';

import styled from 'styled-components';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  padding: 0;
  margin: 0 0 20px 0;
  background: #00293c;
  height: 50px;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;

    li {
      padding: 0 5px;
    }
  }
`;

const NavLink = styled(Link)`
  background: ${({ 'data-current': current }) =>
    current ? '#F0F2CD' : 'none'};
  color: ${({ 'data-current': current }) =>
    current ? '#00293c' : '#F0F2CD'} !important;
  padding: 5px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;

  :visited,
  :link,
  :active {
    text-decoration: none;
  }
`;

const Menu = ({ location: { pathname } }) => {
  const routes = [
    { path: '/', label: 'Todos' },
    { path: '/counter', label: 'Counter' },
    { path: '/todos-counter', label: 'Todos + Counter' },
    { path: '/rendering', label: 'What about render updates?' }
  ];

  return (
    <Nav>
      <ul>
        {routes.map(({ path, label }) => (
          <li key={label}>
            <NavLink data-current={path === pathname} to={path}>
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    </Nav>
  );
};

export default withRouter(Menu);
