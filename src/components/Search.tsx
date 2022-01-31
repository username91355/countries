import React, {ChangeEvent} from 'react';
import styled from 'styled-components';
import {IoSearch} from 'react-icons/io5';

interface IProps {
    search: string
    setSearch: (str: string) => void
}

const InputContainer = styled.label`
  background-color: var(--colors-ui-base);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  
  border-radius: var(--brad);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1.5rem;
  
  @media(min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`;

const Input = styled.input.attrs({
    type: 'search',
    placeholder: 'Search for a country...'
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  background-color: var(--colors-ui-base);
  color: var(--colors-text);
`;

export const Search: React.FC<IProps> = props => {

    const {search, setSearch} = props;

    const searchChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }

    return (
        <InputContainer>
            <IoSearch/>
            <Input value={search} onChange={searchChangeHandler}/>
        </InputContainer>
    );
};