import React from 'react';

/* Importar CSS */
import './TopTracks.css';

/* Import ArtistCOntext Consumer */
import { Consumer } from '../../context/context';

/* Imagen para los tracks */
import Note from '../../img/note.png';

const TopTracks = () => {
    return (
        <Consumer>
            {context => {
                const { toptracks:tracks } = context;
                return (
                    <div>
                        {tracks ?
                            <TracksList tracks={tracks} />:
                            <p>There are no tracks</p>
                        }
                    </div>
                );
            }}
        </Consumer>
    );

}

const generarColor = () => {
    const simbolos = '0123456789ABCDEF';
    let color = '#';

    for (var i = 0; i < 6; i++) {
      color += simbolos[Math.floor(Math.random() * 16)];
    }

    return color;
}

const TracksList = (props) => {
    const tracks = props.tracks.track;
    return (
        <ul className="tracks">
            {tracks.map((track, index) => {
                const color = generarColor();
                return (
                    <li key={index}>
                        <img className="track-logo" style={{background: color}} src={Note} alt="Track cover"/>
                        <a href={track.url}>
                            <span>{track.name}</span>
                        </a>
                    </li>
                );
            })}
        </ul>
    );
}

export default TopTracks;