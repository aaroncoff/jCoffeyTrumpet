import React, {Component} from 'react';
import Answer from '../Components/qAnswers';
import axios from 'axios';
import updateQ from '../Components/UpdateQ';
import { Link } from 'react-router-dom';


//Message josh
//Pay bills
//my calendar/homework



export default class UserDash extends Component{
    constructor(){
        super()
        this.state={
            myQuestions: [],
            myOldQ: [],
            myNewQ: []
            
        }
        // this.deleteQuestion = this.deleteQuestion.bind(this)
        this.fetchMyQuestions = this.fetchMyQuestions.bind(this)
    }


    componentDidMount(){
        this.fetchMyQuestions()
    }

    fetchMyQuestions(){
        const oldQuestions = []
        const newQuestions = []
        axios.get(`/api/questions/:id`).then(response => {
            this.setState({
                myQuestions: response.data
            })
        }).then(() => {
            this.state.myQuestions.map(e => 
                e.answer ? oldQuestions.push(e) : newQuestions.push(e))
                this.setState({
                    myOldQ: oldQuestions,
                    myNewQ: newQuestions
                })
                console.log("getting old questions", this.state.oldQ)
                console.log("getting new questions", this.state.newQ)
        }).catch(err => console.log("other error", err))
    }
    
    
    render(){
       
        console.log(this.state)
        const {myOldQ} = this.state
        return(
            
            <div>
                <Link to='/qahome'>Ask Josh | </Link>

                <form>
                
                
                {/* <textarea className="body" value={this.state.body} placeholder="Ask Josh a Question" onChange={(e) => this.setState({body: e.target.value})} ></textarea>
                <button onClick={(e) => this.submit(e)}>Submit</button> */}

                <div>
                {myOldQ.map((myOldQ, i) => {
                    console.log(myOldQ);

                    return( 


                        <div key={i}>
                            
                            
                            Question: {myOldQ.body}
                            {" "}
                            Answer: {myOldQ.answer}

                        </div>
                    )
                })}
               
            </div>
        
            
                
            </form>
            </div>
           
                 
              
             
        )
                
        
        
     
    }
}

