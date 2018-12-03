import React, { Component } from 'react';
import '../css/font-awesome.min.css';
import '../css/flaticon.css';
import '../css/plugins.css';
import '../style.scss';
import NavBarWork from './navbar_work';
import Footer from './footer';

class Flutter extends Component {
    render() {
        return (
            <div>
                { this.renderNavbar() }
                <div className="container project-show-container">
                    <h1 className="project-title">Flutter Merchant Dashboard</h1>
                    <div className="row">
                        <div className="offset-md-2 col-md-8">
                            <img className="img-responsive vuepeer-main portfolio-img" src={require( "../images/flutter-landing.png") } />
                            <p className="project-text">
                                Flutter is a mobile booking app that allows users to plan interesting outings based on a recommendation-driven algoirthm. I built the Flutter Merchant Dashboard, which allows business owners partnered with Flutter to upload their various offerings, track inventory, manage deals and discounts, and get useful analytics through an intuitive dashboard interface. 
                            </p>
                            <img className="img-responsive vuepeer-main portfolio-img" src={require( "../images/flutter.png") } />
                            <p className="project-text">
                                Created a rich multi-step form wizard for uploading offerings, which allows merchants to tag their activities, assign them unique time slots, and generate multiple vouchers for the activity.
                            </p>
                            <img className="img-responsive vuepeer-main portfolio-img" src={require( "../images/flutter-tagging.png") } />
                            <img className="img-responsive vuepeer-main portfolio-img" src={require( "../images/flutter-scheduling.png") } style={{marginTop: "50px"}} />
                            <p className="project-text">
                                Built a REST API to allow the inventory to be pipelined into the mobile app. Also wrote a cron job to scrape Eventbrite data from a merchant and port it right into the database. Built various administrative tooling features to allow admins to accept merchant applications, and edit merchant-uploaded data for quality-assurance purposes.
                            </p>
                            <a className="btn-project btn-lg block-item space-above-and-below" href="https://www.weflutter.com/merchant" target="_blank"><i className="fa fa-link"></i> View project</a>           
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

export default Flutter;