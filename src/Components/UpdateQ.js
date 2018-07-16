import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class updateQ extends Component {
    constructor() {
        super();
        this.state={
            body: "",
            answer: ""
        }
    }
 
    componentDidMount(){
        console.log(this.props.location.state)
        this.setState({
            body: this.props.location.state.body,
            answer: this.props.location.state.answer
          
            
        })
        }

    setBody = (e) => {
        this.setState(
            {body: e.target.value}
        )
    }

    setAnswer = (e) => {
        this.setState(
            {answer: e.target.value}
        )
    }


    submit = (e) => {
        e.preventDefault();
        const {body, answer} = this.state;
        axios.put(`/api/questions/${this.props.location.state.id}`, {body, answer}).then(res => {
            this.props.history.push(`/qahome/${body}`)
        console.log(res)
        })
    }

   

    render() {
        console.log(this.state)
        return (
            <div>
        
                
                <form>
                    <input type='text' placeholder={this.state.body} onChange={ this.setBody }  />
                    <input type='text' placeholder={this.state.answer} onChange={ this.setAnswer }  />
                    <button className="projSubmit" onClick={(e) => this.submit(e)}>Submit</button>
                    <Link to='/dashboard'>Back To Question Dashboard</Link>
                </form>
             
            </div>
        )
    }
}