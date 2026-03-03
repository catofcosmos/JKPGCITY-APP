const express = require('express');
const { Pool } = require('pg');

const app = express();
const PORT = 3000;


app.use(express.json());


const pool = new Pool({
  user: 'postgres',           
  host: 'localhost',          
  database: 'venues_db',      
  password: 'password',      
  port: 5432,
});

app.get('/api/venues', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM venues');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

app.listen(PORT, () => {
  console.log(` Backend is live at http://localhost:${PORT}`);
});
