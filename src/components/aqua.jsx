import React, { Component } from 'react';
import '../css/font-awesome.min.css';
import '../css/flaticon.css';
import '../css/plugins.css';
import '../style.scss';
import NavBarWork from './navbar_work';
import Footer from './footer';

class Aqua extends Component {
    render() {
        return (
            <div>
                { this.renderNavbar() }
                <div className="container project-show-container">
                    <h1 className="project-title">Aqua</h1>
                    <div className="row">
                        <div className="offset-md-2 col-md-8">
                            <img className="img-responsive vuepeer-main portfolio-img" src={require( "../images/aqua.png") } />
                            <p className="project-text">
                                Over winter break, I worked on a team of six engineers to build out a hotel management web application for Aqua. The software needed to be able to manage guests, track inventory, coordinate employee schedules, among several other features. I set the foundation for the rails application, and laid out the entire database design for the other developers to use as a spring board. 
                            </p>
                            <img className="img-responsive vuepeer-main portfolio-img" src={require( "../images/aqua-mail.png") } />
                            <p className="project-text">
                                One feature I built was the in app messaging service. This functioned exactly like a gmail inbox would, except that it would be used internally by the hotel's employees. The messaging service consisted of a slick inbox, the ability to send attachments with each message, and message threads. Another feature I worked on was room search. Basically being able to search rooms based on certain criteria such as floor number, availability, etc. 
                            </p>
                            <p className="project-text">
                                The source code and live version of the website are currently unavailable due to privacy reasons. Please contact me to see a demo. 
                            </p>                      
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

export default Aqua;