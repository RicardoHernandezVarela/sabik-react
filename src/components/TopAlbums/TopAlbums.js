import React from 'react';

/* Importar CSS */
import './TopAlbums.css';

/* Import ArtistContext Consumer */
import { Consumer } from '../../context/context';

const TopAlbums = () => {
    return(
        <Consumer>
            {context => {
                const { topalbums:albums } = context;
                return (
                    <div>
                        {albums ? 
                            <Albums albums={albums} />:
                            <p>There are no albums</p>
                        }
                    </div>
                );
            }}
        </Consumer>
    );
}

const Albums = (props) => {
    const albums = props.albums.album;
    return (
        <ul className="albums">
            {albums.map((album, index) => {
                if (album.image[1]['#text']) {
                    return (
                        <li key={index}>
                            <img src={album.image[2]['#text']} alt="Album cover"/>
                            <div className="album-name">
                                {album.name}
                            </div>
                        </li>
                    );
                }

                return null;
            })}
        </ul>
    );
}

export default TopAlbums;