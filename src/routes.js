import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import Question from './Components/Qinput';
import Answer from './Components/qAnswers';
import Dashboard from './Dashboard';
import QaHome from './qaHome';
import updateQ from './Components/UpdateQ';



const routes = (
    <Switch>
        <Route exact path ='/' component={App}/>
        <Route path = '/qahome' component={QaHome}/>
        <Route path = '/questions' component={Question}/>
        <Route path = '/dashboard' component={Dashboard}/>
        <Route path = '/updateQ' component={updateQ}/>
    </Switch>
);

export default routes;