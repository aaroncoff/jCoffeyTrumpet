import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router';


class Question extends Component {
    constructor(){
        super();
        this.state={
            questions: [],
            answeredQ: [],
            body: ''
        }
    }

    componentDidMount(){
        axios.get('/api/answeredQ').then(response => {
            console.log(response.data)
            this.setState({answeredQ: response.data})
        }).catch(err => console.log('get answered question error', err))
    }

   

    submit = (e) => {
        e.preventDefault();
        const {body} = this.state;
        console.log({body})
        axios.post(`/api/questions`,{body}).then(res => {
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
                
                
                <textarea className="body" value={this.state.body} placeholder="Question Body" onChange={(e) => this.setState({body: e.target.value})} ></textarea>
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