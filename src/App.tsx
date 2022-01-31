import React, {useState} from 'react';
import {Header} from './components/Header';
import {Main} from './components/Main';
import {HomePage} from "./pages/HomePage";
import {Route, Routes} from 'react-router-dom';
import {NotFound} from "./pages/NotFound";
import {Details} from "./pages/Details";

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

const App: React.FC = () => {
    const [countries, setCounties] = useState<ICountry[]>([]);

    return (
        <>
            <Header/>
            <Main>
                <Routes>
                    <Route path={'/'} element={<HomePage countries={countries} setCounties={setCounties}/>}/>
                    <Route path={'/country/:name'} element={<Details/>}/>
                    <Route path={'*'} element={<NotFound/>}/>
                </Routes>
            </Main>
        </>
    );
}

export default App;
