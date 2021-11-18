import React, { useState } from 'react';
import styled from 'styled-components';

interface ITab {
  isSelected: boolean;
}

const Layout = styled.div<ITab>`
  font-weight: bold;
  opacity: ${({isSelected}) => isSelected ? 1 : 0.5 };
`;

interface IProps {
  isSelected: boolean;
  tabName: string;
  handlerTabChange: () => void;
}

export const Tab: React.FC<IProps> = ({isSelected, tabName, handlerTabChange}) => {
  return (
    <Layout isSelected={isSelected} onClick={handlerTabChange}>
      {tabName}
    </Layout>
  )
}