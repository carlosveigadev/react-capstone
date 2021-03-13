import { getCategory, pokemonByCategory } from '../api-requests/request';

describe('Test the API', () => {
  it('API is working and returns an object', () => {
    getCategory().then(data => {
      expect(data).toBe('object');
    });
  });
  it('API is working and returns an object', () => {
    pokemonByCategory().then(data => {
      expect(data).toBe('object');
    });
  });
});
