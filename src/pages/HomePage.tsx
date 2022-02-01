import React, {useState} from 'react';
import {Controls} from '../components/Controls';
import {List} from '../components/List';
import {Card} from '../components/Card';
import {ICountry} from '../App';

interface IProps {
    countries: ICountry[]
}

export const HomePage: React.FC<IProps> = React.memo(props => {

    const
        {countries} = props,
        [filteredCountry, setFilteredCountry] = useState(countries);

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
            {!countries.length
                ? <div>Loading...</div>
                : <>
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
                </>}

        </>
    );
});