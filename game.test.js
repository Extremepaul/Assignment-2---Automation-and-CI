// game.test.js

const axios = require('axios');

describe('fetchPuzzleData', () => {
  it('should receive response from the API', async () => {
    try {
      // Hacer una solicitud HTTP a la URL
      const response = await axios.get('https://prog2700.onrender.com/threeinarow/sample');

      // Verificar si la respuesta contiene un JSON válido
      expect(response.data).toBeDefined();
      expect(typeof response.data).toBe('object');

      // Si la prueba llega a este punto, significa que la URL responde con un JSON válido
    } catch (error) {
      // Si se produce un error, hacemos que la prueba falle explícitamente
      expect(error).toBeUndefined(); // Esto asegura que la prueba falle
    }
  });
});
