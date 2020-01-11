import React, { Component } from 'react';

/* Importar key */
import * as KEYS from '../key/apikey';

const ArtistContext = React.createContext();

export class Provider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            query: 'the+smiths',
            artist: null,
            topalbums: null,
            toptracks: null,
            error: null,
            search: '',
        }
    }

    handleAlbumsOrTracksFetch = (metodo, query, prop) => {
        console.log(prop)
        fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.${metodo}&artist=${query}&api_key=${KEYS.apikey}&format=json`)
          .then(response => response.json())
          .then(responseData => {
              this.setState({
                  [prop]: responseData[prop],
                  error: null,
                });
          })
          .catch(error => {
              this.setState({
                  error: error,
              });
            console.log('Error fetching and parsing data', error);
          });
    }

    handleArtistSearch = (query = 'the+smiths') => {

        fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${query}&api_key=${KEYS.apikey}&format=json`)
          .then(response => response.json())
          .then(responseData => {
              this.setState({
                  artist:responseData.artist,
                  loading: false,
                  error: null,
                });
          })
          .catch(error => {
              this.setState({
                  error: error,
              });
            console.log('Error fetching and parsing data', error);
          });
    }

    handleTopAlbums = (query, prop) => {
        console.log(prop)
        fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${query}&api_key=${KEYS.apikey}&format=json`)
          .then(response => response.json())
          .then(responseData => {
              this.setState({
                  [prop]: responseData.topalbums,
                  error: null,
                });
          })
          .catch(error => {
              this.setState({
                  error: error,
              });
            console.log('Error fetching and parsing data', error);
          });
    }

    handleChange = (event) => {
        let value = event.target.value.replace(' ', '+');
        this.setState({ 
            [event.target.name]: event.target.value,
            query: value,
        });
    }

    handleSubmit = (event) => {
        this.setState({loading:true, artist: null});

        this.handleArtistSearch(this.state.query);
        this.handleAlbumsOrTracksFetch('gettopalbums', this.state.query, "topalbums");
        this.handleAlbumsOrTracksFetch('gettoptracks', this.state.query, "toptracks");

        this.setState({search: ''});
        event.preventDefault();
    }

    handleRedirectArtist = (event) => {
        let value = event.target.innerText.replace(' ', '+');
        this.setState({ 
            search: event.target.innerText,
            query: value,
            artist: null,
            loading: true,
        }, () => {
            this.handleArtistSearch(this.state.query);
            this.handleAlbumsOrTracksFetch('gettopalbums', this.state.query, "topalbums");
            this.handleAlbumsOrTracksFetch('gettoptracks', this.state.query, "toptracks");
        });
        this.setState({search: ''});
    }

    componentDidMount() {
        this.setState({loading:true});
        this.handleArtistSearch(this.state.query);
        this.handleAlbumsOrTracksFetch('gettopalbums', 'the+smiths', "topalbums");
        this.handleAlbumsOrTracksFetch('gettoptracks', 'the+smiths', "toptracks");
    }

  render(){
      return (
          <ArtistContext.Provider value={{
              ...this.state,
              actions: {
                handleChange: this.handleChange,
                handleSubmit: this.handleSubmit,
                handleRedirectArtist: this.handleRedirectArtist,
              }
           }}>
              { this.props.children }
          </ArtistContext.Provider>            

      )
  }
}


export const Consumer = ArtistContext.Consumer;