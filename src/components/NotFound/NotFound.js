import React from 'react';
import { Link } from 'react-router-dom'; 

/* Importar ROUTES */
import * as ROUTES from '../../constants/routes';

/* Importar CSS */
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="not-found">
            <i className="material-icons icon-gif">sentiment_very_dissatisfied</i>
            <h5>404 Not Found</h5>
            <Link to={ROUTES.HOME}>Discover</Link>
        </div>
    );
}

export default NotFound;