import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';

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
        this.activeStyle = {
            fontWeight: "bold",
            color: "#80deea",
            fontSize: '1.1em',
            textShadow: '3px 3px 3px #FF0000',
        };
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
                            <NavLink exact activeStyle={this.activeStyle} to={ROUTES.HOME}>Discover</NavLink>
                        </li>
                        <li>
                            <NavLink activeStyle={this.activeStyle} to={ROUTES.BIO}>Bio</NavLink>
                        </li>
                        <li>
                            <NavLink activeStyle={this.activeStyle} to={ROUTES.TOP_ALBUMS}>Top Albums</NavLink>
                        </li>
                        <li>
                            <NavLink activeStyle={this.activeStyle} to={ROUTES.TOP_TRACKS}>Top tracks</NavLink>
                        </li>
                        <li>
                            <NavLink activeStyle={this.activeStyle} to={ROUTES.MUSIC_GENRES}>Musical genres</NavLink>
                        </li>
                        <li>
                            <NavLink activeStyle={this.activeStyle} to={ROUTES.RELATED_ARTISTS}>Related Artists</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default withRouter(Navigation);