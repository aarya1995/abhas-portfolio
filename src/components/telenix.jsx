import React, { Component } from 'react';
import '../css/font-awesome.min.css';
import '../css/flaticon.css';
import '../css/plugins.css';
import '../style.scss';
import NavBarWork from './navbar_work';
import Footer from './footer';

class Telenix extends Component {
    render() {
        return (
            <div>
                { this.renderNavbar() }
                <div className="container project-show-container">
                    <h1 className="project-title">Telenix</h1>
                    <div className="row">
                        <div className="offset-md-2 col-md-8">
                            <img className="img-responsive vuepeer-main portfolio-img" src={require( "../images/telenix.png") } />
                            <p className="project-text">
                                Integrated careers functionality with Telenix' static website, and built an admin dashboard to monitor incoming job applications and view résumés.
                            </p>
                            <img className="img-responsive vuepeer-main portfolio-img" src={require( "../images/telenix-apply.png") } />
                            <p className="project-text">
                                Developed a clean dashboard interface to view incoming job applications. Stored résumés on an Amazon S3 instance for convenient retrieval.
                            </p>
                            <img className="img-responsive vuepeer-main portfolio-img" src={require( "../images/telenix-dashboard.png") } />
                            <p className="project-text">
                                Created form for dynamically adding job listings, along with attributes such as security clearance, and must-have-skills. 
                            </p>
                            <img className="img-responsive vuepeer-main portfolio-img" src={require( "../images/telenix-add-job.png") } />
                            <img className="img-responsive vuepeer-main portfolio-img" src={require( "../images/telenix-careers.png") } style={{marginTop: "50px"}} />
                            <a className="btn-project btn-lg block-item space-above-and-below" href="https://telenix-careers.herokuapp.com/" target="_blank"><i className="fa fa-link"></i> View project</a>                      
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

export default Telenix;