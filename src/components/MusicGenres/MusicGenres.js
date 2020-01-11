import React from 'react';

/* Importar ArtistContext Consumer */
import { Consumer } from '../../context/context';

/* Import CSS */
import './MusicGenres.css'

/* Imagen para los tracks */
import Genres from '../../img/genres.png';

const MusicGenres = () => {
    return (
        <Consumer>
            {context => {
                const { artist } = context;
                return (
                    <div>
                        {artist &&
                            <TagList artist={artist} />
                        }
                    </div>
                );
            }}
        </Consumer>
    )
}

const TagList = (props) => {
    const genres = props.artist.tags.tag;
    return (
        <ul>
            {genres.map((genre, index) => {
                return (
                    <li key={index}>
                        <img className="genres-logo" src={Genres} alt="Genres cover"/>
                        <span>{genre.name}</span> 
                    </li>
                );
            })}
        </ul>
    );
}

export default MusicGenres;