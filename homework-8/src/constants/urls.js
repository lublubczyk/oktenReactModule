const baseURL = 'https://rickandmortyapi.com/api';

const episode = '/episode';
const character = '/character/';

const urls = {
    episode,
    characters: (query) => character + query
};

export { baseURL, urls };