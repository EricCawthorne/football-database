require('dotenv').config();
const pool = require('./db_config.js')
// const { Pool } = require('pg');
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT

app.use(express.json());
app.use(express.static('public'));
app.use(cors());


app.get('/quarterbacks-with-stats/last_name', async (req, res) => {
    let client = await pool.connect();
   let quarterbacksWithStats = await client.query(
       'SELECT id, name, current_team, passing_yards, passing_touchdowns, interceptions, passer_rating, years_played, image FROM quarterbacks INNER JOIN statistics ON id = quarterback_id;'
   );
   res.set('Content-Type', 'application/json')
   res.status(200)
   res.end(JSON.stringify(quarterbacksWithStats.rows))
});

app.get('/quarterbacks-with-stats/passing_yards', async (req, res) => {
    let client = await pool.connect();
   let quarterbacksWithStats = await client.query(
       'SELECT id, name, current_team, passing_yards, passing_touchdowns, interceptions, passer_rating, years_played, image FROM quarterbacks INNER JOIN statistics ON id = quarterback_id ORDER BY passing_yards DESC;'
   );
   res.set('Content-Type', 'application/json')
   res.status(200)
   res.end(JSON.stringify(quarterbacksWithStats.rows))
});

app.get('/quarterbacks-with-stats/passing_touchdowns', async (req, res) => {
    let client = await pool.connect();
   let quarterbacksWithStats = await client.query(
       'SELECT id, name, current_team, passing_yards, passing_touchdowns, interceptions, passer_rating, years_played, image FROM quarterbacks INNER JOIN statistics ON id = quarterback_id ORDER BY passing_touchdowns DESC;'
   );
   res.set('Content-Type', 'application/json')
   res.status(200)
   res.end(JSON.stringify(quarterbacksWithStats.rows))
});

app.get('/quarterbacks-with-stats/interceptions', async (req, res) => {
    let client = await pool.connect();
   let quarterbacksWithStats = await client.query(
       'SELECT id, name, current_team, passing_yards, passing_touchdowns, interceptions, passer_rating, years_played, image FROM quarterbacks INNER JOIN statistics ON id = quarterback_id ORDER BY interceptions;'
   );
   res.set('Content-Type', 'application/json')
   res.status(200)
   res.end(JSON.stringify(quarterbacksWithStats.rows))
});

app.get('/quarterbacks-with-stats/passer_rating', async (req, res) => {
    let client = await pool.connect();
   let quarterbacksWithStats = await client.query(
       'SELECT id, name, current_team, passing_yards, passing_touchdowns, interceptions, passer_rating, years_played, image FROM quarterbacks INNER JOIN statistics ON id = quarterback_id ORDER BY passer_rating DESC;'
   );
   res.set('Content-Type', 'application/json')
   res.status(200)
   res.end(JSON.stringify(quarterbacksWithStats.rows))
});

app.get('/quarterbacks-with-stats/years_played', async (req, res) => {
    let client = await pool.connect();
   let quarterbacksWithStats = await client.query(
       'SELECT id, name, current_team, passing_yards, passing_touchdowns, interceptions, passer_rating, years_played, image FROM quarterbacks INNER JOIN statistics ON id = quarterback_id ORDER BY years_played DESC;'
   );
   res.set('Content-Type', 'application/json')
   res.status(200)
   res.end(JSON.stringify(quarterbacksWithStats.rows))
});


app.listen(process.env.PORT, (error) => {
    if (error) {
        console.log("Something went wrong")
    } else {
        console.log(`Listening at port ${port}`)
    }
})

// https://git.heroku.com/blooming-anchorage-04076.git