import styled from 'styled-components';
import Select from 'react-select';
import React from "react";

const options = [
    {label: 'Africa', value: 'Africa'},
    {label: 'America', value: 'America'},
    {label: 'Asia', value: 'Asia'},
    {label: 'Europe', value: 'Europe'},
    {label: 'Oceania', value: 'Oceania'},
];

export const RegionSelect: React.FC<any> = styled(Select).attrs({
    options: options,
    placeholder: 'Filter by Region',
    isClearable: true,
    isSearchable: false,
    styles: {
        control: (provided) => ({
            ...provided,
            cursor: 'pointer',
            backgroundColor: `var(--colors-ui-base)`,
            color: `var(--color-text)`,
            borderRadius: `var(--brad)`,
            padding: `0.25rem`,
            border: 'none',
            boxShadow: `var(--shadow)`,
            height: '50px'
        }),
        menu: (provided) => ({
            ...provided,
            borderRadius: `var(--brad)`,
        }),
        menuList: (provided) => ({
            ...provided,
            padding: `0`,
            borderRadius: `var(--brad)`,
        }),
        option: (provided, state) => ({
            ...provided,
            cursor: 'pointer',
            color: `var(--colors-text)`,
            backgroundColor: state.isSelected
                ? `var(--colors-bg)`
                : `var(--colors-ui-base)`,
        }),
        singleValue: (provided) => ({
            ...provided,
            color: `var(--color-text)`
        }),
    }
})`
  width: 200px;
  border-radius: var(--brad);
  font-family: var(--family);
  border: none;
  
  & > * {
    box-shadow: var(--shadow);
  }
`;
