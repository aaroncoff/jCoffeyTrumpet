import React, { Component } from 'react';
import axios from 'axios';
const parse  = require('xml2js').parseString;


export default class Quotes extends Component{
    constructor(){
        super()
        this.state={
         
            json:{}
        }
    }
    // key: 1AKDqyvE7mGF7ZifIJhw
    // secret: cTkbuV7SEEywoao6Gzit5VqY2l1PrkXOqZ4gukk275w
    // application name: JoshCoffeyMusic
    // Company Name: JoshCoffey

    //htps://www.goodreads.com/quotes
    //user_quote


    //https://goodreads.com/quotes/list/12751263

    componentDidMount(){
        axios.get('http://cors-anywhere.herokuapp.com/https://goodreads.com/quotes/list/84635291-ac').then(quotes => {
            parse(quotes.data,function (err, result) {
                console.dir(result);
             })
            this.jsonParse(quotes.data)
        })

    }

   jsonParse = (body) => {
    console.log(body)
    axios.post('/api/parseQuotes', body).then(res => {
        this.setState({json: {res}})
        
    })
   }

    // getQuotes = () => {
    //     console.log('get quotes method hitting on front end')
    //     axios.get('https://goodreads.com/quotes/list/84635291').then(res =>{
    //     this.setState({xml: res})
    //     })
    // }

    render(){
        console.log(this.state.json)
        return(
            <div>Quotes</div>
        )
    }
}