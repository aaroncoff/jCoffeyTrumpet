import React, {Component} from 'react';
import axios from 'axios';



export default class SoundCloud extends Component {
    constructor(){
    super()
    this.state={clips: []}
    }
    // https://api.soundcloud.com/announcements?client_id=l4PHY7uZcvjhy51g4F3aDiLbjSR1t09C&app_version=1531391788&app_locale=en

    // http://api.soundcloud.com/tracks/294324164/stream?client_id=l4PHY7uZcvjhy51g4F3aDiLbjSR1t09C
   
    componentDidMount(){
        axios.get('http://api.soundcloud.com/tracks/294324164/stream?client_id=l4PHY7uZcvjhy51g4F3aDiLbjSR1t09C').then( res => {
            console.log(res.data.items);
            this.setState({videos: res.data.items})
        }).catch(err => console.log("youtube componentDidMount error", err))
    }
    
    render() {
        console.log(this.state)
        const {videos} = this.state
        return(
            <div>
                {videos.map((video, i) => {
                    console.log(video);

                    return(
                        <div key={i}>
                            <iframe src={`https://www.youtube.com/embed/${video.id}`}></iframe>
                     
                           
                        </div>
                    )
                })}
            </div>
        )
    }
}