DROP DATABASE IF EXISTS soccer_league;
CREATE DATABASE soccer_league;
\c soccer_league;


CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL,
    team INTEGER REFERENCES teams(id),
    position TEXT NOT NULL
);

CREATE TABLE season (
    id SERIAL PRIMARY KEY,
    date_started DATE NOT NULL,
    date_ended DATE NOT NULL
)

CREATE TABLE teams (
    id SERIAL PRIMARY KEY,
    team_name TEXT NOT NULL,
    wins INTEGER NOT NULL,
    losses INTEGER NOT NULL
);

CREATE TABLE ranks (
    id SERIAL PRIMARY KEY,
    season INTEGER REFERENCES season(id),
    team INTEGER REFERENCES teams(id),
    rank INTEGER NOT NULL
);

CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    played_on DATE NOT NULL,
    team_1 INTEGER REFERENCES teams(id),
    team_2 INTEGER REFERENCES teams(id),
    winner INTEGER REFERENCES teams(id)
);

CREATE TABLE refs (
    id SERIAL PRIMARY KEY,
    first_name TEXT NOT NULL,
    last_name TEXT NOT NULL
);

CREATE TABLE ref_games (
    id SERIAL PRIMARY KEY
    game_id INTEGER REFERENCES games(id),
    ref_id INTEGER REFERENCES refs(id),
)