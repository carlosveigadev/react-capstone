import { allPokemons, pokemonByCategory } from '../api-requests/request';

describe('Test the API', () => {
  it('allPokemons is working and returns an object', () => {
    allPokemons().then(data => {
      expect(data).toBe('object');
    });
  });
  it('pokemonByCategory is working and returns an object', () => {
    const mockArray = [];
    pokemonByCategory(mockArray).then(data => {
      expect(data).toBe('object');
    });
  });
});
