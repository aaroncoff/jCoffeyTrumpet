UPDATE questions
SET body = $2, answer = $3
WHERE id = $1; 