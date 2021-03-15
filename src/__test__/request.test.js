import { allPokemons, pokemonByCategory } from '../api-requests/request';

describe('Test the API', () => {
  it('allPokemons is working and returns an object', () => {
    allPokemons().then(data => {
      expect(data).toBe('object');
    });
  });

  it('allPokemons is working and returns an object', () => {
    pokemonByCategory().then(data => {
      expect(data).toBe('object');
    });
  });
});
