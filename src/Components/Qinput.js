import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';


class Question extends Component {
    constructor(){
        super();
        this.state={
            questions: [],
            answeredQ: [],
            id: '',
            body: ''
        }
    }

    // componentDidMount(){
    //     axios.all([
    //         axios.get('/api/answeredQ'),
    //         axios.get('/api/userData')
    //     ]).then(axios.spread((ansRes,DataRes) => {
    //         console.log(ansRes.data, DataRes.data)
    //         this.setState({id:DataAns.data.id, body: dataRes.data})
    //     }).catch(err => console.log('get answered question error', err))
    // },

    componentDidMount(){
        axios.all([
            axios.get('/api/answeredQ'),
            axios.get('/api/userData')
        ]).then(axios.spread((ansRes, dataRes) => {
            console.log(ansRes, ansRes.data, dataRes, dataRes.data)
            this.setState({id: dataRes.data.id, body: ansRes})
        })).catch(err => console.log('get answered question error', err))
    }
   

    submit = (e) => {
        e.preventDefault();
        const {id, body} = this.state;
        console.log({id, body})
        axios.post(`/api/questions`,{id, body}).then(res => {
            this.props.history.push(`/qahome`)
            this.setState({questions: res.data, body:''})
        console.log("---------submit hitting", res)
        })
    }

    render() {
        console.log(this.state)
        const {answeredQ} = this.state
        return(
            
            <form>
                
                
                <textarea className="body" value={this.state.body} placeholder="Ask Josh a Question" onChange={(e) => this.setState({body: e.target.value})} ></textarea>
                <button onClick={(e) => this.submit(e)}>Submit</button>

                <div>
                {answeredQ.map((answeredQ, i) => {
                    console.log(answeredQ);

                    return( 


                        <div key={i}>
                            
                            
                            Question: {answeredQ.body}
                            {" "}
                            Answer: {answeredQ.answer}

                        </div>
                    )
                })}
               
            </div>
        
            
                
            </form>
           
                 
              
             
        )
    }
}
export default withRouter(Question); 