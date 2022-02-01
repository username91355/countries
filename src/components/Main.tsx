import React from 'react';
import styled from 'styled-components';
import {Container} from './Container';

const Wrapper = styled.main`
  padding: 2rem 0;
  
  @media(min-width: 767px) {
    padding: 4rem 0;
  }
`;

interface IProps {
    children: React.ReactNode | React.Component
}

export const Main:React.FC<IProps> = props => {

    const {children} = props;

    return (
        <Wrapper>
            <Container>
                {children}
            </Container>
        </Wrapper>
    );
};