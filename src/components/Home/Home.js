import React from 'react';

/* Import ArtistContext Consumer */
import { Consumer } from '../../context/context';

const Home = () => {
    return (
        <Consumer>
          { context => {
            return (
                <div>
                    <SearchForm 
                        value={context.search} 
                        handleChange={context.actions.handleChange} 
                        handleSubmit={context.actions.handleSubmit}
                    />             
                    {context.loading && <p>Loading...</p>}
                    {context.artist && 
                        <div>
                            <img src={context.artist.image[1]['#text']} alt="Artist img"/>
                            <p>{context.artist.bio.summary.replace(/<[^>]+>/g, '')}</p>
                        </div>
                    }
                    {context.error && <p>{context.error.message}</p>}
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