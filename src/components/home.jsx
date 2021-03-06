import React, { Component } from 'react';
import '../css/font-awesome.min.css';
import '../css/flaticon.css';
import '../css/plugins.css';
import '../style.scss';
import ProfilePic from '../images/profile_pic.jpeg';
import NavBarHome from './navbar_home';
import Footer from './footer';

class Home extends Component {
  render() {
    return (
        <div>
            { this.renderNavbar() }
            <div className="site_wrapper bg_white">
                { this.renderHeader() }
                { this.renderAboutSection() }
                { this.renderParallaxSection() }
                { this.renderWorkSection() }
                {/* { this.renderBlogSection() } */}
            </div>
            <div id="section_scroller_button">
                <span className="fa fa-angle-down"></span>
            </div>
            { this.renderFooter() }
        </div>
    );
  }

  renderNavbar = () => {
    return <NavBarHome />;
  };

  renderHeader = () => {
    return (
        <section id="home" className="section_scroll welcome_area" data-scroll-index="0">
            <div className="welcome_video_area bg_overlay page_cover hide-on-mobile"></div>
            <div className="bg_overlay bg_image page_cover hide-on-desktop" style={{backgroundImage:'url(' + require('../images/golden-gate-bridge.jpg') + ')'}}></div>
            
            <div className="home_wrapper_info">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="home_text_block text-center">
                                <h3><span>Hello</span></h3>
                                <h1 className="cd-headline clip">
                                    <span className="i-am-text">I am</span>
                                    <span className="cd-words-wrapper">
                                        <b className="is-visible">Abhas</b>
                                        <b>an Engineer</b>
                                        <b>a Designer</b>
                                        <b>a Maker</b>
                                        <b>a Dreamer</b>
                                    </span>
                                </h1>
                                <ul className="expart_list">
                                    <li>Nextdoor</li>
                                    <li>Full Stack</li>
                                    <li>Product Thinker</li>
                                </ul>
                                <ul className="header_social_share">
                                    <li><a href="https://github.com/aarya1995"><i className="fa fa-github"></i></a></li>
                                    <li><a href="https://www.linkedin.com/in/abhas-arya-b656ba148/"><i className="fa fa-linkedin"></i></a></li>
                                    <li><a href="mailto:abhas.aryaa@gmail.com"><i className="fa fa-envelope"></i></a></li>
                                    <li><a href="https://stackoverflow.com/users/3919906/abhas-arya"><i className="fa fa-stack-overflow"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="scroll_indicator_wrapper">
                <a href="#about" className="scroll_indicator scroll_down" data-scroll-goto="1"></a>
            </div>
        </section>
    );
  };

