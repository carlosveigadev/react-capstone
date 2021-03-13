import { getCategory, pokemonByCategory, passCategory } from '../api-requests/request';

describe('Test the API', () => {
  it('getCategory is working and returns an object', () => {
    getCategory().then(data => {
      expect(data).toBe('object');
    });
  });
  it('pokemonByCategory is working and returns an object', () => {
    pokemonByCategory().then(data => {
      expect(data).toBe('object');
    });
  });
  it('API is working and returns an object', () => {
    expect(passCategory()).toEqual(expect.any(Array));
  });
});
