import React, { Component } from 'react';
import '../css/font-awesome.min.css';
import '../css/flaticon.css';
import '../css/plugins.css';
import '../style.scss';
import NavBarWork from './navbar_work';
import Footer from './footer';

class KwikNews extends Component {
    render() {
        return (
            <div>
                { this.renderNavbar() }
                <div className="container project-show-container">
                    <h1 className="project-title">WeCook</h1>
                    <div className="row">
                        <div className="offset-md-2 col-md-8">
                            <img className="img-responsive vuepeer-main portfolio-img" src={require( "../images/kwiknews.png") } />
                            <p className="project-text">
                                Created a RSS aggregator to discover interesting news stories. Tapped into BBC and CNN publicly available RSS feeds using the FeedJira gem. One issue that I had to optimize for was finding more high quality images to go along with the news stories, since the main image stored with each article in the RSS feed had very poor quality. I solved this by only storing the textual information from the RSS feed, then using the Nokogiri gem to crawl the url of each article in the database, and screen scraping the higher-quality headline image. 
                            </p>
                            <p className="project-text">
                                Designed the UI similar to Pinterest's. Enacpsulated each article in a card using the jQuery masonry library. 
                            </p>
                            <a className="btn-project btn-lg block-item space-above-and-below" href="https://powerful-sea-3169.herokuapp.com/?page=3" target="_blank"><i className="fa fa-link"></i> View project</a>
                            <a className="github-btn btn-lg block-item" href="https://github.com/aarya1995/news_reader" target="_blank"><i className="fa fa-github"></i> View source</a>                        
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

export default KwikNews;