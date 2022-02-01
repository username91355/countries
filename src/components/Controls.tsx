import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Search} from './Search';
import {RegionSelect} from './Select';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

interface IProps {
    onSearch: (search: string, region: string) => void
}

export const Controls: React.FC<IProps> = props => {

    const
        {onSearch} = props,
        [search, setSearch] = useState<string>(''),
        [region, setRegion] = useState<{ title: string, value: string } | null>(null);

    useEffect(() => {
        onSearch(search, region
            ? region.value
            : '');
    }, [search, region]);

    return (
        <Wrapper>
            <Search search={search} setSearch={setSearch}/>
            <RegionSelect value={region} onChange={setRegion}/>
        </Wrapper>
    );
};