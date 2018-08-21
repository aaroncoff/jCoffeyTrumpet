import React, {Component} from 'react';
import axios from 'axios';



//api key = AIzaSyCXGFOszsv0wEaa4XUtUnR8IFGWs49kdrM

export default class YouTube extends Component {
    constructor(){
    super()
    // this.state={videos: []}
    this.state={
        playlist:[]
    }
    }
   
    // key=AIzaSyBNgtsI3_FrVggDfdcsE97D5zteUZ3iCAk
    // list=PLBY0vpgliIZCmagbrg5vseRwy_JycokcI
    
    componentDidMount(){
       this.fetchVideos()
    }

    fetchVideos = () => {
        axios.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=25&playlistId=PLBY0vpgliIZCmagbrg5vseRwy_JycokcI&key=AIzaSyBNgtsI3_FrVggDfdcsE97D5zteUZ3iCAk').then( res => {
            console.log(res.data);
            this.setState({playlist: res.data.items})
        }).catch(err => console.log("youtube componentDidMount error", err))
    }
    
    render() {
        console.log(this.state)
        const {playlist} = this.state
        return(
            <div>
                {playlist.map((playlist, i) => {
                    console.log(playlist);

                    return(
                        <div className="videoParent">
                            <div className="videochild">
                                <div key={i} className="video">
                                {/* <iframe src={`https://www.youtube.com/embed/${playlist.id}`}></iframe> */}
                                <iframe src={`https://www.youtube.com/embed/${playlist.snippet.resourceId.videoId}`}></iframe>
                                {/* <iframe src="https://www.youtube.com/embed?listType=playlist&list=PLBY0vpgliIZCmagbrg5vseRwy_JycokcI"></iframe> */}
                     
                           
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}



    //https://www.googleapis.com/youtube/v3/videos?part=snippet&id=q_6D59EPC4c&key=AIzaSyBNgtsI3_FrVggDfdcsE97D5zteUZ3iCAk