import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Home/Home.js';
import Header from './Header/Header.js';

const Routes = () => {
    return(
        <BrowserRouter>
            <Header/>
                <Switch>
                    <Route exact path='/' component={Home}/>
                </Switch>
        </BrowserRouter>
    );
}

export default Routes;