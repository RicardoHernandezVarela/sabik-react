import React from 'react';

/* Importar ArtistContext Consumer */
import { Consumer } from '../../context/context';

/* Import CSS */
import './MusicalGenres.css'

const MusicalGenres = () => {
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

const generarColor = () => {
    const simbolos = '0123456789ABCDEF';
    let color = '#';

    for (var i = 0; i < 6; i++) {
      color += simbolos[Math.floor(Math.random() * 16)];
    }

    return color;
}

const TagList = (props) => {
    const genres = props.artist.tags.tag;
    return (
        <ul className="genres">
            {genres.map((genre, index) => {
                const color = generarColor();
                return (
                    <li key={index}>
                        <div className="genres-logo left" style={{background: color}}></div>
                        <span>{genre.name.toUpperCase()}</span> 
                        <div className="genres-logo right" style={{background: color}}></div>
                    </li>
                );
            })}
        </ul>
    );
}

export default MusicalGenres;