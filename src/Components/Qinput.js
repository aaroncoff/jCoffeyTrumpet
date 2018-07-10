import React, { Component } from 'react';
import axios from 'axios';


export default class Question extends Component {
    constructor(){
        super();
        this.state={
            questions: [],
            name: '',
            body: ''
        }
    }

    submit = () => {
        // e.preventDefault();
        const {name, body} = this.state;
        console.log({name, body})
        axios.post(`/api/questions`,{name, body}).then(res => {
            // this.props.history.push(`/quesans/${this.state.qid}`)
            this.setState({questions: res.data})
        console.log("---------submit hitting", res)
        })
    }

    render() {
        console.log(this.state)
        return(
            
            <form>
                
                <input className="name" placeholder="Question Title" onChange={(e) => this.setState({name: e.target.value})} ></input>
                <textarea className="body" placeholder="Question Body" onChange={(e) => this.setState({body: e.target.value})} ></textarea>
                <button onClick={(e) => this.submit(e)}>Submit</button>
            
                
            </form>
           
                 
              
             
        )
    }
}