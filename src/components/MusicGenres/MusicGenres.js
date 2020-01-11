import React from 'react';

/* Importar ArtistContext Consumer */
import { Consumer } from '../../context/context';

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
                        <strong>{genre.name}</strong> 
                    </li>
                );
            })}
        </ul>
    );
}

export default MusicGenres;