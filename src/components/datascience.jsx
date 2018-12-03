import React, { Component } from 'react';
import '../css/font-awesome.min.css';
import '../css/flaticon.css';
import '../css/plugins.css';
import '../style.scss';
import NavBarWork from './navbar_work';
import Footer from './footer';

class Datascience extends Component {
    render() {
        return (
            <div>
                { this.renderNavbar() }
                <div className="container project-show-container">
                    <h1 className="project-title">IMDB Movie Dataset Analysis</h1>
                    <div className="row">
                        <div className="offset-md-2 col-md-8">
                            <img className="img-responsive datascience-main portfolio-img" src={require( "../images/datascience-main.png") } />
                            <p className="project-text">
                                For my data science course's final project I teamed up with two other colleagues, and together we decided to analyze a <a href="https://www.kaggle.com/deepmatrix/imdb-5000-movie-dataset" class="peds-link">dataset</a> consisting of 5,000 movies and 28 attributes. We used Python 3, and an array of data science tools and libraries. We knitted together the final report and results in an iPython (Jupyter) notebook.
                            </p>
                            <img className="img-responsive datascience-main portfolio-img" src={require( "../images/film-profits.png") } />
                            <p className="project-text">
                                I parsed the csv file containing the data and trimmed unecessary fields. I then proceeded to scrape CPI values for every year from 1913-2017, and adjust all the dollar amounts for each movie into real dollar terms with 2017 purchasing power. The python library <i>Beautiful Soup</i> was utilized for web scraping purposes.
                            </p>
                            <img className="img-responsive datascience-main portfolio-img" src={require( "../images/seaborn-plots.png") } />
                            <p className="project-text">
                                Plotting libraries such as <i>Matplotlib</i> and <i>Seaborn</i> were used in our exploratory analysis. For instance, the graphs above show a break down of movie genre and the average domestic gross in USD that the genre earns.
                            </p>
                            <img className="img-responsive datascience-main portfolio-img" src={require( "../images/linear-regression.png") } />
                            <p className="project-text">
                            Linear regression using the Ordinary Least Squares method was performed on the dataset to see if there was a relationship between a film's domestic gross and its attributes. By looking at the p-values in our result and using a significance level of 5%, we saw that a film's imdb score, budget, and cast facebook likes were significant variables in the outcome of a film's gross earnings.
                            </p>
                            <a className="btn-project btn-lg block-item space-above-and-below" href="https://aarya1995.github.io/" target="_blank"><i className="fa fa-link"></i> View project</a>
                        
			                <a className="github-btn btn-lg block-item" href="https://github.com/aarya1995/aarya1995.github.io" target="_blank"><i className="fa fa-github"></i> View source</a>
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

export default Datascience;