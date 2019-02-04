import React, {Component} from 'react';
import logo from './img/logo.png';
import diego from './img/diego_site.png';
import Particles from 'react-particles-js';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Typist from 'react-typist';
import {isMobile} from 'react-device-detect';


class Header extends Component {

    showSettings (event) {
        event.preventDefault();

    }

    render() {

        const particlesConf = require('./particlesjs-config.json');

        const headerSize = !isMobile ? '100vh' : '170vh';

        return (

            <header id="home">

                <Particles
                    params={particlesConf}
                    height={headerSize}
                />


                <div id="header-wrapper">

                    <div className="container">

                        <div className="row">

                            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 logo-wrapper">
                                <img src={logo} className="logo" alt=""/>
                            </div>

                            <div className="col-xs-6 col-sm-8 col-md-9 col-lg-9 text-right">

                                <nav>

                                    {/*<a id="sidemenu-toggle" className="pull-right" onClick={ this.showSettings }>*/}
                                        {/*<i className="glyphicon glyphicon-menu-hamburger"></i>*/}
                                    {/*</a>*/}

                                    <ul className="main-menu pull-right hidden-xs">
                                        <li>
                                            <AnchorLink href="#home" title="Home"
                                                        className="primary-color">Home</AnchorLink>
                                        </li>
                                        <li>
                                            <AnchorLink href="#aboutme" title="About"
                                                        className="primary-color">About</AnchorLink>
                                        </li>
                                        <li>
                                            <AnchorLink href="#resume" title="Resume"
                                                        className="primary-color">Resume</AnchorLink>
                                        </li>
                                        <li>
                                            <AnchorLink href="#portfolio" title="Portfolio"
                                                        className="primary-color">Portfolio</AnchorLink>
                                        </li>
                                        <li>
                                            <AnchorLink href="#contact" title="Contact"
                                                        className="primary-color">Contact</AnchorLink>
                                        </li>
                                    </ul>

                                </nav>

                            </div>

                            <div className="clearfix"></div>

                        </div>


                        <div className="row">

                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 slider-text">

                                <div className="slider-description">

                                    <Typist avgTypingDelay={2}>

                                        <h2>Hi! My name is</h2>

                                        <Typist.Delay ms={500} />

                                        <h1>DIEGO PETTENGILL</h1>

                                        <p>
                                            Full Stack Web Developer
                                        </p>

                                        <p>
                                            I'm focused on building <strong>HIGH-QUALITY</strong> websites and
                                            applications
                                            for over <strong>8 years</strong>!
                                        </p>

                                        <p>
                                            Feel free to take a look at my latest projects in the <br/>

                                            <AnchorLink href="#portfolio">
                                                <strong>PORTFOLIO</strong>
                                            </AnchorLink> section.
                                        </p>

                                        <p>
                                            Living in Dublin, Ireland.
                                        </p>

                                        <p>
                                            Enquires at <a
                                            href="mailto: diegopettengill@gmail.com">diegopettengill@gmail.com</a>
                                        </p>

                                        <a href="https://www.linkedin.com/in/diegopettengill/"
                                           target="_blank"
                                           className="btn btn-default btn-outline">
                                            Let's connect on LinkedIn! <i className="fab fa-linkedin"></i>
                                        </a>

                                    </Typist>



                                </div>



                            </div>

                        </div>

                        {!isMobile &&
                        <img src={diego} className="img-responsive personal-image" alt=""/>
                        }

                    </div>



                </div>

                {isMobile &&
                <img src={diego} className="img-responsive personal-image mobile" alt=""/>
                }

            </header>

        )
    }
}


export default Header;