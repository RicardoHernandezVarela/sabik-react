import React, { Component } from 'react'

/* Importar key */
import * as KEYS from '../key/apikey';

const ArtistContext = React.createContext();

export class Provider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            query: '',
            artist: null,
            error: null,
            search: '',
        }
    }

    realizarBuqueda(query = 'the+smiths') {

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

    handleChange = (event) => {
        let value = event.target.value.replace(' ', '+');
        this.setState({ 
            [event.target.name]: event.target.value,
            query: value,
        });
    }

    handleSubmit = (event) => {
        this.setState({loading:true, artist: null});
        this.realizarBuqueda(this.state.query);
        this.setState({search: ''});
        event.preventDefault();
    }

    componentDidMount() {
        this.setState({loading:true});
        this.realizarBuqueda();
    }

  render(){
      return (
          <ArtistContext.Provider value={{
              ...this.state,
              actions: {
                handleChange: this.handleChange,
                handleSubmit: this.handleSubmit,
              }
           }}>
              { this.props.children }
          </ArtistContext.Provider>            

      )
  }
}


export const Consumer = ArtistContext.Consumer;