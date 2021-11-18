import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { colors } from 'theme/colors';

interface IProps {
  name: string;
  position: string;
}

const Layout = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  border: 1px solid ${colors.black};
  border-left: none;
  border-right: none;
  padding: 10px;
  transition: 0.3s;
  &:hover {
    background-color: ${colors.gray};
  }
`;

const LeftPart = styled.div`
  display: flex;
  margin: 0 20px;
`;

const RightPart = styled.div`
  margin: 0 20px;
`;

const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${colors.lightGray};
`;

const TargetInfo = styled.div`
  margin-left: 10px;

  >div{
    margin: 0 10px;
  }
`;

export const PollsListElement: React.FC<IProps> = (props) => {
  return (
    <Layout>
      <LeftPart>
        <ImageContainer>
          <img src='' alt='' />
        </ImageContainer>
        <TargetInfo>
          <div>{props.name}</div>
          <div>{props.position}</div>
        </TargetInfo>
      </LeftPart>
      <RightPart>
        <Link href='/'>
          <a>
            <button>Перейти к опросу</button>
          </a>
        </Link>
      </RightPart>
    </Layout>
  )
}