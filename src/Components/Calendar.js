import React, { Component } from 'react';

export default class Calendar extends Component{

    //10to8 auth token 0fdffe3133cbca45602ddf39f5fd3239f47a6ecd

    //bleow is google calendar
    // calendar client id = 1035148877305-jqd012l69q0g0lun082e04pdlo183nfo.apps.googleusercontent.com
    // calendar client secret = 7Vm68X0Pw3jT9q5GgLA568vG

    

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