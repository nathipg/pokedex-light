import axios from 'axios';

export const getPokemon = async (id, fallback) => {
    try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon/' + id);

        const pokemon = {
            name: response.data.name,
            number: response.data.id,
            type: response.data.types.filter(type => type.slot === 1)[0]['type']['name']
        };

        fallback(pokemon);
    } catch(error) {
        console.error(error);
        fallback(null);
    }
};