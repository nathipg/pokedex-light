import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Card from './components/Card/Card';

import './App.scss';

const App = () => {
    const [pokemons, setPokemons] = useState([]);

    const getPokemon = async id => {
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon/' + id);

            const pokemon = {
                name: response.data.name,
                number: response.data.id,
                type: response.data.types.filter(type => type.slot === 1)[0]['type']['name']
            };

            setPokemons(prevPokemons => {
                return [
                    ...prevPokemons,
                    pokemon
                ]
            });
        } catch(error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const numbers = [...Array(150).keys()];
        Promise.all(numbers.map(number => getPokemon(number + 1)));
    }, []);

    return (
        <div className="App">
            <h1>PokeDex Light</h1>
            {pokemons.sort((p1, p2) => p1.number - p2.number ).map(pokemon => {
                return (
                    <h1>
                        {pokemon.name}
                    </h1>
                );
            })}
        </div>
    );
}

export default App;
