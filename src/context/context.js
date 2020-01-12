import React, { Component } from 'react';

/* Importar key */
import * as KEYS from '../key/apikey';

/* Importar fallback img */
import Singer from '../img/singing.png';

const ArtistContext = React.createContext();

export class Provider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            query: 'the+smiths',
            artist: null,
            artistImg: null,
            topalbums: null,
            toptracks: null,
            error: null,
            search: '',
        }
    }

    handleAlbumsOrTracksFetch = (metodo, query, prop) => {
        fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.${metodo}&artist=${query}&api_key=${KEYS.apikey}&format=json`)
          .then(response => response.json())
          .then(responseData => {
              if (metodo === 'gettopalbums') {
                this.setState({
                    [prop]: responseData[prop],
                    artistImg: responseData[prop].album[0].image[2]['#text'] || Singer,
                    error: null,
                  });
              } else {
                this.setState({
                    [prop]: responseData[prop],
                    error: null,
                  });
              }

          })
          .catch(error => {
              this.setState({
                  error: error,
              });
            console.log('Error fetching and parsing data', error);
          });
    }

    handleArtistSearch = (query = 'the+smiths') => {

        fetch(`https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${query}&api_key=${KEYS.apikey}&format=json`)
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

    refreshArtistData = (query) => {
        this.handleArtistSearch(query);
        this.handleAlbumsOrTracksFetch('gettopalbums', query, "topalbums");
        this.handleAlbumsOrTracksFetch('gettoptracks', query, "toptracks");
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

        this.refreshArtistData(this.state.query);

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
            this.refreshArtistData(this.state.query);
        });
        this.setState({search: ''});
    }

    componentDidMount() {
        this.setState({loading:true});
        this.refreshArtistData(this.state.query);
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