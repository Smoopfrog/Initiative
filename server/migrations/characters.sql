CREATE TABLE characters (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id),
  charName VARCHAR(55) NOT NULL,
  level INT NOT NULL,
  race VARCHAR(55) NOT NULL,
  class VARCHAR(55) NOT NULL,
  hp INT NOT NULL,
  ac INT NOT NULL
);