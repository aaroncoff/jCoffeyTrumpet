import React, { Component } from 'react';
import About from './NavComp/About';
import Quotes from './Components/Quotes';

export default class Home extends Component{
    render(){
        return(
            <div>
                <About/>
                <Quotes/>
            </div>
        )
    }
}