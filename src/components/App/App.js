import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/* Importar ROUTES */
import * as ROUTES from '../../constants/routes';

/* Importar css */
import './App.css';

/* Importar componentes */
import Navigation from '../Navigation/Navigation';
import Home from '../Home/Home';

const App = () => {
    return (
        <div className="app">
            
            <Router>
                <Navigation />
                <Route exact path={ROUTES.HOME} component={Home}/>
            </Router>
        </div>
    );
}


export default App;