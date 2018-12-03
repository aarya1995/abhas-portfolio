import React, { Component } from 'react';
import '../css/font-awesome.min.css';
import '../css/flaticon.css';
import '../css/plugins.css';
import '../style.scss';
import NavBarWork from './navbar_work';
import Footer from './footer';

class PEDS extends Component {
    render() {
        return (
            <div>
                { this.renderNavbar() }
                <div className="container project-show-container">
                    <h1 className="project-title">PEDS</h1>
                    <div className="row">
                        <div className="offset-md-2 col-md-8">
                            <img className="img-responsive vuepeer-main portfolio-img" src={require( "../images/peds.png") } />
                            <p className="project-text">
                                For my database course's capstone project, we had to implement and design a system that would provide users with historical election results. I teamed up with one other colleague, and together we built PEDS. Our interactive web application equips users with tools to query and visualize a wide array of presidential election related queries.
                            </p>
                            <img className="img-responsive vuepeer-main portfolio-img" src={require( "../images/peds-er.png") } />
                            <p className="project-text">
                                We designed our relational schema to be able to query not only election results, but also information on every candidate in every election. We also took into consideration U.S. polling data for each candidate and also the U.S. population for every given year. 
                            </p>
                            <img className="img-responsive vuepeer-main portfolio-img" src={require( "../images/peds-election-query.png") } />
                            <p className="project-text">
                                We programatically scraped every election's results dating back to 1789. Election results were sourced from <a className="peds-link" href="http://www.presidency.ucsb.edu/elections.php"><i>The American Presidency Project</i></a>. We utilized the ruby web scraping library <i>Nokogiri</i> to accomplish this task.
                            </p>
                            <img className="img-responsive vuepeer-main portfolio-img" src={require( "../images/peds-candidate-query.png") } />
                            <p className="project-text">
                                We also collected data such as election outcomes and polling for every candidate, including third party candidates, from every election. 
                            </p>
                            <img className="img-responsive vuepeer-main portfolio-img" src={require( "../images/peds-interesting-query.png") } />
                            <p className="project-text">
                                We also built in interesting queries into the system, such as the one above. This query shows every president that assumed office without actually winning an election, and the reason why.
                            </p>
                            <p className="project-text">
                                To wrap up, we composed a 24 page design document where we give an in depth explanation for our system design and our relational schema, as well as other technical decisions. 
                            </p>
                            <a className="btn-project btn-lg block-item space-above-and-below" href="http://peds.herokuapp.com/" target="_blank"><i className="fa fa-link"></i> View project</a>
                            <a className="github-btn btn-lg block-item" href="https://github.com/aarya1995/PEDS" target="_blank"><i className="fa fa-github"></i> View source</a>                        
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

export default PEDS;