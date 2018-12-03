import React, { Component } from 'react';
import '../css/font-awesome.min.css';
import '../css/flaticon.css';
import '../css/plugins.css';
import '../style.scss';
import NavBarWork from './navbar_work';
import Footer from './footer';
import Presentation from '../documents/nextdoor-ios-presentation.pdf';

class Nextdoor extends Component {
    render() {
        return (
            <div>
                { this.renderNavbar() }
                <div className="container project-show-container">
                    <h1 className="project-title">i18n config on iOS</h1>
                    <div className="row">
                        <div className="offset-md-2 col-md-8">
                            <img className="img-responsive vuepeer-main portfolio-img" src={require( "../images/nd_house.png") } />
                            <p className="project-text">
                                Engineered a ground up revamp of how we internationalize the Nextdoor iOS app. This involved doing away with our deprecated
                                networking protocols, and leveraging a new networking library. Automated creation of localized endpoints by creating a
                                Country enum.
                            </p>
                            <p className="project-text">
                                Gave a presentation on the work to a team of 15 mobile engineers (both iOS and Android). 
                                Discussed how leveraging a new networking library with a more clean and light-weight interface, made it possible to configure 
                                the iOS app for a brand new country in less than one hour as opposed to a couple weeks. This was made possible by creating a Country enum,
                                which is defined for every new country, and automatically sets up the appropriate endpoints with the localized tlds and subdomains.
                            </p>
                            <a className="btn-project btn-lg block-item space-above-and-below" href={Presentation} target="_blank"><i className="fa fa-link"></i> Presentation</a>                        
                        </div>
                    </div>
                </div>
                { this.renderFooter() }
            </div>
        );
    }
    
    renderNavbar = () => {
        return <NavBarWork/>;
    };

    renderFooter = () => {
        return <Footer/>;
    };
}

export default Nextdoor;