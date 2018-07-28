import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App';
import Question from './Components/Qinput';
import Answer from './Components/qAnswers';
import QaHome from './qaHome';
import updateQ from './Components/UpdateQ';
import Media from './NavComp/Media';
import Contact from './Contact';
import About from './NavComp/About';
import Login from './NavComp/Login';
import DashContainer from './Components/Dashboard/DashContainer';
import Home from './Home';
import BookGig from './Components/Booking/bookGig';
import BookLesson from './Components/Booking/bookLesson';



const routes = (
    <Switch>
        <Route exact path ='/' component={Home}/>
        <Route path = '/qahome' component={QaHome}/>
        <Route path = '/Music' component={Media}/>
        <Route path = '/Contact' component={Contact}/>
        <Route path = '/Lesson' component={BookLesson}/>
        <Route path = '/Gig' component={BookGig}/>
        <Route path = '/About' component={About}/>
        <Route path = '/Login' component={Login}/>
        <Route path = '/questions' component={Question}/>
        <Route path = '/updateQ' component={updateQ}/>
        <Route path = '/Dash' component={DashContainer}/>
    </Switch>
);

export default routes;