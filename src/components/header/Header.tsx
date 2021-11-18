import React from 'react';
import styled from 'styled-components';
import { colors } from 'theme/colors';
import { HeaderLink } from './HeaderLink';
import Link from 'next/link';
import { links } from 'utils/links';

const Layout = styled.header`
  background-color: ${colors.darkBlue[0]};
  color: ${colors.white};
  display: flex;
  align-items: center;
  padding: 0 30px;
  justify-content: space-between;
  height: 80px;
`;

const Logo = styled.a`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Nav = styled.nav`
  height: 100%;
  display: flex;
`;

const Menu = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  margin: 0;
`;

export const Header = () => {
  return (
    <Layout>
      <Link href='/'>
        {/* <Image src={} alt='360 Polls' /> */}
        <a>
          <h1>360 Polls</h1>
        </a>
      </Link>
      <Nav>
        <Menu>
          {links.map((h) => (
            <HeaderLink 
              key={h.id}
              header={h.header}
              link={h.link}
            />
          ))}
        </Menu>
      </Nav>
    </Layout>
  )
}