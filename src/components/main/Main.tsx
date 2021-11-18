import React from 'react';
import Link from 'next/link'
import { links } from 'utils/links';
import styled from 'styled-components';
import { colors } from 'theme/colors';

const Layout = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 700px;
  width: 100%;
  margin: 20vh auto;
  background-color: ${colors.lightGray};
  padding: 30px;
  border: 2px solid ${colors.black};
  border-radius: 30px;
`;

const Wellcome = styled.div`
  p {
    font-weight: bold;
  }
`;

const Button = styled.button`
  
`;


export const Main: React.FC = () => {
  return(
    <Layout>
      <Wellcome>
        <h2>Добро пожаловать на 360 polls</h2>
        <p>Здесь вы можете оценить своих коллег по методу 360 градусов и узнать о том, как вас оценивают собственные коллеги</p>
      </Wellcome>
      <div>
        <Link href={links[1].link}>
          <a>
            <button>
              Перейти к опросам
            </button>
          </a>
        </Link>
      </div>
    </Layout>
  );
}