import React, {Component} from 'react';
import ListLanguages from '../../components/ListLanguages/';
import ListSkills from '../../components/ListSkills';

class WhatIDo extends Component {

    componentDidMount() {

    }

    render() {

        return (
            <section id="aboutme">

                <div className="container">

                    <h2 className="section-title">WHAT I DO</h2>

                    <div className="row">

                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 aboutme-description">

                            <p>For over 8 years I do my best to deliver to the client the product that I wanted to
                                receive.</p>

                            <p>Over these years, the main focus of my work has been developing PHP applications and websites,
                                WordPress
                                custom
                                themes and front-end. But I've done some Chat Bot's and Android Apps as
                                well.</p>

                            <p>Recently I've been adventuring into Data Science, doing some data wrangling in Python,
                                and
                                data
                                visualization using Tableau.</p>

                            <h3 className="primary-color">Languages and Frameworks</h3>

                            <ListLanguages/>

                        </div>

                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 aboutme-skills">

                            <ListSkills/>

                        </div>

                    </div>

                </div>

            </section>
        )
    }
}


export default WhatIDo;