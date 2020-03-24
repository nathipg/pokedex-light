import React, { useEffect, useState } from 'react';

import Card from './components/Card/Card';

import { getPokemon } from './services/pokemon';

import './App.scss';

const App = () => {
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        const numbers = [...Array(150).keys()];
        Promise.all(numbers.map(number => getPokemon(number + 1, pokemon => {
            if(pokemon) {
                setPokemons(prevPokemons => {
                    return [
                        ...prevPokemons,
                        pokemon
                    ]
                });
            }
        })));
    }, []);

    return (
        <div className="App">
            <h1>PokeDex Light</h1>
            <div className="content">
                {pokemons.sort((p1, p2) => p1.number - p2.number ).map((pokemon, key) => {
                    return (
                        <Card
                            key={key}
                            {...pokemon} />
                    );
                })}
            </div>
        </div>
    );
}

export default App;
