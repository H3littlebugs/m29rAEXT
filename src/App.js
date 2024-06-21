import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Home from './components/Home';
import CountryDetail from './components/CountryDetail';
import NotFound from './components/NotFound';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/country/:alpha3Code" component={CountryDetail} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
}

export default App;
