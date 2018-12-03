import React, { Component } from 'react';
import '../css/font-awesome.min.css';
import '../css/flaticon.css';
import '../css/plugins.css';
import '../style.scss';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/styles/hljs';
import NavBarWork from './navbar_work';
import Footer from './footer';

class Vuepeer extends Component {
    render() {
        return (
            <div>
                { this.renderNavbar() }
                <div className="container project-show-container">
                    <h1 className="project-title">Vuepeer</h1>
                    <div className="row">
                        <div className="offset-md-2 col-md-8">
                            <img className="img-responsive vuepeer-main portfolio-img" src={require( "../images/vuepeer-index.png") } />
                            <p className="project-text">
                                Created a search engine for finding peer-to-peer rentals. Built profile creation feature that allows users to customize their profile, and upload listings from AirBnB, and other sharing-economy websites. Built social networking features, such as the ability to view other users' profiles and follow them. 
                            </p>
                            <img className="img-responsive vuepeer-main portfolio-img" src={require( "../images/vuepeer-profile.png") } />
                            <p className="project-text">
                                Also built search engine feature that allows user to find listings and filter them based on distance, price, star ratings, and type (e.g. car rentals, lodging, etc.).
                            </p>
                            <img className="img-responsive vuepeer-main portfolio-img" src={require( "../images/listings-search.png") } />
                            <p className="project-text">
                                Built PeersNearMe feature which allows the user to view all other users within a given radius, graphically represented in a drawn and highlighted zipcode boundary within a Google Map canvas.
                            </p>
                            <img className="img-responsive vuepeer-main portfolio-img" src={require( "../images/nearme.png") } />
                            <p className="project-text">
                                Utilized MongoDB to reduce development time. The absence of migrations and ability to modify the database schema on the fly really streamlined the development process. MongoDB's use of embedded document association also helped to more clearly express models and their relationships. For example, each user-uploaded listing on VuePeer has many reviews, left by other users. By embedding the reviews under the listing model, we eliminated the need to store reviews in a standalone table, then iterate over all reviews when trying to return those specifc to a certain listing (via foreign key). The syntax for returning reviews for a given listing, in Ruby on Rails, thus became as simple as writing:
                            </p>
                            <SyntaxHighlighter language='ruby' style={monokai}>{"curr_listing.reviews.all # as opposed to: Review.where(listing_id: curr_listing.id).all"}</SyntaxHighlighter>
                            <a className="btn-project btn-lg block-item space-above-and-below" href="https://www.vuepeer.com/" target="_blank"><i className="fa fa-link"></i> View project</a>                        
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

export default Vuepeer;