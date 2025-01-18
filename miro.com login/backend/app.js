const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require('cors'); // Подключаем пакет cors

const app = express();
app.use(bodyParser.json());
app.use(cors()); 

const pool = new Pool({
  user: 'postgres', 
  host: 'localhost',
  database: 'miro', 
  password: '2005',
  port: 1111,
});

app.post('/api/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await pool.query('INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *', [email, password]);
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error inserting user' });
  }
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
