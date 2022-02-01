import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';
import {IoArrowBack} from 'react-icons/io5';
import {Button} from '../components/Button';
import {CountryInfo} from '../components/CountryInfo';

export const Details: React.FC = () => {

    const
        params = useParams(),
        navigate = useNavigate(),
        [country, setCountry] = useState<ICountryFull | null>(null);

    useEffect(() => {
        axios
            .get<ICountryFull[]>(`https://restcountries.com/v2/name/${params.name}`
                + '?fields=name,capital,flags,population,region,subregion,topLevelDomain,currencies,languages,borders')
            .then(({data}) => setCountry(data[0]))
    }, [params.name]);

    const goBackHandler = () => {
        navigate(-1);
    };

    return (
        <>
            {country
                ? <>
                    <Button onClick={goBackHandler}><IoArrowBack/>Go back</Button>
                    <CountryInfo country={country}/>
                </>
                : <div>Loading...</div>
            }

        </>
    );
};

export interface ICountryFull {
    flags: {
        svg: string
        png: string
    },
    name: string
    region: string
    population: number
    subregion: string
    capital: string
    topLevelDomain: string[]
    currencies: { code: string, name: string, symbol: string }[]
    languages: { iso639_1: string, iso639_2: string, name: string, nativeName: string }[]
    borders: string[]
}