  renderAboutSection = () => {
    return (
        <section id="about" className="section_scroll" data-scroll-index="1">
            <div className="about_area pb-110">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="about_content text-center">
                                <div className="info">
                                    <img src={ProfilePic} alt="about" />
                                    <h3>Abhas Arya</h3>
                                    <h5>Software Engineer</h5>
                                </div>

                                <p>I am a software engineer at Nextdoor working on the International Team. Recently I launched our iOS app in Italy, Spain, and Australia. I have experience in full stack web development, iOS, and Android.</p>

                                <p>When I'm not working, I like exploring San Francisco, hiking one of its many beautiful trails, or searching for the best hot chocolate the city has to offer.</p>

                                <ul className="tag_list">
                                    <li>iOS</li>
                                    <li>Swift</li>
                                    <li>Python</li>
                                    <li>React</li>
                                    <li>React Native</li>
                                    <li>javascript</li>
                                    <li>PostgreSQL</li>
                                    <li>MongoDB</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  };

  renderParallaxSection = () => {
    return (
        <section className="fanfact_area ptb-100 funfact_bg bg_image bg_overlay parallax_bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 col-md-10 col-sm-10 offset-md-1">
                        <div className="single-fanfact">
                            <h4 className="parallax-section-quote"><span className="fa fa-quote-left quote-icon"></span>&nbsp;Design is not just what it looks like and feels like. Design is how it works.&nbsp;<span className="fa fa-quote-right quote-icon"></span></h4>
                            <p>- Steve Jobs</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
  };

  renderWorkSection = () => {
    return (
        <section id="work" className="work_area section_scroll ptb-110" data-scroll-index="3">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section_title text-center">
                            <h3><span>portfolio</span></h3>
                            <h2 className="title">Recent <span>Work.</span></h2>
                        </div>
                    </div>
                </div>
                <div className="row portfolio-row">
                    <div className="col-md-6 portfolio-col">
                            <a href="/nextdoor">
                            <div className="portfolio-item-container">
                                <div className="work_thumb portfolio-item nextdoor work_item">
                                    <div className="work_hover_mask">
                                        <div className="mask_container text-center">
                                            <h3>i18n config on iOS</h3>
                                            <p>@ Nextdoor 2018</p>
                                        </div>
                                        <span className="fa fa-picture-o"></span>
                                    </div>
                                </div>
                                <span className="portfolio-description">
                                    <h4>i18n config on iOS</h4>
                                    <p>@ Nextdoor 2018</p>
                                </span>
                            </div>
                            </a>
                    </div>
                    <div className="col-md-6 portfolio-col">
                            <a href="/meeshquest">
                            <div className="portfolio-item-container">
                                <div className="work_thumb portfolio-item meeshquest work_item">
                                    <div className="work_hover_mask">
                                        <div className="mask_container text-center">
                                            <h3>MeeshQuest</h3>
                                            <p>Data Structures capstone project 2016</p>
                                        </div>
                                        <span className="fa fa-picture-o"></span>
                                    </div>
                                </div>
                                <span className="portfolio-description">
                                    <h4>MeeshQuest</h4>
                                    <p>Data Structures capstone project 2016</p>
                                </span>
                            </div>
                            </a>
                    </div>
                </div>

                <div className="row portfolio-row">
                    <div className="col-md-6 portfolio-col">
                            <a href="/datascience">
                            <div className="portfolio-item-container">
                                <div className="work_thumb portfolio-item imdb work_item">
                                    <div className="work_hover_mask">
                                        <div className="mask_container text-center">
                                            <h3>IMDB Movie Dataset Analysis</h3>
                                            <p>Data science project 2017</p>
                                        </div>
                                        <span className="fa fa-picture-o"></span>
                                    </div>
                                </div>
                                <span className="portfolio-description">
                                    <h4>IMDB Movie Dataset Analysis</h4>
                                    <p>Data science project 2017</p>
                                </span>
                            </div>
                            </a>
                    </div>
                    <div className="col-md-6 portfolio-col">
                            <a href="/vuepeer">
                            <div className="portfolio-item-container">
                                <div className="work_thumb portfolio-item vuepeer work_item">
                                    <div className="work_hover_mask">
                                        <div className="mask_container text-center">
                                            <h3>Vuepeer</h3>
                                            <p>Search engine for finding peer-to-peer rentals</p>
                                        </div>
                                        <span className="fa fa-picture-o"></span>
                                    </div>
                                </div>
                                <span className="portfolio-description">
                                    <h4>Vuepeer</h4>
                                    <p>Search engine for finding peer-to-peer rentals 2016</p>
                                </span>
                            </div>
                            </a>
                    </div>
                </div>
                
                <div className="row portfolio-row">
                    <div className="col-md-6 portfolio-col">
                            <a href="/peds">
                            <div className="portfolio-item-container">
                                <div className="work_thumb portfolio-item peds work_item">
                                    <div className="work_hover_mask">
                                        <div className="mask_container text-center">
                                            <h3>PEDS</h3>
                                            <p>Presidential Election Database System 2016</p>
                                        </div>
                                        <span className="fa fa-picture-o"></span>
                                    </div>
                                </div>
                                <span className="portfolio-description">
                                    <h4>PEDS</h4>
                                    <p>Presidential Election Database System 2016</p>
                                </span>
                            </div>
                            </a>
                    </div>
                    <div className="col-md-6 portfolio-col">
                            <a href="/flutter">
                            <div className="portfolio-item-container">
                                <div className="work_thumb portfolio-item flutter work_item">
                                    <div className="work_hover_mask">
                                        <div className="mask_container text-center">
                                            <h3>Flutter</h3>
                                            <p>Inventory management system 2017</p>
                                        </div>
                                        <span className="fa fa-picture-o"></span>
                                    </div>
                                </div>
                                <span className="portfolio-description">
                                    <h4>Flutter</h4>
                                    <p>Inventory management system 2017</p>
                                </span>
                            </div>
                            </a>
                    </div>
                </div>

                <div className="row portfolio-row">
                    <div className="col-md-6 portfolio-col">
                            <a href="/aqua">
                            <div className="portfolio-item-container">
                                <div className="work_thumb portfolio-item aqua work_item">
                                    <div className="work_hover_mask">
                                        <div className="mask_container text-center">
                                            <h3>Aqua</h3>
                                            <p>Hotel management software 2017</p>
                                        </div>
                                        <span className="fa fa-picture-o"></span>
                                    </div>
                                </div>
                                <span className="portfolio-description">
                                    <h4>Aqua</h4>
                                    <p>Hotel management software 2017</p>
                                </span>
                            </div>
                            </a>
                    </div>
                    <div className="col-md-6 portfolio-col">
                            <a href="/wecook">
                            <div className="portfolio-item-container">
                                <div className="work_thumb portfolio-item wecook work_item">
                                    <div className="work_hover_mask">
                                        <div className="mask_container text-center">
                                            <h3>WeCook</h3>
                                            <p>CTO/Co-Founder 2015</p>
                                        </div>
                                        <span className="fa fa-picture-o"></span>
                                    </div>
                                </div>
                                <span className="portfolio-description">
                                    <h4>WeCook</h4>
                                    <p>CTO/Co-Founder 2015</p>
                                </span>
                            </div>
                            </a>
                    </div>
                </div>

                <div className="row portfolio-row">
                    <div className="col-md-6 portfolio-col">
                            <a href="/telenix">
                            <div className="portfolio-item-container">
                                <div className="work_thumb portfolio-item telenix work_item">
                                    <div className="work_hover_mask">
                                        <div className="mask_container text-center">
                                            <h3>Telenix</h3>
                                            <p>Integrated job application and monitoring tools 2015</p>
                                        </div>
                                        <span className="fa fa-picture-o"></span>
                                    </div>
                                </div>
                                <span className="portfolio-description">
                                    <h4>Telenix</h4>
                                    <p>Integrated job application and monitoring tools 2015</p>
                                </span>
                            </div>
                            </a>
                    </div>
                    <div className="col-md-6 portfolio-col">
                            <a href="/kwiknews">
                            <div className="portfolio-item-container">
                                <div className="work_thumb portfolio-item kwiknews work_item">
                                    <div className="work_hover_mask">
                                        <div className="mask_container text-center">
                                            <h3>KwikNews</h3>
                                            <p>RSS reader/aggregator to discover interesting news 2014</p>
                                        </div>
                                        <span className="fa fa-picture-o"></span>
                                    </div>
                                </div>
                                <span className="portfolio-description">
                                    <h4>KwikNews</h4>
                                    <p>RSS reader/aggregator to discover interesting news 2014</p>
                                </span>
                            </div>
                            </a>
                    </div>
                </div>

                <div className="row portfolio-row">
                    <div className="col-md-6 portfolio-col">
                            <a href="https://www.hirekeep.com">
                            <div className="portfolio-item-container">
                                <div className="work_thumb portfolio-item hirekeep work_item">
                                    <div className="work_hover_mask">
                                        <div className="mask_container text-center">
                                            <h3>HireKeep</h3>
                                            <p>matching sales candidates with companies 2015</p>
                                        </div>
                                        <span className="fa fa-picture-o"></span>
                                    </div>
                                </div>
                                <span className="portfolio-description">
                                    <h4>HireKeep</h4>
                                    <p>matching sales candidates with companies 2015</p>
                                </span>
                            </div>
                            </a>
                    </div>
                    <div className="col-md-6 portfolio-col">
                            <a href="https://aqueous-badlands-1659.herokuapp.com/">
                            <div className="portfolio-item-container">
                                <div className="work_thumb portfolio-item fitness44 work_item">
                                    <div className="work_hover_mask">
                                        <div className="mask_container text-center">
                                            <h3>Fitness44</h3>
                                            <p>Fitness consulting services 2015</p>
                                        </div>
                                        <span className="fa fa-picture-o"></span>
                                    </div>
                                </div>
                                <span className="portfolio-description">
                                    <h4>Fitness44</h4>
                                    <p>Fitness consulting services 2015</p>
                                </span>
                            </div>
                            </a>
                    </div>
                </div>
            </div>
        </section>
    );
  };

  renderBlogSection = () => {
    return (
        <section id="blog" className="section_scroll blog_area ptb-110" data-scroll-index="5" style={{paddingTop: "0px"}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section_title text-center">
                            <h3><span>Blog</span></h3>
                            <h2 className="title">Latest <span>News.</span></h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <article className="entry_post text-center">
                            <figure className="post_thumb">
                                <a href="#">
                                    <img className="img-responsive" src="http://via.placeholder.com/640x425" alt="img"/>
                                </a>
                                <span className="entry_date">june 15, 2017</span>
                            </figure>
                            <h2 className="entry_title">
                                <a href="#">Hiking the Isle of Skye</a>
                            </h2>
                            <div className="entry_content">
                                <p>We lysses by James Joyce: a Classic for a Reason Snth Schlitz, tempor duis single-origin coffee ea next level fanny pack nostrud.</p>
                            </div>
                            <footer className="entry_footer clearfix">
                                <div className="entry_meta">
                                    <span className="entry_user"><img className="img-responsive" src="http://via.placeholder.com/50x50" alt="img"/><a href="#">Smith</a></span>
                                </div>
                                <div className="social_share_area">
                                    <div className="share_btn">
                                        <i className="fa fa-share-alt"></i>
                                        <div className="social_share">
                                            <a href="#"><i className="fa fa-facebook"></i></a>
                                            <a href="#"><i className="fa fa-twitter"></i></a>
                                            <a href="#"><i className="fa fa-google-plus"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </footer>
                        </article>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <article className="entry_post text-center">
                            <figure className="post_thumb">
                                <a href="#">
                                    <img className="img-responsive" src="http://via.placeholder.com/640x425" alt="img"/>
                                </a>
                                <span className="entry_date">june 15, 2017</span>
                            </figure>
                            <h2 className="entry_title">
                                <a href="#">The Best Template</a>
                            </h2>
                            <div className="entry_content">
                                <p>We lysses by James Joyce: a Classic for a Reason Snth Schlitz, tempor duis single-origin coffee ea next level fanny pack nostrud.</p>
                            </div>
                            <footer className="entry_footer clearfix">
                                <div className="entry_meta">
                                    <span className="entry_user"><img className="img-responsive" src="http://via.placeholder.com/50x50" alt="img"/><a href="#">Smith</a></span>
                                </div>
                                <div className="social_share_area">
                                    <div className="share_btn">
                                        <i className="fa fa-share-alt"></i>
                                        <div className="social_share">
                                            <a href="#"><i className="fa fa-facebook"></i></a>
                                            <a href="#"><i className="fa fa-twitter"></i></a>
                                            <a href="#"><i className="fa fa-google-plus"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </footer>
                        </article>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <article className="entry_post text-center">
                            <figure className="post_thumb">
                                <a href="#">
                                    <img className="img-responsive" src="http://via.placeholder.com/640x425" alt="img"/>
                                </a>
                                <span className="entry_date">june 15, 2017</span>
                            </figure>
                            <h2 className="entry_title">
                                <a href="#">Hiking the Isle of Skye</a>
                            </h2>
                            <div className="entry_content">
                                <p>We lysses by James Joyce: a Classic for a Reason Snth Schlitz, tempor duis single-origin coffee ea next level fanny pack nostrud.</p>
                            </div>
                            <footer className="entry_footer clearfix">
                                <div className="entry_meta">
                                    <span className="entry_user"><img className="img-responsive" src="http://via.placeholder.com/50x50" alt="img"/><a href="#">Smith</a></span>
                                </div>
                                <div className="social_share_area">
                                    <div className="share_btn">
                                        <i className="fa fa-share-alt"></i>
                                        <div className="social_share">
                                            <a href="#"><i className="fa fa-facebook"></i></a>
                                            <a href="#"><i className="fa fa-twitter"></i></a>
                                            <a href="#"><i className="fa fa-google-plus"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </footer>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
  };

  renderFooter = () => {
    return <Footer />;
  };
}

export default Home;
