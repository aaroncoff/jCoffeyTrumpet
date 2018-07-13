import React, {Component} from 'react';
import axios from 'axios';

export default class Answer extends Component{
    constructor(){
        super()
    
    this.state={
        questions: [],
        answer: ''
    }
}

    componentDidMount(){
        axios.get('/api/newQuestions').then(response => {
            //not hitting
            console.log('get new questions hit', response.data)
                this.setState({
                    questions: response.data
                })
                //below error logging in console
        }).catch(err => console.log('get new questions error', err))
    }

    answer(i, e){
        // let newState = this.state.questions.slice()
        // newState[i].answer = e.target.value
        this.setState({answer: e.target.value})

        console.log(i)
    }
    submitAnswer(m){
        // e.preventDefault()
        const {answer} = this.state;
        m.answer = answer;
        console.log(m);
        axios.post(`/api/answerQues`, {m}).then(response => {
            console.log('---------submitAnswer hit')
        })
    }
    render(){
        console.log(this.state)
        const {questions} = this.state
        return(
            <div>
                {questions.map((questions, i) => {
                    console.log(questions);
                    return( 
                        <div key={i}>
                            
                            {questions.body}
                            <textarea placeholder="Answer" onChange={(e) => this.answer(questions, e)}/>
                            <button onClick={() => this.submitAnswer(questions)}>Submit</button>
                        </div>
                    )
                })}
               
            </div>
        )
    }
}