import React, {Component} from 'react';
import axios from 'axios';
import AdminDash from './AdminDash';
import UserDash from './UserDash';


// const project = this.state

export default class DashContainer extends Component{
    constructor(){
        super()
        this.state={
            users: false
        }
    }

    componentDidMount(){
        axios.get(`/api/userData`).then(res => {
            console.log('dashContainer componentDidMount hit',res.data)
            // if(res.data.admin){
            //     this.setState({ user: true })
            // }
        })
    }

    renderAdmin = () => {
        console.log('renderAdmin hit at dashContainer')
        return(
     
            <AdminDash user={this.state.users}/>
       
        )
    }

    //renderUser is hitting
    renderUser = () => {
        console.log('renderUser hit in dashContainer')
        return(
        
            <UserDash user={this.state.users}/>
       
        )
    }

    render(){
        console.log(this.state.users)
        const {users} = this.state
        return(
            <div>
                {users ? this.renderAdmin() : this.renderUser()}
            </div>
        )
    }
}
  
// componentDidMount(){
//     axios.get(`/api/userData`).then(res => {
//         if(res.data.trumpet_users.admin){
//             this.setState({ user: true })
//         }else{