INSERT INTO trumpet_users (username, password)
VALUES ($1, $2)
RETURNING *;