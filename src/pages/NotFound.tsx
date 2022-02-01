import React from 'react';
import {Button} from '../components/Button';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NotFoundTitle = styled.h3`
  padding: 3rem 0;
`;

export const NotFound: React.FC = () => {

    const navigate = useNavigate();

    const goHomeHandler = () => {
        navigate('/');
    };

    return (
        <Wrapper>
            <NotFoundTitle>Page not found. 404 Error</NotFoundTitle>
            <Button onClick={goHomeHandler}>Go home</Button>
        </Wrapper>
    );
};