import React from 'react';

const Footer = () => (
    <footer id="footer" className="footer section_scroll">
        <div className="footer-widgets-area ptb-80">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="footer_description text-center">
                            <a className="footer_logo site_logo" href="index.html"><span>Abhas</span>Arya</a>
                            <ul className="footer_social_share">
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

export default Footer;