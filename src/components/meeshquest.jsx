import React, { Component } from 'react';
import '../css/font-awesome.min.css';
import '../css/flaticon.css';
import '../css/plugins.css';
import '../style.scss';

class Meeshquest extends Component {
    render() {
        return (
            <div>
                { this.renderNavbar() }
                <div className="container project-show-container">
                    <h1 className="project-title">Meeshquest</h1>
                    <div className="row">
                        <div className="offset-md-2 col-md-8">
                            <img className="img-responsive meeshquest-img portfolio-img" src={require( "../images/mapquest.jpg") } />
                            <p className="project-text">
                                Spring semester of 2017, I took UMD's infamous data structures course: <i>CMSC420</i>. This course earned its reputation in the computer science department because of the challenging, semester-long project known as MeeshQuest. For this project, students are supposed to work independently to implement a stripped down version of MapQuest. The end result is supposed to be an application capable of efficiently computing the shortest distance between two points and returning the directions to take, through certain roads or airports.
                            </p>
                            <img className="img-responsive crash-bandicoot portfolio-img" src={require( "../images/crash-bandicoot.jpg") } />
                            <p className="project-text">
                                This project exposed me to quadtrees (of the PM and PR varieties), which were essential to the overall efficiency of the application. A quadtree is a 4-ary tree used to divide a 2D region into more manageable parts. Quadtrees are often used in video games such as Crash Bandicoot, for their blazing fast collision detection.
                            </p>
                            <img className="img-responsive quadtree portfolio-img" src={require( "../images/prquadtree.png") } />
                            <p className="project-text">
                                In a similar vein, we utilized quadtrees to quickly compute the shortest distance between two cities and generate optimal directions. Imagine if we have 100 cities stored in our application. If we decide to compare every city to find the nearest neighbor to City A, then that would require 10,000 operations - that's a lot of checks! One way to speed up this brute force is to avoid searching for cities that are on completely opposite ends of the map from City A. This is where quadtrees come into play.  
                            </p>
                            <img className="img-responsive quadtree2 portfolio-img" src={require( "../images/quadtree.png") } />
                            <p className="project-text">
                                Let's imagine our quadtrees as a representation of a spatial map, where each node represents a region. If we insert a city, then that point will occupy a region within the map. Once we insert a second city, then the key space will be recursively divided into 4 regions until the two cities no long occupy the same quadrant <small><i>(**By the definition of <a class="peds-link" href="https://wiki.cs.umd.edu/cmsc420/index.php?title=PR_Quadtree">PR Quadtrees</a>)</i></small>.  
                            </p>
                            <img className="img-responsive quadtree3 portfolio-img" src={require( "../images/quadtree2.png") } />
                            <p className="project-text">
                                As you can see above, each node contains a few objects. We know then that, for instance, the objects in the top-left node cannot be close to objects in the bottom-right node, which leads us to derive very efficient algorithms for shortest distance, and other geographic queries. 
                            </p>
                            <img className="img-responsive submit-server portfolio-img" src={require( "../images/submit-server.png") } />
                            <p className="project-text">
                                Overall, this was one of the most challenging projects in my undergraduate career and definitely made me a stronger developer. The above is a screenshot of various submission trials for the project, where red bars denote failing tests and green bars denote passing tests. This project made me a stronger debugger as well. Some notable debugging skills I refined were <a href="https://en.wikipedia.org/wiki/Rubber_duck_debugging" class="peds-link"><i>rubber ducking</i></a> and becoming proficient with the eclipse debugger, which was invaluable while tracing through multiple recursive calls on the call stack to find a bug.   
                            </p>

                            <p className="project-text">
                                Some notable data structures I implemented from scratch for this project include:  
                            </p>
                            <ul className="project-ul">
                                <li><strong>AVL-g Tree</strong> (a variation of the AVL tree) <br/>
                                        &nbsp;&nbsp;Used to represent a data dictionary</li>
                                <li><strong>Point Region (PR) Quadtree </strong><br/>
                                        &nbsp;&nbsp; Used to represent metropoles (clusters of cities)</li>
                                <li><strong>Polygonal Map (PM) Quadtree</strong> <br/>
                                        &nbsp;&nbsp; Used to store cities, airports, and roads</li>
                            </ul> 
                            <br/>
                            <br />
			                <a className="btn-lg btn-project" href="https://wiki.cs.umd.edu/cmsc420/index.php?title=MeeshQuest" target="_blank"><i class="fa fa-link"></i> View project wiki</a>
                        </div>
                    </div>
                </div>
                { this.renderFooter() }
            </div>
        );
    }
    
    renderNavbar = () => {
        return (
        <header id="header" className="site_header">
            <div id="sticky_header" className="show-page-header">
            <div className="site_navigation">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <nav className="navbar navbar-expand-lg navigation_area">
                                <a className="navbar-brand site_logo" href="index.html">
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
                                        <li className="nav-item">
                                            <a className="nav-link smoot_scroll dots_effect" href="#blog" data-scroll-nav="5">blog <span className="dot_effect dot_hover"></span></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link smoot_scroll dots_effect" href="#">Résumé <span className="dot_effect dot_hover"></span></a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link smoot_scroll dots_effect" href="#">contact <span className="dot_effect dot_hover"></span></a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </header>  
        );
    };

    renderFooter = () => {
        return (
            <footer id="footer" className="footer section_scroll">
            <div className="footer-widgets-area ptb-80">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="footer_description text-center">
                                <a className="footer_logo site_logo" href="index.html"><span>Abhas</span>Arya</a>
                                <ul className="footer_social_share">
                                    <li><a href="#"><i className="fa fa-github"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                    <li><a href="#"><i className="fa fa-envelope"></i></a></li>
                                    <li><a href="#"><i className="fa fa-stack-overflow"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
            <div className="footer-bottom-area text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="copyright">
                                <p className="footer-caption">Made with <span className="fa fa-heart"></span> by Abhas</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        );
    };
}

export default Meeshquest;