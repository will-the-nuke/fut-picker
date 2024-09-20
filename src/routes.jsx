//import all pages
import Home from './components/pages/home/home.jsx';
import About from './components/pages/about/about.jsx';
import Account from './components/pages/account/account.jsx';
import Requirements from './components/pages/requirements/requirements.jsx';
import Results from './components/pages/results/results.jsx';

import React, {Component} from 'react';
import {Routes, Route} from 'react-router-dom'

class AllRoutes extends Component {

    render() {
        return <Routes>

            {/*get a list of all routes*/}
            {this.getRoutes()}
        </Routes>
    };

    getRoutes() {

        //map containing page names and there respective components
        const pages = {
            home: <Home />,
            about: <About />,
            account: <Account />,
            requirements: <Requirements />,
            results: <Results />,
        };

        let routeHTML = [];

        //make the default route
        routeHTML.push(
            <Route exact path="/" element={<Home/>} />
        );

        //make all other routes
        for (let page in pages) {
            routeHTML.push(
                <Route exact path={'/'+page} element={pages[page]} />
            );
        };

        //return compiled routes back to main
        return routeHTML;
    };
};

export default AllRoutes