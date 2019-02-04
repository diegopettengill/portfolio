import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import Slider from "react-slick";
import PortfolioService from "../../services/PortfolioService";
import logo from '../Header/img/logo.png';
import FullPageLoader from '../../components/FullPageLoader';
import PortfolioNextPrev from '../../components/PortfolioNextPrev';
import ElementPan from 'react-element-pan';
import DocumentTitle from 'react-document-title';
import ImageLoader from 'react-loading-image';
import SlickLoader from '../../components/SlickLoader';
import Browser from '../../components/Browser';
import Phone from '../../components/Phone';

class PortfolioView extends Component {

    constructor(props) {

        super(props);

        this.state = {
            project: {
                title: "Loading",
                screenshots: [],
                technologies: [],
                about: []
            },
            prev: {},
            next: {},
            isLoading: true,
            startY: 0 // Pan Y coordinate to start
        };

        this.handlePortfolioLink = this.handlePortfolioLink.bind(this);

    }

    componentDidMount() {

        let slug = this.props.match.params.text;

        this.loadPortfolio(slug);

    }

    loadPortfolio(slug) {

        this.setState({
            isLoading: true,
            startY: 0
        });

        PortfolioService.find(slug).then((item) => {

            this.setState({
                project: item,
                isLoading: false
            });

            PortfolioService.prevAndNext(slug).then((links) => {

                this.setState({
                    next: links.next,
                    prev: links.prev
                });

            });

        }).catch((error) => {
            // @TODO Redirect  to a 404 page
        });

    }

    handlePortfolioLink(event) {

        event.preventDefault();

        let slug = event.target.dataset.slug;

        this.props.history.push(slug);

        this.loadPortfolio(slug);


    }

    renderMockup() {

        const sliderSettings = {
            dots: true,
            arrows: false,
            infinite: false,
            lazyLoad: true,
            fade: false,
            draggable: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        if (this.state.project.category === "web" || this.state.project.category === "bots") {
            return (
                <Browser>
                    <Slider {...sliderSettings}>
                        {this.state.project.screenshots.map((screenshot, index) => (

                            <ElementPan
                                key={index}
                                height={472}
                                startX={this.state.startY}>
                                <div style={{position: 'relative'}}>
                                    <ImageLoader
                                        className="img-responsive"
                                        src={screenshot.uri}
                                        loading={() => <SlickLoader/>}
                                        error={() => <div>Error</div>}
                                    />
                                </div>
                            </ElementPan>

                        ))}
                    </Slider>
                </Browser>
            )
        } else {
            return (
                <Phone>
                    <Slider {...sliderSettings}>
                        {this.state.project.screenshots.map((screenshot, index) => (

                            <ElementPan
                                key={index}
                                height={535}
                                startX={this.state.startY}>
                                <div style={{position: 'relative'}}>
                                    <ImageLoader
                                        className="img-responsive"
                                        src={screenshot.uri}
                                        loading={() => <SlickLoader/>}
                                        error={() => <div>Error</div>}
                                    />
                                </div>
                            </ElementPan>

                        ))}
                    </Slider>
                </Phone>
            )
        }
    }


    render() {

        return (
            <DocumentTitle
                title={this.state.project.title + " | Full-Stack Web Developer | Diego Pettengill Fernandes"}>

                <div id="page-portfolio">

                    <FullPageLoader isLoading={this.state.isLoading} text="Loading the awesomeness"/>

                    {this.state.prev.title &&
                    <PortfolioNextPrev type="prev" title={this.state.prev.title} slug={this.state.prev.slug}
                                       onClick={this.handlePortfolioLink}/>
                    }

                    {this.state.next.title &&
                    <PortfolioNextPrev type="next" title={this.state.next.title} slug={this.state.next.slug}
                                       onClick={this.handlePortfolioLink}/>
                    }

                    <div className="portfolio-wrapper">

                        <div className="row">

                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 portfolio-logo">
                                <Link to={'/'} tooltip="Back to home">
                                    <img src={logo} alt=""/>
                                </Link>
                            </div>

                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 text-right">
                                <h2 className="portfolio-title">{this.state.project.title}</h2>
                            </div>

                        </div>

                        <div className="portfolio-profile">

                            <article>

                                <header>

                                    <p>
                                        {this.state.project.description}
                                    </p>

                                </header>

                                <div className="portfolio-slider">

                                    {this.state.project.screenshots.length > 0 &&
                                        this.renderMockup()
                                    }

                                </div>

                                <section className="section">

                                    <h2>
                                        ABOUT THIS PROJECT
                                    </h2>

                                    <p>
                                        {this.state.project.about}
                                    </p>

                                    <p>
                                        {this.state.project.about_sub}
                                    </p>

                                </section>

                                <section className="section">

                                    <h2>
                                        Stack
                                    </h2>

                                    <p>
                                        Code technologies I got involved with while working on this project.
                                    </p>

                                    <ul className="frameworks-list">
                                        {this.state.project.technologies.map((technology, index) => (
                                            <li key={index}>{technology.name}</li>
                                        ))}
                                    </ul>
                                </section>

                                <section className="section">

                                    <h2>
                                        RESOURCES
                                    </h2>

                                    <p>
                                        <a href={this.state.project.link} target="_blank">
                                            {this.state.project.link}
                                        </a>
                                    </p>

                                </section>

                            </article>

                        </div>

                    </div>

                </div>

            </DocumentTitle>

        );

    }

}

export default withRouter(PortfolioView);