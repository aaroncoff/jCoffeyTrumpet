const cors = require('cors');
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const controller = require('./controller');
const emailController = require('./emailController');
const bcrypt = require('bcryptjs');
// const nodemailer = require('nodemailer');
const session = require('express-session');
const parseString = require('xml2js').parseString;
const PORT = 3400;
const axios = require('axios');
const app = express();
const goodReadsJSONResponse = require('goodreads-json-api');
app.use(cors());
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
app.get(`/api/userData`,controller.getData);
app.post(`/api/questions`, controller.addQuestion);
app.get('/api/questions/:id', controller.getUserQuestions);
app.post(`/api/answerQues`, controller.answerQues);
app.post(`/api/sendEmail`, emailController.sendEmail);
app.post(`/api/register`, controller.register);
app.post('/api/login', controller.login);
app.post('/api/parseQuotes', controller.parseQuotes);
app.put('/api/questions/:id', controller.updateQuestion);
app.delete(`/api/deleteQ/:id`, controller.deleteQuestion);
app.get("/test", (req,res)=> {
    var xml = `<root>Hello xml2js!</root>`
    axios.get('https://goodreads.com/quotes/list/84635291-ac').then(quotes => {
        const options = {
            xml: {
                normalizeWhitespace: true
            }
        }
        const statusCode = res.statusCode;
        const contentType = res.headers['content-type'];
        let error;
        if (statusCode !== 200){
            error = new Error('Request Failed./n' + `Status Code: ${statusCode}`);
        }
        if (error) {
            console.log("------1", error.message);
            res.resume();
            return;
        }
        res.setDefaultEncoding('utf8');
        let rawData = '';
        res.on('data', (chunk) => rawData += chunk);
        res.on('end', () => {
            try {
                const resp = goodReadsJSONResponse.convertToJson(rawData);
                console.log("--------2",resp)
            } catch (e) {
                console.log("----------3",e.message);
            }
        });
            // var string = JSON.stringify(quotes.data,function (err, result) {
            //     console.log(result);
            //     return result
             }).on('error', (e) => {
                 console.log("---------4",`Got error: ${e.message}`);
             })
            //  var string2 = JSON.parse(string)
            //  console.log(string, string2)
            //  res.send("test")
            // this.jsonParse(quotes.data)
        })




app.listen(PORT, () => console.log(`Server listening on Port:${PORT}`));