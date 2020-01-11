import React from 'react';

/* Import ArtistCOntext Consumer */
import { Consumer } from '../../context/context';

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

const TracksList = (props) => {
    const tracks = props.tracks.track;
    return (
        <ul>
            {tracks.map((track, index) => {
                return (
                    <li key={index}>
                        <strong>{track.name}</strong> 
                    </li>
                );
            })}
        </ul>
    );
}

export default TopTracks;