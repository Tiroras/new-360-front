import React from 'react';
import styled from 'styled-components';
import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';


const Main = styled.main`
  padding: 20px;
  height: 100%;
`;

export const Layout: React.FC = ({children}) => (
  <>
    <Header />
    <Main>
      {children}
    </Main>
    <Footer />
  </>
)