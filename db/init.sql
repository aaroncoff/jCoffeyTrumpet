CREATE TABLE trumpet_users (
    id SERIAL PRIMARY KEY,
    username VARCHAR UNIQUE,
    password VARCHAR
);

CREATE TABLE questions (
    id SERIAL PRIMARY KEY,
    body VARCHAR,
    answer VARCHAR
);