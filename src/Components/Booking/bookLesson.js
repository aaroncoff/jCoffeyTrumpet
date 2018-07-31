import React, { Component } from 'react';

export default class BookLesson extends Component{

    componentDidMount(){
        console.log(window)
        window.TTE.init({
            targetDivId: "TTE-UUID",
            uuid:  "bfc81293-892a-4c07-94ad-fdf6393d5dc1",
            service: 499978
        })






    }

    render(){
        return(
        
        <div id="TTE-UUID">
          
        </div>
        )
    }
}

  {/* <a id="TTE-bfc81293-892a-4c07-94ad-fdf6393d5dc1" href="https://10to8.com/book/kmgmbhzmnqschmfaxrczv-free/" target="_blank">
            See Online Booking Page
            </a>
                <script src="https://d3saea0ftg7bjt.cloudfront.net/embed/js/embed.min.js">
                </script>
                <script>
                window.TTE.init({
                    targetDivId: "TTE-bfc81293-892a-4c07-94ad-fdf6393d5dc1",
                    uuid: "bfc81293-892a-4c07-94ad-fdf6393d5dc1",
                    service: 499978
                });
                </script> */}