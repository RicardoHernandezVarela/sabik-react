import React from 'react';

/* Import ArtistContext Consumer */
import { Consumer } from '../../context/context';

const Home = () => {
    return (
        <Consumer>
          { context => {
            const { search, loading, artist, actions, error} = context;
            return (
                <div>
                    <SearchForm 
                        value={search} 
                        handleChange={actions.handleChange} 
                        handleSubmit={actions.handleSubmit}
                    />             
                    {loading && <p>Loading...</p>}

                    {artist && 
                        <div>
                            <img src={artist.image[1]['#text']} alt="Artist img"/>
                            <p>{artist.bio.summary.replace(/<[^>]+>/g, '')}</p>
                        </div>
                    }

                    {error && <p>{error.message}</p>}
                </div>
            );
          }}
        </Consumer>
    );
}

const SearchForm = (props) => {
    const noValido = props.value === '';

    return (
        <form onSubmit={props.handleSubmit}>
            <input 
                name="search"
                value={props.value}
                type="text"
                onChange={props.handleChange}
                placeholder="Busca un artista"
            />

            <button disabled={noValido} type="submit">Buscar</button>

        </form>
    );
}

export default Home;