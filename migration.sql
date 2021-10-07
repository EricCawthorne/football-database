DROP TABLE IF EXISTS statistics;
DROP TABLE IF EXISTS quarterbacks;

CREATE TABLE quarterbacks (
    id serial NOT NULL PRIMARY KEY,
    name text,
    current_team text
);

CREATE TABLE statistics (
    quarterback_id  INTEGER REFERENCES quarterbacks (id),
    passing_yards integer,
    passing_touchdowns integer,
    interceptions integer,
    passer_rating numeric,
    years_played integer
);

INSERT INTO quarterbacks (name, current_team) VALUES ('Tom Brady', 'Tampa Bay Buccaneers');
INSERT INTO quarterbacks (name, current_team) VALUES ('Aaron Rodgers', 'Green Bay Packers');
INSERT INTO quarterbacks (name , current_team) VALUES ('Patrick Mahomes', 'Kansas City Chiefs');
INSERT INTO quarterbacks (name, current_team) VALUES ('Kyler Murray', 'Arizona Cardinals');
INSERT INTO quarterbacks (name, current_team) VALUES ('Justin Herbert', 'Los Angeles Chargers');
INSERT INTO quarterbacks (name, current_team) VALUES ('Josh Allen', 'Buffalo Bills');
INSERT INTO quarterbacks (name, current_team) VALUES ('Lamar Jackson', 'Baltimore Ravens');



INSERT INTO statistics (quarterback_id, passing_yards, passing_touchdowns, interceptions, passer_rating, years_played) VALUES (1, 80560, 591, 193, 97.3, 22);
INSERT INTO statistics (quarterback_id, passing_yards, passing_touchdowns, interceptions, passer_rating, years_played) VALUES (2, 52142, 420, 91, 103.9, 17);
INSERT INTO statistics (quarterback_id, passing_yards, passing_touchdowns, interceptions, passer_rating, years_played) VALUES (3, 15370, 128, 28, 109.5, 5);
INSERT INTO statistics (quarterback_id, passing_yards, passing_touchdowns, interceptions, passer_rating, years_played) VALUES (4, 8966, 55, 28, 93.5, 3);
INSERT INTO statistics (quarterback_id, passing_yards, passing_touchdowns, interceptions, passer_rating, years_played) VALUES (5, 5514, 40, 13, 98.7, 2);
INSERT INTO statistics (quarterback_id, passing_yards, passing_touchdowns, interceptions, passer_rating, years_played) VALUES (6, 10762, 76, 33, 91.1, 4);
INSERT INTO statistics (quarterback_id, passing_yards, passing_touchdowns, interceptions, passer_rating, years_played) VALUES (7, 8162, 72, 21, 101.1, 4);


SELECT * FROM quarterbacks;
SELECT * FROM statistics;

SELECT id, name, current_team, passing_yards, passing_touchdowns, interceptions, passer_rating, years_played FROM quarterbacks INNER JOIN statistics ON id = quarterback_id;
