require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller');
const PORT = 3400;

const app = express();
app.use(bodyParser.json());

massive( process.env.CONNECTION_STRING).then( dbInstance => {
    app.set('db', dbInstance);
}).catch(err => console.log('Database connection error', err));


app.get(`/api/questions`, controller.getQuestions);
app.post(`/api/questions`, controller.addQuestion);


app.listen(PORT, () => console.log(`Server listening on Port:${PORT}`));