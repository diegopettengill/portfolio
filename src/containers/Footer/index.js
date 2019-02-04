import React from 'react';

const Footer = (props) => {
    return (
        <React.Fragment>

            <section id="contact">

                <div className="container">

                    <h2 className="section-title inverse">Contact Me</h2>

                    <div className="col-xs-12">

                        <p>
                            Drop me a line at: diegopettengill@gmail.com or in the following social networks
                        </p>

                        <ul className="menu-social">
                            <li>
                                <a href="https://www.facebook.com/diegopettengill" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-facebook"></i>
                                </a>
                            </li>

                            <li>
                                <a href="https://www.linkedin.com/in/diegopettengill" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </li>

                            <li>
                                <a href="https://github.com/diegopettengill" target="_blank" rel="noopener noreferrer">
                                    <i className="fab fa-github"></i>
                                </a>
                            </li>
                        </ul>

                    </div>


                </div>

            </section>

            <footer id="footer">
                <div className="container">

                    <div className="row">

                        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                            Copyright ® All rights reserved
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-center">
                            Developed with <i className="fab fa-react"></i> React.
                        </div>

                        <div className="col-xs-12 col-sm-8 col-md-4 col-lg-4 text-right loveline">
                            Made with <i className="fa fa-heart red"></i> and a lot of <i className="fa fa-coffee"></i>
                        </div>

                    </div>

                </div>
            </footer>

        </React.Fragment>
    );
};

export default Footer;