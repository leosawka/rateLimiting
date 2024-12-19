const express = require('express');
const { Pool } = require('pg');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

// Database connection
const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
});

// Rate limiter middleware
const rateLimiter = async (req, res, next) => {
  const clientIP = req.ip; // Or req.headers['x-forwarded-for']

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
    next();
  } catch (err) {
    console.error('Database error:', err);
    res.status(500).send('Internal Server Error');
  }
};

// Route to buy corn
app.post('/buy-corn', rateLimiter, (req, res) => {
  res.status(200).send("200 Success - Corn bought successfully!");
});

// Connect to Postgres
pool.connect()
  .then(() => console.log('Connected to Postgres'))
  .catch(err => {
    console.error('Connection error', err.stack);
    process.exit(1); // Stops the server if the database is not reachable
  });

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
