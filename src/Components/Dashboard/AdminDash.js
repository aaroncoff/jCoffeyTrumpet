import React, {Component} from 'react';
// import Answer from './Components/qAnswers';
import axios from 'axios';
// import updateQ from './Components/UpdateQ';
import { Link } from 'react-router-dom';

//google calendar
//client id = 224735195017-dpmkfvl9rqv4bjkjc9mu666kg0gp9g52.apps.googleusercontent.com
//client secret = hQm9DsyO0IN0Xy-v0aKDJAXp


export default class Dashboard extends Component{
    constructor(){
        super()
        this.state={
            questions: [],
            oldQ: [],
            newQ: [],
            newAnswer: "",
           
        }
        this.deleteQuestion = this.deleteQuestion.bind(this)
        this.reRender = this.reRender.bind(this)
    }

    
    // componentDidMount(){
    //     axios.get(`api/userData`).then(res => {
    //         if(req.session.user){
    //             if(req.session.user.admin){
    //                 this.fetchAdminDash()
    //             }else{this.fetchUserDash()}
    //         }else{
    //             res.redirect('/Login')
    //         }
    //     })
    // }

    componentDidMount(){
        this.fetchAdminDash()
    }

    fetchAdminDash(){
        const oldQuestions = []
        const newQuestions = []
        axios.get(`/api/questions`).then(response => {
            this.setState({
                questions: response.data
            })
        }).then(() => {
            this.state.questions.map(e => 
                e.answer ? oldQuestions.push(e) : newQuestions.push(e))
                this.setState({
                    oldQ: oldQuestions,
                    newQ: newQuestions
                })
                console.log("getting old questions", this.state.oldQ)
                console.log("getting new questions", this.state.newQ)
        }).catch(err => console.log("other error", err))
    }

    answer(e){
        // let newState = this.state.questions.slice()
        // newState[i].answer = e.target.value
        this.setState({newAnswer: e.target.value})

        console.log(e)
    }
    submitAnswer(m){
        // e.preventDefault()
        const {newAnswer} = this.state;
        m.newAnswer = newAnswer;
        console.log(m);
        axios.post(`/api/answerQues`, {m}).then(response => {
            console.log('---------submitAnswer hit')
        })
    }

    updateQuestion = (id) => {
        console.log(this.state.projects)
        axios.all([
            axios.put(`/api/questions${id}`),
            axios.delete(`/api/deleteQ${id}`)
        ]).then(response => {
           console.log('axios all update hit', response) 
           this.setState({
               projects: response.data
           })
        })
    }

    deleteQuestion(id){
        console.log(id)
       axios.delete(`/api/deleteQ/${id}`).then(response => {
            console.log("---------axios delete question hit", response)

           
            this.reRender()
     
        }).catch(err => console.log("deleteQ method error", err))
}

    
    render(){
        console.log(this.state)
        const {oldQ, newQ} = this.state
        console.log(newQ, oldQ)

        var DispNewQ = newQ.map((p, i) => {
            return(
                <div key={i}>
                   Question: {p.body}
                   Answer: <textarea placeholder="Answer" onChange={(e, i) => this.answer(e, i)}/>
                            <button onClick={() => this.submitAnswer(p)}>Submit</button>
                            
                </div>
            )
        })

        var DispOldQ = oldQ.map((e, i) => {
            return(
                <div key={i}>
                   Question: {e.body}
                   Answer: {e.answer}
                   <button onClick={()=>this.deleteQuestion(e.id)}>Delete</button>
                   <button><Link to={{pathname: "/updateQ", state: e}}>Update Question</Link></button>
                   
                  
                </div>
            )
        })
        
        return(
            <div>
                <h1>Dashboard</h1>
               *** New Questions ***
                {DispNewQ}

               *** Old Questions ***
                {DispOldQ} 
                
                
              
            </div>
        )
    }
}
    