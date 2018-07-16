const bcrypt = require('bcryptjs');
let saltRounds = 6;

module.exports = {

    register(req, res) {
        const dbInstance = req.app.get('db');
        const { username, password } = req.body;
        console.log('req.body', req.body);
        bcrypt.hash(password, saltRounds).then(hashedPassword => {
            let user = {
                username,
                password: hashedPassword
            }
            console.log('New User', user);
            dbInstance.create_user([username, hashedPassword]).then(() => {
                req.session.user = { username };
                res.status(200).json({user: req.session.user});
            }).catch(err => console.log('registration error', err));
        }).catch(err => console.log('Bcrypt hashing error', err));
    },
    
    login(req,res) {
        const dbInstance = req.app.get('db');
        const { username, password } = req.body;
        console.log('req.body login', req.body);
        dbInstance.find_user(username).then(users => {
            console.log('users', users);
            if(users.length) {
                let userData = users[0]
                bcrypt.compare(password, userData.password).then(doPasswordsMatch => {
                    console.log(doPasswordsMatch)
                    if(doPasswordsMatch) {
                        console.log('-------match')
                        delete userData.password;
                        req.session.user = userData;
                        req.session.save();
                        res.status(200).json({user: req.session.user})
                    }
                }).catch(err => console.log('bcrypt compare error', err));
            }
        }).catch(err => console.log('Database find user error', err))
    },

    logout(req, res){
        req.session.destroy();
    },

    getQuestions: (req, res) => {
        const dbInstance = req.app.get('db')
        dbInstance.get_question().then( questions => {
            res.send(questions);
        })
    },


    addQuestion: (req, res) => {
        console.log(req.body)
        const dbInstance = req.app.get('db')
        const {body} = req.body
        dbInstance.add_question([body]).then( questions => {
            console.log('1', questions);
            res.send(questions);
    })
    },

    getData: (req,res) => {
        
        if(req.session.user){
            res.send(req.session.user)
        }else{res.redirect('/')}
    },

    getNewQuestions: (req, res) => {
        console.log('---------------------getNewQuestions hitting')
        const dbInstance = req.app.get('db')
        // if(req.session.user){
           dbInstance.get_new_questions().then(questions => {
               console.log(questions);
               res.send(questions)
           }).catch(err => {
               console.log('get proj by spons error from backend', err)
               res.send('get new questions error from backend')
           })
        // }
    },

    getAnsweredQuestions: (req, res) => {
        console.log('----------------getAnsweredQuestions hitting')
        const dbInstance = req.app.get('db')
        dbInstance.get_answered_questions().then(questions => {
            console.log(questions);
            res.send(questions)
        }).catch(err => {
            console.log('get answered questions error from backend', err)
            res.send('get answered questions from back end error')
        })
    },

    answerQues: (req, res) => {
        console.log('-----------answerQues hitting')
        const {newAnswer, body} = req.body.m
        console.log(newAnswer, body);
        const dbInstance = req.app.get('db')
        dbInstance.post_new_answer([newAnswer, body]).then(answers => {
            console.log(answers);
            res.send(answers)
        }).catch(err => {
            console.log('--------post new answer backend error', err)
            res.send('posted new answer')
        })
    },

    updateQuestion: (req, res) => {
        const dbInstance=req.app.get('db')
        const {id} = req.params
        console.log(req.body.body, req.body.answer, id)
        dbInstance.update_question([id, req.body.body, req.body.answer
        ]).then( response => {
            console.log(id);
            res.status(200).send(response)
        }).catch(err => console.log("update question controller error", err))
    },

    deleteQuestion: (req, res) =>{
        console.log('-------deleteQuestion hitting from backend')
        const dbInstance = req.app.get('db')
        const {id} = req.params
        dbInstance.delete_question(id).then(questions => {
            console.log(id, "deleting")
            res.send(questions)
        }).catch(err => console.log("deleteQuestion controller error", err))
    }

    
       
       

}