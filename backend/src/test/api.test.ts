import request from 'supertest';
import { app } from '..';

describe('Test the server endpoints', () => {
  describe('POST /api/files', () => {
    it('should upload a CSV file', async () => {
      const filePath = `${__dirname}/sample.csv`;

      const response = await request(app)
        .post('/api/files')
        .attach('csvFile', filePath);

      expect(response.status).toBe(200);
      expect(response.body).toEqual({
        message: 'CSV file uploaded successfully',
      });
    });

    it('should return an error when no file is uploaded', async () => {
      const response = await request(app).post('/api/files');

      expect(response.status).toBe(400);
      expect(response.body).toEqual({ error: 'No file uploaded' });
    });
  });

  describe('GET /api/search', () => {
    const csvData = [
      {
        name: 'John Doe',
        city: 'New York',
        country: 'USA',
        favorite_sport: 'Basketball',
      },
      {
        name: 'Mike Johnson',
        city: 'Paris',
        country: 'France',
        favorite_sport: 'Tennis',
      },
    ];

    it('should return search results', async () => {
      const searchTerm = 'john';

      const response = await request(app)
        .get('/api/search')
        .query({ q: searchTerm });

      expect(response.status).toBe(200);
      expect(response.body).toEqual(csvData);
    });

    it('should return an error when no search term is provided', async () => {
      const response = await request(app).get('/api/search');

      expect(response.status).toBe(400);
      expect(response.body).toEqual({ error: 'Search term is required' });
    });
  });
});
