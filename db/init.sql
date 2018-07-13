CREATE TABLE songster_users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(100),
    username VARCHAR(100) UNIQUE,
    password TEXT
);