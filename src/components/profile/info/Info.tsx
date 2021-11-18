import React from 'react';
import styled from 'styled-components';
import { colors } from 'theme/colors';

const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${colors.lightGray};
`;

interface IProps {
  name: string;
  position: string;
  lastTime: string;
}

export const Info: React.FC<IProps> = (props) => {
  return (
    <div>
      <div>
        <ImageContainer>
          <img src='' alt='' />
        </ImageContainer>
        <div>
          <div>{props.name}</div>
          <div>{props.position}</div>
        </div>
      </div>
      <div>
        <div>
          Последний раз был: {props.lastTime}
        </div>
      </div>
    </div>
  );
}
