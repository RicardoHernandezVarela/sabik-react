import React from 'react';

/* Importar ArtistContext Consumer*/
import { Consumer } from '../../context/context';

const Bio = () => {
    return (
        <Consumer>
            {context => {
                const {artist, error} = context;
                return (
                    <div>
                        {artist && 
                            <div>
                                <img src={artist.image[1]['#text']} alt="Artist img"/>
                                <p>{artist.bio.content.replace(/<[^>]+>/g, '')}</p>
                            </div>
                        }

                        {error && <p>{error.message}</p>}
                    </div>
                );
            }  
            }
        </Consumer>
    )
}

export default Bio;

