const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');
require('dotenv').config()

module.exports = {
    sendEmail: (req,res) => {
        console.log('-----hit', req.body)
        const { name, email, text } = req.body
        console.log('req.body', name, email, text)

        let transporter = nodemailer.createTransport({
            service: "gmail",
            // host: 'smtp.gmail.com',
            auth: {
                // xoauth2: xoauth2.createXOAUth2Generator({
                    user: process.env.NODEMAILER_ADDRESS,
                    password: process.env.NODEMAILER_PASSWORD,
                    // clientId: '1035148877305-q0cfv2ucgpvgl9kiek07fpe7uvr6f825.apps.googleusercontent.com',
                    // clientSecret: 'Xxx72MtczOBK8XyWBn6ShM13',
                    // refreshToken: '',
                    // type: "OAuth2"
                // })
            },
            tls: {
                rejectUnauthorized: false
            }
        })
        console.log('transporter', transporter)

        let mailOptions = {
            from: name + ' ' + process.env.NODEMAILER_ADDRESS,
            to: process.env.NODEMAILER_ADDRESS,
            // subject: 'Comments/Concern',
            text: name + ' ' + email + ' ' + text
        }

        // var message = {
        //     from: process.env.NODEMAILER_ADDRESS,
        //     to: process.env.NODEMAILER_ADDRESS,
        //     text: req.body.text,
        //     html: `<p>From: ${req.body.name}, ${req.body.email}</p>`+
        //             `<p>${req.body.text}</p>`
        

    console.log('process.env.NODEMAILER_ADDRESS', process.env.NODEMAILER_ADDRESS)

        transporter.sendMail(mailOptions, (error, info) => {
            if(error){
                console.log("----error", error)
            }else{
                console.log("Message was sent", info.response)
                transporter.close()
                res.redirect('/')
            }
        })
    }
}