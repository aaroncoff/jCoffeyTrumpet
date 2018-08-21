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

    }



 
    
    render(){
        return(
            
            <div>
                {/* <nav className='dash-nav'>

                    
                    <button href='./UserQ.js'>My Questions</button>

                    <button href='/Login'>Logout</button>
                </nav> */}

                <nav>
                    <Link to='/Booking'>Book Josh</Link>
                    <Link to='/Wallet'>My Wallet</Link>
                    <Link to='/MyQ'>My Questions</Link>
                </nav>
            

            </div>
           
                 
              
             
        )
                
        
        
     
    }
}

