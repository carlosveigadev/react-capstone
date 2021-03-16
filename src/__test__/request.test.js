import { allPokemons, pokemonByCategory, fetchPokeData } from '../api-requests/request';

describe('Test the API requests', () => {
  test('allPokemons is working and returns an object', async () => {
    const data = await allPokemons();
    expect(typeof data).toBe('object');
  });

  test('pokemonByCategory is working and returns an object', async () => {
    const data = await pokemonByCategory();
    expect(typeof data).toBe('object');
  });

  test('fetchPokeData is working and returns an object', async () => {
    const data = await fetchPokeData();
    expect(typeof data).toBe('object');
  });
});
