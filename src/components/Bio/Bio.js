import React, { Component } from 'react';

/* Importar CSS */
import './Bio.css';

/* Importar ArtistContext Consumer*/
import { Consumer } from '../../context/context';

class Bio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdown: true,
            fullText: false,
        };
    }

    onClickDropdown = () => {
        this.setState({
            dropdown: !this.state.dropdown,
            fullText: !this.state.fullText,
        });
    }

    render() {
        const dropdown = this.state.dropdown;
        const fullText = this.state.fullText;

        return (
            <Consumer>
                {context => {
                    const {artist, artistImg, error} = context;
                    let text = '';

                    if (artist) {

                        if (fullText) {
                            text = artist.bio.content
                                .replace(/<[^>]+>/g, '')
                                .replace('Read more on Last.fm', '')
                        } else {
                            text = artist.bio.content.replace(/<[^>]+>/g, '').slice(0, 500);
                        }
                    }
                    
                    return (
                        <div>
                            {artist && 
                                <div className="bio-content">
                                    {!dropdown && 
                                        <div className="read-less" onClick={this.onClickDropdown}>
                                            Read less
                                        </div>
                                    }
                                    <img className="bio-img" src={artistImg} alt="Artist img"/>
                                    <p className="bio-text">{text}</p>

                                    {dropdown &&
                                        <div className="read-more" onClick={this.onClickDropdown}>
                                            Read more
                                        </div>
                                    }
                                </div>
                            }
    
                            {error && <p>{error.message}</p>}
                        </div>
                    );
                }  
                }
            </Consumer>
        );
    }
}

export default Bio;

