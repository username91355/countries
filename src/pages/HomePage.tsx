import React, {useEffect, useState} from 'react';
import {Controls} from "../components/Controls";
import {List} from "../components/List";
import {Card} from "../components/Card";
import {ICountry} from "../App";
import axios from "axios";

interface IProps {
    countries: ICountry[]
    setCounties: (value: ICountry[]) => void
}

export const HomePage: React.FC<IProps> = props => {

    const {countries, setCounties} = props;

    const [filteredCountry, setFilteredCountry] = useState(countries);

    useEffect(() => {
        if (!countries.length) {
            axios
                .get('https://restcountries.com/v2/all?fields=name,capital,flags,population,region')
                .then(({data}) => setCounties(data))
        }
    }, []);

    const searchHandler = (search: string, region: string) => {
        let data = [...countries];

        if (region) {
            data = data.filter(c => c.region.includes(region));
        }

        if (search) {
            data = data
                .filter(c => c.name
                    .toLowerCase()
                    .includes(search
                        .toLowerCase()));
        }

        setFilteredCountry(data);
    };

    return (
        <>
            <Controls onSearch={searchHandler}/>
            <List>
                {filteredCountry.map(i => {
                    return <Card key={i.name}
                                 img={i.flags.svg}
                                 name={i.name}
                                 info={
                                     [
                                         {
                                             title: 'Capital',
                                             description: i.capital
                                         },
                                         {
                                             title: 'Region',
                                             description: i.region
                                         },
                                         {
                                             title: 'Population',
                                             description: i.population.toLocaleString()
                                         },


                                     ]
                                 }/>
                })}
            </List>
        </>
    );
};