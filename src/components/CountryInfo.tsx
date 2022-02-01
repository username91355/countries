import React, {useEffect, useState} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import {ICountryFull} from '../pages/Details';

const Wrapper = styled.section`
  margin-top: 3rem;
  width: 100%;
  display: grid;
  grid-template-columns: 100%;
  gap: 2rem;

  @media (min-width: 767px) {
    grid-template-columns: minmax(100px, 400px) 1fr;
    align-items: center;
    gap: 5rem;
  }
  @media (min-width: 1024px) {
    grid-template-columns: minmax(400px, 600px) 1fr;
  }
`;

const CountryInfoImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const CountryInfoTitle = styled.h1`
  font-weight: var(--fw-regular);
`;

const ListGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    gap: 4rem;
  }
`;

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  line-height: 1.8;
`;

const Meta = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 767px) {
    flex-direction: row;
    align-items: center;
  }
`;

const TagGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

const Tag = styled.span`
  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 1.5;
  cursor: pointer;
`;

interface IProps {
    country: ICountryFull
}

export const CountryInfo: React.FC<IProps> = props => {

    const {country} = props,
        navigate = useNavigate(),
        [neighboringCountries, setNeighboringCountries] = useState<string[]>([]);

    useEffect(() => {
        if (country.borders.length) {
            axios
                .get<{ name: string }[]>(`https://restcountries.com/v2/alpha?codes=${country.borders.join(',')}`)
                .then(({data}) => setNeighboringCountries(data.map(i => i.name)));
        }
    }, [country.borders]);

    const onTagClickHandler = (name: string) => {
        navigate(`/country/${name}`);
    };

    return (
        <Wrapper>
            <CountryInfoImg src={country.flags.svg} alt={country.name}/>
            <div>
                <CountryInfoTitle>{country.name}</CountryInfoTitle>
                <ListGroup>
                    <List>
                        <ListItem>
                            <b>Name:</b> {country.name}
                        </ListItem>
                        <ListItem>
                            <b>Population:</b> {country.population}
                        </ListItem>
                        <ListItem>
                            <b>Region:</b> {country.region}
                        </ListItem>
                        <ListItem>
                            <b>Sub region:</b> {country.subregion}
                        </ListItem>
                        <ListItem>
                            <b>Name:</b> {country.capital}
                        </ListItem>
                    </List>
                    <List>
                        <ListItem>
                            <b>Top level domain:</b> {country.topLevelDomain.map(i => <span key={i}>{i}</span>)}
                        </ListItem>
                        <ListItem>
                            <b>Currency:</b> {country.currencies.map(i => <span key={i.code}>{i.name}</span>)}
                        </ListItem>
                        <ListItem>
                            <b>Top level domain:</b> {country.languages.map(i => <span key={i.name}>{i.name}</span>)}
                        </ListItem>
                    </List>
                </ListGroup>
                <Meta>
                    <b>Border countries</b>
                    {!country.borders
                        ? <span>There is no border countries</span>
                        : <TagGroup>
                            {neighboringCountries.map(i => <Tag key={i} onClick={() => onTagClickHandler(i)}>{i}</Tag>)}
                        </TagGroup>
                    }
                </Meta>
            </div>
        </Wrapper>
    );
};