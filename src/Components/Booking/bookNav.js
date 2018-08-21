import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class BookNav extends Component {
    render(){
        return(
            <div>
                <nav>
                    <Link to='/Lessons'>Private Lessons</Link>
                    <Link to='/Gig'>Gigs</Link>
                </nav>
            </div>
        )
    }
}