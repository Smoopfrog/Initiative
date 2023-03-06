CREATE DATABASE initiative

CREATE TABLE characters (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id),
  name VARCHAR(55) NOT NULL,
  level INT NOT NULL,
  race VARCHAR(55) NOT NULL,
  class VARCHAR(55) NOT NULL,
  hp INT NOT NULL,
  ac INT NOT NULL,
  charsheet VARCHAR(500)
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  username VARCHAR(55) NOT NULL,
  password VARCHAR(60) NOT NULL
);