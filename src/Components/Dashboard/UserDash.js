import React, {Component} from 'react';
import Answer from '../qAnswers';
import axios from 'axios';
import updateQ from '../UpdateQ';
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


    // componentDidMount(){
    //     console.log('userdash compdidmount hitting', this.props)
    //     this.fetchMyQuestions(this.props.user.id)
    // }

    fetchMyQuestions(id){
        console.log(id)
        const oldQuestions = []
        const newQuestions = []
        axios.get(`/api/questions/${id}`).then(response => {
            console.log('++++++++++++++',response)
            this.setState({
                
                myQuestions: response.data
            })
        }).then(() => {
            this.state.myQuestions.map(e => e.answer ? oldQuestions.push(e) : newQuestions.push(e))
            console.log('-----------', oldQuestions, newQuestions)
                this.setState({
                    myOldQ: oldQuestions,
                    myNewQ: newQuestions
                })
                console.log("getting old questions", this.state.oldQ)
                console.log("getting new questions", this.state.newQ)
        }).catch(err => console.log("other error", err))
    }
    
    
    render(){
       
        console.log('==================',this.props)
        const {myOldQ, myQuestions} = this.state

        // myQuestions.length ? null : this.props.user.id ? this.fetchMyQuestions(this.props.user.id) : null

        var qMap =  myOldQ.map((myOldQ, i) => {
            console.log(myOldQ);

            return( 


                <div key={i}>
                    
                    
                    Question: {myOldQ.body}
                    {" "}
                    Answer: {myOldQ.answer}

                </div>
            )
        })
       

        return(
            
            <div>
                <Link to='/qahome'>Ask Josh | </Link>
                {qMap}
                <form>
                
                
                {/* <textarea className="body" value={this.state.body} placeholder="Ask Josh a Question" onChange={(e) => this.setState({body: e.target.value})} ></textarea>
                <button onClick={(e) => this.submit(e)}>Submit</button> */}

                <div>
               
            </div>
        
            
                
            </form>
            </div>
           
                 
              
             
        )
                
        
        
     
    }
}

