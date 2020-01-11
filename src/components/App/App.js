import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/* Importar ROUTES */
import * as ROUTES from '../../constants/routes';

/* Importar css */
import './App.css';

/* Importar componentes */
import Navigation from '../Navigation/Navigation';
import Home from '../Home/Home';
import Bio from '../Bio/Bio';
import MusicGenres from '../MusicGenres/MusicGenres';
import RelatedArtist from '../RelatedArtist/RelatedArtist';
import TopAlbums from '../TopAlbums/TopAlbums';

const App = () => {
    return (
        <div className="app">
            
            <Router>
                <Navigation />
                <Route exact path={ROUTES.HOME} component={Home} />
                <Route exact path={ROUTES.BIO} component={Bio} />
                <Route exact path={ROUTES.MUSIC_GENRES} component={MusicGenres} />
                <Route exact path={ROUTES.RELEATED_ARTISTS} component={RelatedArtist} />
                <Route exact path={ROUTES.TOP_ALBUMS} component={TopAlbums}/> 
            </Router>
        </div>
    );
}


export default App;