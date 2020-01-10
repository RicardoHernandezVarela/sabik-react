import React from 'react';
import { Link } from 'react-router-dom';

/* Importar CSS */
import './Navigation.css';

/* Importar rutas */
import * as ROUTES from '../../constants/routes';

const Navigation = () => {
    return (
        <ul className="navegacion">
            <li>
                <Link to={ROUTES.HOME}><h1>The smiths</h1></Link>
            </li>
            <li>
                <Link to={ROUTES.MEMBERS}>Miembros</Link>
            </li>
            <li>
                <Link to={ROUTES.DISCS}>Discografía</Link>
            </li>
        </ul>
    );
}

export default Navigation;