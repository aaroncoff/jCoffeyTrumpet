module.exports = {

    getQuestions: (req, res) => {
        const dbInstance = req.app.get('db')
        dbInstance.get_question().then( questions => {
            res.send(questions);
        })
    },


    addQuestion: (req, res) => {
        console.log(req.body)
        const dbInstance = req.app.get('db')
        const {name, body} = req.body
        dbInstance.add_question([name, body]).then( questions => {
            console.log('1', questions);
            res.send(questions);
    })
    }
}