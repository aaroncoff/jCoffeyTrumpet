require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller');
const emailController = require('./emailController');
const bcrypt = require('bcryptjs');
// const nodemailer = require('nodemailer');
const session = require('express-session');
const PORT = 3400;

const app = express();
app.use(bodyParser.json());
app.use(session({
    resave: false,
    saveUninitialized: true,
    secret: process.env.SESSION_SECRET,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 14
    }
}))

massive( process.env.CONNECTION_STRING).then( dbInstance => {
    app.set('db', dbInstance);
}).catch(err => console.log('Database connection error', err));

// const transport = nodemailer.createTransport("SMTP", {
//     service: 'Gmail',
//     auth: {
//         
//     }
// })


app.get(`/api/questions`, controller.getQuestions);
app.get('/api/newQuestions', controller.getNewQuestions);
app.get('/api/answeredQ', controller.getAnsweredQuestions);
app.post(`/api/questions`, controller.addQuestion);
app.post(`/api/answerQues`, controller.answerQues);
app.post(`/api/sendEmail`, emailController.sendEmail);
app.post(`/api/register`, controller.register);
app.post('/api/login', controller.login);
app.put('/api/questions/:id', controller.updateQuestion);
app.delete(`/api/deleteQ/:id`, controller.deleteQuestion);



app.listen(PORT, () => console.log(`Server listening on Port:${PORT}`));