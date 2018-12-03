import React, { Component } from 'react';
import Resume from '../documents/abhas_resume_2017.pdf';
import ReactGA from 'react-ga';

class NavBarHome extends Component {
    render() {
        return (
            <div>
            <header id="header" className="site_header">
                <div className="site_navigation">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <nav className="navbar navbar-expand-lg navigation_area">
                                    <a className="navbar-brand site_logo" href="/">
                                        <span>Abhas</span>Arya
                                    </a>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse mainmenu_area" id="navbarNav">
                                        <ul className="navbar-nav mainmenu">
                                            <li className="nav-item">
                                                <a className="nav-link smoot_scroll dots_effect active" href="#home" data-scroll-nav="0">Home <span className="dot_effect dot_hover"></span></a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link smoot_scroll dots_effect" href="#about" data-scroll-nav="1">About <span className="dot_effect dot_hover"></span></a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link smoot_scroll dots_effect" href="#work" data-scroll-nav="3">Work <span className="dot_effect dot_hover"></span></a>
                                            </li>
                                            {/* <li className="nav-item">
                                                <a className="nav-link smoot_scroll dots_effect" href="#blog" data-scroll-nav="5">blog <span className="dot_effect dot_hover"></span></a>
                                            </li> */}
                                            <li className="nav-item">
                                                <a className="nav-link smoot_scroll dots_effect" href={Resume} target = "_blank">Résumé <span className="dot_effect dot_hover"></span></a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link smoot_scroll dots_effect" href="mailto:abhas.aryaa@gmail.com">contact <span className="dot_effect dot_hover"></span></a>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>  
            <div id="sticky_header" className="sticky_header_home"></div>
            </div>
        );
    }

    initializeReactGA = () => {
        ReactGA.initialize('UA-130172840-1');
        ReactGA.pageview(window.location.pathname + window.location.search);
    }

    componentDidMount = () => {
        this.initializeReactGA();
    }
}

export default NavBarHome;