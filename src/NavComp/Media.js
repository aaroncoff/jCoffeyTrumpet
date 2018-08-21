import React, { Component } from 'react';

import '../App.css';

import YouTube from '../Components/MusicPlayer/YouTube';

export default class QaHome extends Component{
    render(){
        return(
            <div className="header-parent">
                <header className="App-header">
                    Josh's Music
                    
                </header>
        
                <YouTube/>
          
       

            </div>
        )
    }
}