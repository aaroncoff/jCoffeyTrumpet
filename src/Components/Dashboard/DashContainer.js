import React, {Component} from 'react';
import axios from 'axios';
import AdminDash from './AdminDash';
import UserDash from './UserDash';


// const project = this.state

export default class DashContainer extends Component{
    constructor(){
        super()
        this.state={
            users: false,
            userData: {}
        }
    }

    componentDidMount(){
        axios.get(`/api/userData`).then(res => {
            console.log('dashContainer componentDidMount hit',res.data)
        
            if(res.data.admin){
                this.setState({ users: true, userData: res.data })
            }else{this.setState({userData: res.data})}
        })
    }

    // renderAdmin = () => {
    //     console.log('renderAdmin hit at dashContainer')
    //     return(
     
    //         <AdminDash/>
       
    //     )
    // }

   
    // renderUser = () => {
    //     console.log('renderUser hit in dashContainer')
    //     return(
        
    //         <UserDash/>
       
    //     )
    // }

    render(){
        console.log(this.state.users)
        const {users, userData} = this.state
        // console.log('-----====---++++ dashcontainer render', userData)

        // setTimeout(()=> {if(users&&userData != {}){
        //     console.log('hit')
        // }else if(userData){
        //     console.log('hit2')
        // }else{console.log('hit3', users, userData)}},2500)

        const ternary =  !userData ? null : users ? <AdminDash user={userData}/> : <UserDash user={userData}/>
        return(
            <div>
                <h1>
                    Hello
                </h1>
               {ternary}
             
            </div>
        )
    }
}
  
// componentDidMount(){
//     axios.get(`/api/userData`).then(res => {
//         if(res.data.trumpet_users.admin){
//             this.setState({ user: true })
//         }else{