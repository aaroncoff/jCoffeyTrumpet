import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import Question from './Components/Qinput';



const routes = (
    <Switch>
        <Route path = '/quesans' component={Question}/>
        <Route exact path ='/' component={App}/>
    </Switch>
);

export default routes;