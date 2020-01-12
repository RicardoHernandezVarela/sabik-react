import React from 'react';

/* Importar CSS */
import './Home.css';

/* Import ArtistContext Consumer */
import { Consumer } from '../../context/context';

const Home = () => {
    return (
        <Consumer>
          { context => {
            const { search, loading, artist, artistImg, actions, error} = context;
            
            return (
                <div>
                    <SearchForm 
                        value={search} 
                        handleChange={actions.handleChange} 
                        handleSubmit={actions.handleSubmit}
                    />             
                    {loading && <p>Loading...</p>}

                    {artist && 
                        <div className="summary">
                            <img className="artist-img" src={artistImg} alt="Artist img"/>
                            <p className="bio-summary">{(artist.bio.summary.replace(/<[^>]+>/g, ''))}</p>
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
        <form className="buscar" onSubmit={props.handleSubmit}>
            <input
                name="search"
                value={props.value}
                type="text"
                onChange={props.handleChange}
                placeholder="Search for a singer or band"
            />

            <button disabled={noValido} type="submit">
                <i className="material-icons icon">search</i>
            </button>

        </form>
    );
}

export default Home;