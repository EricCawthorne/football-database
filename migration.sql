DROP TABLE IF EXISTS statistics;
DROP TABLE IF EXISTS quarterbacks;

CREATE TABLE quarterbacks (
    id serial NOT NULL PRIMARY KEY,
    name text,
    current_team text,
    image text
);

CREATE TABLE statistics (
    quarterback_id  INTEGER REFERENCES quarterbacks (id),
    passing_yards integer,
    passing_touchdowns integer,
    interceptions integer,
    passer_rating numeric,
    years_played integer
);

INSERT INTO quarterbacks (name, current_team, image) VALUES ('Josh Allen', 'Buffalo Bills', 'https://a.espncdn.com/i/headshots/nfl/players/full/3918298.png');
INSERT INTO quarterbacks (name, current_team, image) VALUES ('Tom Brady', 'Tampa Bay Buccaneers', 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/2330.png');
INSERT INTO quarterbacks (name, current_team, image) VALUES ('Teddy Bridgewater', 'Denver Broncos', 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/16728.png');
INSERT INTO quarterbacks (name, current_team, image) VALUES ('Joe Burrow', 'Cincinnati Bengals', 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3915511.png');
INSERT INTO quarterbacks (name, current_team, image) VALUES ('Derek Carr', 'Las Vegas Raiders', 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/16757.png');
INSERT INTO quarterbacks (name, current_team, image) VALUES ('Kirk Cousins', 'Minnesota Vikings', 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/14880.png');
INSERT INTO quarterbacks (name, current_team, image) VALUES ('Sam Darnold', 'Carolina Panthers', 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3912547.png');
INSERT INTO quarterbacks (name, current_team, image) VALUES ('Justin Fields', 'Chicago Bears', 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4362887.png');
INSERT INTO quarterbacks (name, current_team, image) VALUES ('Jared Goff', 'Detroit Lions', 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3046779.png');
INSERT INTO quarterbacks (name, current_team, image) VALUES ('Taylor Heinicke', 'Washington Football Team', 'https://a.espncdn.com/i/headshots/nfl/players/full/2565969.png');
INSERT INTO quarterbacks (name, current_team, image) VALUES ('Justin Herbert', 'Los Angeles Chargers', 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4038941.png');
INSERT INTO quarterbacks (name, current_team, image) VALUES ('Jalen Hurts', 'Philadelphia Eagles', 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4040715.png');
INSERT INTO quarterbacks (name, current_team, image) VALUES ('Lamar Jackson', 'Baltimore Ravens', 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3916387.png');
INSERT INTO quarterbacks (name, current_team, image) VALUES ('Daniel Jones', 'New York Giants', 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3917792.png');
INSERT INTO quarterbacks (name, current_team, image) VALUES ('Mac Jones', 'New England Patriots', 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4241464.png');
INSERT INTO quarterbacks (name, current_team, image) VALUES ('Trey Lance', 'San Francisco 49ers', 'https://a.espncdn.com/i/headshots/nfl/players/full/4383351.png');
INSERT INTO quarterbacks (name, current_team, image) VALUES ('Trevor Lawrence', 'Jacksonville Jaguars', 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4360310.png');
INSERT INTO quarterbacks (name , current_team, image) VALUES ('Patrick Mahomes', 'Kansas City Chiefs', 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3139477.png');
INSERT INTO quarterbacks (name, current_team, image) VALUES ('Baker Mayfield', 'Cleveland Browns', 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3052587.png');
INSERT INTO quarterbacks (name, current_team, image) VALUES ('Davis Mills', 'Housatan Texans', 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4242546.png');
INSERT INTO quarterbacks (name, current_team, image) VALUES ('Kyler Murray', 'Arizona Cardinals', 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3917315.png');
INSERT INTO quarterbacks (name, current_team, image) VALUES ('Dak Prescott', 'Dallas Cowboys', 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/2577417.png');
INSERT INTO quarterbacks (name, current_team, image) VALUES ('Aaron Rodgers', 'Green Bay Packers', 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/8439.png');
INSERT INTO quarterbacks (name, current_team, image) VALUES ('Ben Roethlisberger', 'Pittsburgh Steelers', 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/5536.png');
INSERT INTO quarterbacks (name, current_team, image) VALUES ('Matt Ryan', 'Atlanta Falcons', 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/11237.png');
INSERT INTO quarterbacks (name, current_team, image) VALUES ('Mathew Stafford', 'Los Angeles Rams', 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/12483.png');
INSERT INTO quarterbacks (name, current_team, image) VALUES ('Tua Tagovailoa', 'Miami Dolphins', 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4241479.png');
INSERT INTO quarterbacks (name, current_team, image) VALUES ('Ryan Tannehill', 'Tennessee Titans', 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/14876.png');
INSERT INTO quarterbacks (name, current_team, image) VALUES ('Carson Wentz', 'Indianapolis Colts', 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/2573079.png');
INSERT INTO quarterbacks (name, current_team, image) VALUES ('Russell Wilson', 'Seattle Seahawks', 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/14881.png');
INSERT INTO quarterbacks (name, current_team, image) VALUES ('Zach Wilson', 'New York Jets', 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4361259.png');
INSERT INTO quarterbacks (name, current_team, image) VALUES ('Jameis Winston', 'New Orlean Saints', 'https://a.espncdn.com/i/headshots/nfl/players/full/2969939.png');




INSERT INTO statistics (quarterback_id, passing_yards, passing_touchdowns, interceptions, passer_rating, years_played) VALUES (1, 11077, 79, 33, 91.9, 4); --allen
INSERT INTO statistics (quarterback_id, passing_yards, passing_touchdowns, interceptions, passer_rating, years_played) VALUES (2, 80971, 596, 193, 97.5, 22); --brady
INSERT INTO statistics (quarterback_id, passing_yards, passing_touchdowns, interceptions, passer_rating, years_played) VALUES (3, 12565, 60, 37, 91.0, 7); --bridgewater
INSERT INTO statistics (quarterback_id, passing_yards, passing_touchdowns, interceptions, passer_rating, years_played) VALUES (4, 3957, 24, 11, 94.2, 2); --burrow
INSERT INTO statistics (quarterback_id, passing_yards, passing_touchdowns, interceptions, passer_rating, years_played) VALUES (5, 28501, 178, 75, 92.2, 8); --carr
INSERT INTO statistics (quarterback_id, passing_yards, passing_touchdowns, interceptions, passer_rating, years_played) VALUES (6, 29768, 200, 86, 98.2, 10); --cousins
INSERT INTO statistics (quarterback_id, passing_yards, passing_touchdowns, interceptions, passer_rating, years_played) VALUES (7, 9463, 51, 45, 79.4, 4); --darnold
INSERT INTO statistics (quarterback_id, passing_yards, passing_touchdowns, interceptions, passer_rating, years_played) VALUES (8, 458, 1, 2, 64.5, 1); --fields
INSERT INTO statistics (quarterback_id, passing_yards, passing_touchdowns, interceptions, passer_rating, years_played) VALUES (9, 19474, 114, 58, 91.5, 6); --goff
INSERT INTO statistics (quarterback_id, passing_yards, passing_touchdowns, interceptions, passer_rating, years_played) VALUES (10, 1675, 10, 8, 84.6, 6); --heinicke
INSERT INTO statistics (quarterback_id, passing_yards, passing_touchdowns, interceptions, passer_rating, years_played) VALUES (11, 5912, 44, 13, 99.9, 2); --herbert
INSERT INTO statistics (quarterback_id, passing_yards, passing_touchdowns, interceptions, passer_rating, years_played) VALUES (12, 2426, 13, 7, 86.2, 2); --hurts
INSERT INTO statistics (quarterback_id, passing_yards, passing_touchdowns, interceptions, passer_rating, years_played) VALUES (13, 8604, 76, 21, 102.9, 4); --jackson
INSERT INTO statistics (quarterback_id, passing_yards, passing_touchdowns, interceptions, passer_rating, years_played) VALUES (14, 7252, 39, 23, 85.8, 3); --jones, daniel
INSERT INTO statistics (quarterback_id, passing_yards, passing_touchdowns, interceptions, passer_rating, years_played) VALUES (15, 1243, 5, 5, 86.4, 1); --jones, mac
INSERT INTO statistics (quarterback_id, passing_yards, passing_touchdowns, interceptions, passer_rating, years_played) VALUES (16, 354, 3, 1, 88.4, 1); --lance
INSERT INTO statistics (quarterback_id, passing_yards, passing_touchdowns, interceptions, passer_rating, years_played) VALUES (17, 1146, 6, 8, 71.3, 1); --lawrence
INSERT INTO statistics (quarterback_id, passing_yards, passing_touchdowns, interceptions, passer_rating, years_played) VALUES (18, 15642, 130, 30, 108.4, 5); -- mahomes
INSERT INTO statistics (quarterback_id, passing_yards, passing_touchdowns, interceptions, passer_rating, years_played) VALUES (19, 12355, 79, 45, 89.8, 4); --mayfield
INSERT INTO statistics (quarterback_id, passing_yards, passing_touchdowns, interceptions, passer_rating, years_played) VALUES (20, 669, 5, 5, 78, 1); --mills
INSERT INTO statistics (quarterback_id, passing_yards, passing_touchdowns, interceptions, passer_rating, years_played) VALUES (21, 9205, 56, 28, 93.8, 3); --murray
INSERT INTO statistics (quarterback_id, passing_yards, passing_touchdowns, interceptions, passer_rating, years_played) VALUES (22, 19002, 119, 43, 98.6, 6); --prescott
INSERT INTO statistics (quarterback_id, passing_yards, passing_touchdowns, interceptions, passer_rating, years_played) VALUES (23, 52486, 422, 92, 103.9, 17); --rodgers
INSERT INTO statistics (quarterback_id, passing_yards, passing_touchdowns, interceptions, passer_rating, years_played) VALUES (24, 61634, 402, 205, 93.8, 18); --roethlisberger
INSERT INTO statistics (quarterback_id, passing_yards, passing_touchdowns, interceptions, passer_rating, years_played) VALUES (25, 57099, 357, 161, 94.6, 14); --ryan
INSERT INTO statistics (quarterback_id, passing_yards, passing_touchdowns, interceptions, passer_rating, years_played) VALUES (26, 46696, 294, 147, 90.6, 13); --stafford
INSERT INTO statistics (quarterback_id, passing_yards, passing_touchdowns, interceptions, passer_rating, years_played) VALUES (27, 2029, 12, 6, 85.8, 2); --tagovailoa
INSERT INTO statistics (quarterback_id, passing_yards, passing_touchdowns, interceptions, passer_rating, years_played) VALUES (28, 28246, 184, 91, 91.9, 9); --tannehill
INSERT INTO statistics (quarterback_id, passing_yards, passing_touchdowns, interceptions, passer_rating, years_played) VALUES (29, 18133, 120, 51, 89.8, 6); --wentz
INSERT INTO statistics (quarterback_id, passing_yards, passing_touchdowns, interceptions, passer_rating, years_played) VALUES (30, 35142, 277, 82, 102.3, 10); --wilson, russell
INSERT INTO statistics (quarterback_id, passing_yards, passing_touchdowns, interceptions, passer_rating, years_played) VALUES (31, 1117, 4, 9, 62.9, 1); --wilson, zach
INSERT INTO statistics (quarterback_id, passing_yards, passing_touchdowns, interceptions, passer_rating, years_played) VALUES (32, 20704, 133, 91, 87.8, 7); --winston



SELECT * FROM quarterbacks;
SELECT * FROM statistics;

SELECT id, name, current_team, passing_yards, passing_touchdowns, interceptions, passer_rating, years_played, image FROM quarterbacks INNER JOIN statistics ON id = quarterback_id;
