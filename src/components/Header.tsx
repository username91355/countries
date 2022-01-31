import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Container} from './Container';
import {IoMoon, IoMoonOutline} from "react-icons/io5";
import {Link} from "react-router-dom";

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  background-color: (--colors-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled(Link).attrs({
    to: '/',
})`
  color: var(--colors-text);
  font-size: var(--fs-md);
  font-weight: var(--fw-bold);
  text-decoration: none;
  text-transform: capitalize;
`;

const ThemeSwitcher = styled.div`
  display: flex;
  align-items: center;
  gap: 0.2rem;
  font-size: var(--fs-sm);
  cursor: pointer;
  font-weight: var(--fw-bold);
`;


export const Header = () => {

    const [theme, setTheme] = useState<'dark' | 'light'>('light');

    useEffect(() => {
        document.body.setAttribute('data-theme', theme);
    }, [theme]);

    const themeToggle = () => {
         setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (<HeaderEl>
            <Container>
                <Wrapper>
                    <Title>Where is the world?</Title>
                    <ThemeSwitcher onClick={themeToggle}>
                        {theme === 'light'
                            ? <IoMoonOutline size={'14px'}/>
                            : <IoMoon size={'14px'}/>}
                        <span>{theme} theme</span>
                    </ThemeSwitcher>
                </Wrapper>
            </Container>
        </HeaderEl>

    );
};