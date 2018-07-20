CREATE TABLE trumpet_users (
    id SERIAL PRIMARY KEY,
    email VARCHAR UNIQUE,
    password VARCHAR
);

CREATE TABLE questions (
    id SERIAL PRIMARY KEY,
    userId INT,
    body VARCHAR,
    answer VARCHAR
);

ALTER TABLE trumpet_users
ADD email varchar;