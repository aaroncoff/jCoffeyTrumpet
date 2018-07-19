INSERT INTO trumpet_users (email, password, admin)
VALUES ($1, $2, false)
RETURNING *;