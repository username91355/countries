import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Header} from './components/Header';
import {Main} from './components/Main';
import {HomePage} from './pages/HomePage';
import {Route, Routes} from 'react-router-dom';
import {NotFound} from './pages/NotFound';
import {Details} from './pages/Details';

export interface ICountry {
    capital: string
    flags: {
        png: string
        svg: string
    }
    name: string
    population: number
    region: string
}

export const App: React.FC = () => {

    const [countries, setCountries] = useState<ICountry[]>([]);

    useEffect(() => {
        if (!countries.length) {
            axios
                .get('https://restcountries.com/v2/all?fields=name,capital,flags,population,region')
                .then(({data}) => setCountries(data))
        }
    }, []);

    return (
        <>
            <Header/>
            <Main>
                <Routes>
                    <Route path={'/'} element={<HomePage countries={countries}/>}/>
                    <Route path={'/country/:name'} element={<Details/>}/>
                    <Route path={'*'} element={<NotFound/>}/>
                </Routes>
            </Main>
        </>
    );
};
