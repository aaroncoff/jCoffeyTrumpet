import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import Question from './Components/Qinput';
import Answer from './Components/qAnswers';
import Dashboard from './Dashboard';
import QaHome from './qaHome';
import updateQ from './Components/UpdateQ';
import Media from './NavComp/Media';
import UserDash from './Components/UserDash';
import Contact from './Contact';
import About from './NavComp/About';
import Login from './NavComp/Login';
import NavDash from './NavComp/MyDash';



const routes = (
    <Switch>
        <Route exact path ='/' component={App}/>
        <Route path = '/qahome' component={QaHome}/>
        <Route path = '/Music' component={Media}/>
        <Route path = '/Contact' component={Contact}/>
        <Route path = '/About' component={About}/>
        <Route path = '/Login' component={Login}/>
        <Route path = '/questions' component={Question}/>
        <Route path = '/dashboard' component={Dashboard}/>
        <Route path = '/updateQ' component={updateQ}/>
        <Route path = '/userdash' component={UserDash}/>
        <Route path = '/Dash' component={NavDash}/>
    </Switch>
);

export default routes;