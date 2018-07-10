INSERT INTO questions (name, body)
VALUES ($1, $2)
RETURNING *;

