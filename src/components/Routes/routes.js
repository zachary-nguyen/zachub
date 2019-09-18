import React from 'react';
import {Route, Switch} from "react-router";
import Home from "../../views/Home/home";
import AllRepositories from "../../views/AllRepositories/allRepositories";
import AboutMe from "../../views/AboutMe/aboutMe";
import ContactMe from "../../views/ContactMe/contactMe";
import Playground from "../../views/Playground/playground";
import Error from "../../views/Error/Error";


const Routes = () =>{
    return(
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/all' exact component={AllRepositories}/>
            <Route path='/about' component={AboutMe}/>
            <Route path='/contact' component={ContactMe}/>
            <Route path='/playground' component={Playground}/>
            <Route component={Error}/>
        </Switch>
    )
}

export default Routes;
