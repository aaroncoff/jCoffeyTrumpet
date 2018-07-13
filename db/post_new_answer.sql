UPDATE questions
SET answer = $1
WHERE body = $2; 
SELECT * FROM questions
WHERE questions.answer IS null;