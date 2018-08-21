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
import Stripe from './Components/Dashboard/Stripe';
import UserQ from './Components/Dashboard/UserQ';
import BookNav from './Components/Booking/bookNav';
import QaBlog from './Components/QAblog';



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
        <Route path = '/Wallet' component={Stripe}/>
        <Route path = '/MyQ' component={UserQ}/>
        <Route path = '/Booking' component={BookNav}/>
        <Route path = '/QAblog' component={QaBlog}/>
    </Switch>
);

export default routes;