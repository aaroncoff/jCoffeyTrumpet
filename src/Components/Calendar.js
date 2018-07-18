import React, { Component } from 'react';

export default class Calendar extends Component{

    componentDidMount(){
        axios.get('https://www.googleapis.com/youtube/v3/videos?part=snippet&id=q_6D59EPC4c&key=AIzaSyBNgtsI3_FrVggDfdcsE97D5zteUZ3iCAk').then( res => {
            console.log(res.data.items);
            this.setState({videos: res.data.items})
        }).catch(err => console.log("youtube componentDidMount error", err))
    }
    render(){
        return(
            <div>Calendar</div>
        )
    }
}