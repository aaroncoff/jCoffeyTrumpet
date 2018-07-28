-- SELECT * FROM questions 
-- INNER JOIN trumpet_users.id = questions.userId = trumpet_users.id;

SELECT * FROM questions JOIN trumpet_users ON questions.userId = trumpet_users.id;