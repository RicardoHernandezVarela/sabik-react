import React, {Component} from 'react';

/* Importar key */
import * as KEYS from '../../key/apikey';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: true,
            query: 'the+smiths',
            artist: null,
            error: null,
        }
    }

    realizarBuqueda(query) {

        fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${query}&api_key=${KEYS.apikey}&format=json`)
          .then(response => response.json())
          .then(responseData => {
              this.setState({
                  artist:responseData.artist,
                  loading: false,
                });
          })
          .catch(error => {
              this.setState({
                  error: error,
              });
            console.log('Error fetching and parsing data', error);
          });
    }

    componentDidMount() {
        this.realizarBuqueda(this.state.query);
    }

    render() {
        const {artist, loading, error} = this.state;

        return (
            <div>             
                {loading && <p>Loading...</p>}
                {artist && <p>{artist.bio.summary}</p>}
                {error && <p>{error.message}</p>}
            </div>
        );
    }
}

export default Home;