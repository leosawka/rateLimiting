const request = require('supertest');
const express = require('express');
const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());

// Mock DDBB connection
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
});

app.post('/buy-corn', async (req, res) => {
  const clientIP = req.ip;

  try {
    const query = `
      SELECT COUNT(*) 
      FROM purchase_logs 
      WHERE client_ip = $1 AND purchase_time > NOW() - INTERVAL '1 minute'
    `;
    const result = await pool.query(query, [clientIP]);

    if (parseInt(result.rows[0].count) >= 1) {
      return res.status(429).send("429 Too Many Requests - You've already bought corn this minute!");
    }

    await pool.query('INSERT INTO purchase_logs (client_ip) VALUES ($1)', [clientIP]);
    res.status(200).send("200 Success - Corn bought successfully!");
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).send('Internal Server Error');
  }
});

describe('Rate Limiting API', () => {
  it('should allow a client to buy corn successfully', async () => {
    const response = await request(app).post('/buy-corn').send();
    expect(response.status).toBe(200);
    expect(response.text).toBe("200 Success - Corn bought successfully!");
  });

  it('should block a client if they buy more than 1 corn per minute', async () => {
    // First request should pass
    await request(app).post('/buy-corn').send();

    // Second request within a minute should fail
    const response = await request(app).post('/buy-corn').send();
    expect(response.status).toBe(429);
    expect(response.text).toBe("429 Too Many Requests - You've already bought corn this minute!");
  });
  // Clean up the DDBB after testing
  afterEach(async () => {
    await pool.query('DELETE FROM purchase_logs;');
  });  
});
