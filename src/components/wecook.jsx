import React, { Component } from 'react';
import '../css/font-awesome.min.css';
import '../css/flaticon.css';
import '../css/plugins.css';
import '../style.scss';
import NavBarWork from './navbar_work';
import Footer from './footer';

class WeCook extends Component {
    render() {
        return (
            <div>
                { this.renderNavbar() }
                <div className="container project-show-container">
                    <h1 className="project-title">WeCook</h1>
                    <div className="row">
                        <div className="offset-md-2 col-md-8">
                            <img className="img-responsive vuepeer-main portfolio-img" src={require( "../images/wecook.png") } />
                            <p className="project-text">
                                Connected students with crowd-sourced chefs to provide better access to nutritious and gourmet meals, at a lower cost than the University dining plan.
                            </p>
                            <img className="img-responsive vuepeer-main portfolio-img" src={require( "../images/wecook-order.png") } />
                            <p className="project-text">
                                Developed a web app to showcase weekly menus and allowed users to create accounts, book appointments with a chef, and pay for their orders.
                            </p>
                            <img className="img-responsive vuepeer-main portfolio-img" src={require( "../images/wecook-invoice.png") } />
                            <p className="project-text">
                                Created a simple dashboard to allow users to track order history and designed order invoices; integrated with Stripe API to design a custom and user-friendly checkout process.
                            </p>
                            <img className="img-responsive vuepeer-main portfolio-img" src={require( "../images/wecook-payment.png") } />
                            <p className="project-text">
                                Led a Team of Interns to implement iterations to the above features. Promoted business to gain 50,000 unique views to site and gained acceptance into University of Maryland's most competitive incubator program, StartupShell.
                            </p>
                            <a className="btn-project btn-lg block-item space-above-and-below" href="https://frozen-ridge-7087.herokuapp.com/" target="_blank"><i className="fa fa-link"></i> View project</a>
                            <a className="github-btn btn-lg block-item" href="https://github.com/aarya1995/WeCook" target="_blank"><i className="fa fa-github"></i> View source</a>                        
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

export default WeCook;