require('dotenv').config();
const { Pool } = require('pg');
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static('public'));

const pool = new Pool({
    database: 'quarterback-statistics'
});

app.get('/quarterbacks', async (req, res) => {
    const client = await pool.connect();
    let quarterbacks = await pool.query(
        'SELECT * FROM quarterbacks'
    );
    res.set('Content-Type', 'application/json')
    res.status(200)
    res.end(JSON.stringify(quarterbacks.rows))
 });

app.get('/quarterbacks-with-stats', async (req, res) => {
    let client = await pool.connect();
   let quarterbacksWithStats = await pool.query(
       'SELECT id, name, current_team, passing_yards, passing_touchdowns, interceptions, passer_rating, years_played FROM quarterbacks INNER JOIN statistics ON id = quarterback_id;'
   );
   res.set('Content-Type', 'application/json')
   res.status(200)
   res.end(JSON.stringify(quarterbacksWithStats.rows))
});

app.get('/quarterbacks-with-stats/:id', async (req, res) => {
    let id = req.params.id
    const client = await pool.connect();
    let quarterbackStats = await pool.query(
        'SELECT id, name, current_team, passing_yards, passing_touchdowns, interceptions, passer_rating, years_played FROM quarterbacks INNER JOIN statistics ON id = quarterback_id WHERE id = $1;',
         [id]
         );
         if (quarterbackStats.rows.length != 0) {
             res.status(200)
             res.json(quarterbackStats.rows)
         } else {
             res.status(404)
             res.set('Content-Type', 'text/plain')
             res.end(`Quarterback at ID: ${id}, not found`)
         }
});

app.post('/quarterbacks', async (req, res) => {
    const { name, current_team, passing_yards, passing_touchdowns, interceptions, passer_rating, years_played} = req.body
    const newQuarterback = await pool.query(
        'INSERT INTO quarterbacks (name, current_team) VALUES ($1, $2) RETURNING *;', [name, current_team]
    );

    let quarterbackId = newQuarterback.rows[0].id

    const newQuarterbackStats = await pool.query(
        'INSERT INTO statistics (quarterback_id, passing_yards, passing_touchdowns, interceptions, passer_rating, years_played) VALUES ($1, $2, $3, $4, $5, $6);',
        [quarterbackId, passing_yards, passing_touchdowns, interceptions, passer_rating, years_played]
    );
    
    let quarterbackStats = await pool.query(
        'SELECT id, name, current_team, passing_yards, passing_touchdowns, interceptions, passer_rating, years_played FROM quarterbacks INNER JOIN statistics ON id = quarterback_id WHERE id = $1;',
         [quarterbackId]
         );
         res.json(quarterbackStats.rows)
});

app.patch('/quarterbacks-with-stats/:id', async (req, res) => {
    let id = req.params.id
    let valueToChange = Object.keys(req.body).toString()
    let newValue = req.body[valueToChange]
    let rowCount = await pool.query(
        'SELECT * FROM quarterbacks WHERE id = $1;', 
        [id]
    );

    let columnName = ''

    if (valueToChange === 'name') {
        columnName += 'name'
    } else if (valueToChange === 'current_team') {
        columnName += 'current_team'
    } else if (valueToChange === 'passing_yards') {
        columnName += 'passing_yards'
    } else if (valueToChange === 'passing_touchdowns') {
        columnName += 'passing_touchdowns'
    } else if (valueToChange === 'interceptions') {
        columnName += 'interceptions'
    } else if (valueToChange === 'passer_rating') {
        columnName += 'passer_rating'
    } else if (valueToChange === 'years_played') {
        columnName += 'years_played'
    }

    if (rowCount.rows.length != 0) {
        if (columnName === 'name' || columnName === 'current_team') {
            let quarterbackChange = await pool.query(
                `UPDATE quarterbacks SET ${columnName} = $1 WHERE id = $2;`, 
                [newValue, id]
                )
            } else if (columnName === 'passing_yards' || columnName === 'passing_touchdowns' || columnName === 'interceptions' || columnName === 'passer_rating' || columnName === 'years_played') {
                let statisticChange = await pool.query(
                    `UPDATE statistics SET ${columnName} = $1 WHERE quarterback_id = $2`,
                    [newValue, id]
                    )
                } else {
                    res.status(404)
                    res.set('Content-type', 'text/plain')
                    res.json('Search parameters not found')
                }
                let updatedData = await pool.query(
                    'SELECT id, name, current_team, passing_yards, passing_touchdowns, interceptions, passer_rating, years_played FROM quarterbacks INNER JOIN statistics ON id = quarterback_id WHERE quarterback_id = $1;', 
                    [id]
                    );
                    res.status(200)
                    res.json(updatedData.rows)
            } else {
                res.status(404)
                res.set('Content-type', 'text/plain')
                res.end(`Player at ID: ${id}, not found`)
            }
});

app.delete('/quarterbacks-with-stats/:id', async (req,res) =>{
    let id = req.params.id
    let rowCount = await pool.query(
        'SELECT * FROM quarterbacks WHERE id = $1;', 
        [id]
    );

    if (rowCount.rows.length != 0) {
        let deleteStats = await pool.query(
            'DELETE FROM statistics WHERE quarterback_id = $1', [id]
        )
        let deleteQuarterback = await pool.query(
            'DELETE FROM quarterbacks WHERE id = $1', [id]
        )
        res.status(200)
        res.set('Content-type', 'application/json')
        res.end(`Deleted ${JSON.stringify(rowCount.rows)} from database`)
    } else {
        res.status(404)
        res.set('Content-type', 'text/plain')
        res.end(`Quarterback with ID: ${id}, not found`)
    }
})

app.listen(3000, (error) => {
    if (error) {
        console.log("Something went wrong")
    } else {
        console.log('Listening at port 3000')
    }
})

// https://git.heroku.com/blooming-anchorage-04076.git