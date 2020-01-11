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
                <Link to={ROUTES.HOME}>Discover</Link>
            </li>
            <li>
                <Link to={ROUTES.BIO}>Bio</Link>
            </li>
            <li>
                <Link to={ROUTES.TOP_ALBUMS}>Top Albums</Link>
            </li>
            <li>
                <Link to={ROUTES.TOP_TRACKS}>Top tracks</Link>
            </li>
            <li>
                <Link to={ROUTES.MUSIC_GENRES}>Music genres</Link>
            </li>
            <li>
                <Link to={ROUTES.RELEATED_ARTISTS}>Releated Artists</Link>
            </li>
        </ul>
    );
}

export default Navigation;