import React, { Component } from 'react';
import "./App.css";
import About from './NavComp/About';
import Quotes from './Components/Quotes';


export default class Home extends Component{
    render(){
        return(
            // <div classname="topouter">
            //     <div classname="topinner">
                
                <About/>
               
            //     </div>
            // </div>

        )
    }
}