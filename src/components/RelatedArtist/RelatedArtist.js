import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

/* Importar ArtistContext Consumer */
import { Consumer } from '../../context/context';

/* Import ROUTES */
import * as ROUTES from '../../constants/routes';

const RelatedArtist = () => {
    return (
        <Consumer>
            {context => {
                const { artist, actions } = context;
                return (
                    <div>
                        {artist &&
                            <ArtistList artist={artist} handleRedirectArtist={actions.handleRedirectArtist}/>
                        }
                    </div>
                )
            }}
        </Consumer>
    );
}

const ArtistList = (props) => {
    const allArtist = props.artist.similar.artist;
    if (allArtist.length > 0) {
        return (
            <ul>
                {allArtist.map((artist, index) => {
                    return (
                        <Artist key={index} artist={artist} handleRedirectArtist={props.handleRedirectArtist}/>
                    );
                })}
            </ul>
        );
    } else {
        return <p>There are no related artist.</p>
    }

}

class ArtistBase extends Component {
    handleClickArtist = (event) => {
        this.props.handleRedirectArtist(event);
        this.props.history.push(ROUTES.HOME);
    }

    render() {
        return (
            <li onClick={this.handleClickArtist}>
                {this.props.artist.name}
            </li>
        );
    }
}

const Artist = withRouter(ArtistBase);

export default RelatedArtist;