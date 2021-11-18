import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { fontSizes } from 'theme/font-size';
import { colors } from 'theme/colors';

const Layout = styled.li`
  list-style: none;
  padding: 0 20px;
  font-weight: bold;
  font-size: ${fontSizes.headers};
  transition: 0.3s;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover{
    background-color: ${colors.blue};
  }
`

interface IProps {
  link: string
  header: string;
}

export const HeaderLink: React.FC<IProps> = ({link, header}) => {
  return (
    <Link href={link}>
      <Layout>
          <a>{header}</a>
      </Layout>
    </Link>
  )
}