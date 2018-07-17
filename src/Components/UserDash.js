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
            notes: [],
            
        }
        this.deleteQuestion = this.deleteQuestion.bind(this)
        this.reRender = this.reRender.bind(this)
    }



    
    
    render(){
       
            return(<div></div>)
                
        
        
     
    }
}

