const axios = require('axios');

describe('fetchPuzzleData', () => {
  it('should receive response from the API', async () => {
    try {
      // Make an HTTP request to the URL
      const response = await axios.get('https://prog2700.onrender.com/threeinarow/sample');

      // Check if the response contains valid JSON
      expect(response.data).toBeDefined();
      expect(typeof response.data).toBe('object');

      } catch (error) {
      // If an error occurs make the test fail
      expect(error).toBeUndefined(); 
    }
  });
});
