import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

/* Importar CSS */
import './Navigation.css';

/* Importar rutas */
import * as ROUTES from '../../constants/routes';

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            navClass: "nav-show",
        };

        this.actualPath = '/';
    }

    handleShowNavbar = () =>  {
        const navbarState = this.state.navClass;
        navbarState === "nav-show" ?
            this.setState({navClass: "nav-hide"}):
            this.setState({navClass: "nav-show"});
    }

    componentDidUpdate() {
        let newPath = this.props.history.location.pathname;
        let actualPath = this.actualPath;
    
        if (actualPath !== newPath) {
            if (window.outerWidth < 768) {
                this.setState({navClass: "nav-hide"});
            }
        }

        this.actualPath = newPath;
    }

    render() {
        return (
            <div className="nav-bar">
                <span onClick={this.handleShowNavbar}>
                    <i className="material-icons menu">menu</i>
                </span>
    
                <div className={this.state.navClass}>
                    <ul className="navegacion">
                        <li>
                            <Link to={ROUTES.HOME}>Discover</Link>
                        </li>
                        <li>
                            <Link to={ROUTES.BIO}>Bio</Link>
                        </li>
                        <li>
                            <Link to={ROUTES.TOP_ALBUMS}>Top Albums</Link>
                        </li>
                        <li>
                            <Link to={ROUTES.TOP_TRACKS}>Top tracks</Link>
                        </li>
                        <li>
                            <Link to={ROUTES.MUSIC_GENRES}>Musical genres</Link>
                        </li>
                        <li>
                            <Link to={ROUTES.RELATED_ARTISTS}>Related Artists</Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default withRouter(Navigation);