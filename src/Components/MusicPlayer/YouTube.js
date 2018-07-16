import React, {Component} from 'react';
import axios from 'axios';

//api key = AIzaSyCXGFOszsv0wEaa4XUtUnR8IFGWs49kdrM

export default class YouTube extends Component {
    constructor(){
    super()
    this.state={videos: []}
    }
    componentDidMount(){
        axios.get('https://www.googleapis.com/youtube/v3/videos?part=snippet&id=q_6D59EPC4c&key=AIzaSyBNgtsI3_FrVggDfdcsE97D5zteUZ3iCAk').then( res => {
            console.log(res.data.items);
            this.setState({videos: res.data.items})
        }).catch(err => console.log("youtube componentDidMount error", err))
    }
    
    render() {
        console.log(this.state)
        const {videos} = this.state
        return(
            <div>
                {videos.map((videos, i) => {
                    console.log(videos);

                    return(
                        <div key={i}>
                     
                            {videos[i]}
                        </div>
                    )
                })}
            </div>
        )
    }
}



    //https://www.googleapis.com/youtube/v3/videos?part=snippet&id=q_6D59EPC4c&key=AIzaSyBNgtsI3_FrVggDfdcsE97D5zteUZ3iCAk