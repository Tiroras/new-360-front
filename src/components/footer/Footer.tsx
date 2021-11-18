import React from 'react';
import styled from 'styled-components';
import { colors } from 'theme/colors';

const Layout = styled.footer`
  background-color: ${colors.darkBlue[0]};
  color: ${colors.white};
  width: 100%;
  padding: 20px;
  position: absolute;
  bottom: 0;
`;

export const Footer = () => {
  return (
    <Layout>
      by Timur Gamkrelidze
    </Layout>
  )
}