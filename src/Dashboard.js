import React, {Component} from 'react';
import Answer from './Components/qAnswers';
import axios from 'axios';


export default class Dashboard extends Component{
    constructor(){
        super()
        this.state={
            questions: [],
            oldQ: [],
            newQ: []
        }
    }

    //getting catch error on componentDidMount
    //
    componentDidMount(){
        const oldQuestions = this.state.oldQ.slice()
        const newQuestions = this.state.newQ.slice()
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

    // Qsplit(){
    //     const oldQuestions = this.state.oldQ
    //     const newQuestions = this.state.newQ

    //     this.state.questions.map(e => 
    //     this.state.questions[e].answer ? this.state.questions[e].push(oldQuestions) : this.state.questions[e].push(newQuestions))
    //     console.log("getting old questions", oldQuestions)
    //     console.log("getting new questions", newQuestions)
    // }

    
    render(){
        console.log(this.state)
        const {oldQ, newQ} = this.state
        console.log(newQ, oldQ)

        var DispNewQ = newQ.map((p, i) => {
            return(
                <div key={i}>
                   Question: {p.body}
                   Answer: <textarea/>
                </div>
            )
        })

        var DispOldQ = oldQ.map((e, i) => {
            return(
                <div key={i}>
                   Question: {e.body}
                   Answer: {e.answer}
                </div>
            )
        })
        
        return(
            <div>
               *** New Questions ***
                {DispNewQ}

               *** Old Questions ***
                {DispOldQ}
              
            </div>
        )
    }
}

