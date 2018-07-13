import React, {Component} from 'react';
import Answer from './Components/qAnswers';
import Question from './Components/Qinput';


export default class Dashboard extends Component{
    render(){
        return(
            <div>
               *** New Questions ***
              <Answer/>

               *** Answered Questions ***
                <Question/>
            </div>
        )
    }
}

