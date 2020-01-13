import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

/* Import ArtistContext Consumer */
import { Consumer } from '../../context/context';

/* Importar ROUTES */
import * as ROUTES from '../../constants/routes';

/* Importar css */
import './App.css';

/* Importar componentes */
import Navigation from '../Navigation/Navigation';
import Home from '../Home/Home';
import Bio from '../Bio/Bio';
import MusicalGenres from '../MusicalGenres/MusicalGenres';
import RelatedArtist from '../RelatedArtist/RelatedArtist';
import TopAlbums from '../TopAlbums/TopAlbums';
import TopTracks from '../TopTracks/TopTracks';

const App = () => {
    return (
        <div className="app">
            
            <Router>
                <Navigation />
                <ArtistName />
                <Route exact path={ROUTES.HOME} component={Home} />
                <Route exact path={ROUTES.BIO} component={Bio} />
                <Route exact path={ROUTES.MUSIC_GENRES} component={MusicalGenres} />
                <Route exact path={ROUTES.RELATED_ARTISTS} component={RelatedArtist} />
                <Route exact path={ROUTES.TOP_ALBUMS} component={TopAlbums}/> 
                <Route exact path={ROUTES.TOP_TRACKS} component={TopTracks} />
            </Router>
        </div>
    );
}

const ArtistName = () => {
    return (
        <Consumer>
            {context => {
                const { artist } = context;
                if (artist) {
                    return (
                        <h5 className="artist-name">
                            <span>{artist.name}</span>
                        </h5>
                    );
                } else {
                    return (
                        <h5 className="artist-name">
                            <span>Searching...</span>
                        </h5>
                    );
                }
            }}
        </Consumer>
    );
}


export default App;