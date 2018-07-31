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
            // Test with an element.
var initElement = document.getElementsByTagName("html")[0];
var json = mapDOM(initElement, true);
console.log(json);

// Test with a string.
initElement = "<div><span>text</span>Text2</div>";
json = mapDOM(initElement, true);
console.log(json);

function mapDOM(element, json) {
    var treeObject = {};

    // If string convert to document Node
    if (typeof element === "string") {
        if (window.DOMParser) {
              parser = new DOMParser();
              docNode = parser.parseFromString(element,"text/xml");
        } else { // Microsoft strikes again
              docNode = new ActiveXObject("Microsoft.XMLDOM");
              docNode.async = false;
              docNode.loadXML(element); 
        } 
        element = docNode.firstChild;
    }

    //Recursively loop through DOM elements and assign properties to object
    function treeHTML(element, object) {
        object["type"] = element.nodeName;
        var nodeList = element.childNodes;
        if (nodeList != null) {
            if (nodeList.length) {
                object["content"] = [];
                for (var i = 0; i < nodeList.length; i++) {
                    if (nodeList[i].nodeType == 3) {
                        object["content"].push(nodeList[i].nodeValue);
                    } else {
                        object["content"].push({});
                        treeHTML(nodeList[i], object["content"][object["content"].length -1]);
                    }
                }
            }
        }
        if (element.attributes != null) {
            if (element.attributes.length) {
                object["attributes"] = {};
                for (var i = 0; i < element.attributes.length; i++) {
                    object["attributes"][element.attributes[i].nodeName] = element.attributes[i].nodeValue;
                }
            }
        }
    }
    treeHTML(element, treeObject);

    return (json) ? JSON.stringify(treeObject) : treeObject;
}
        })
})



app.listen(PORT, () => console.log(`Server listening on Port:${PORT}`));