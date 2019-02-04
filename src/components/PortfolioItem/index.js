import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import WOW from "wow.js";
import './styles.css';

class PortfolioItem extends Component {


    constructor(props) {
        super(props);

        this.state = {
            animation: 'zoomIn'
        }

    }

    componentDidMount() {

        const wow = new WOW();
        wow.init();

    }


    render() {

        const itemClass = "col-xs-12 col-sm-6 col-md-4 col-lg-4 portfolio-item " + this.props.item.category;

        const animationClass = "portfolio-item-inner wow c-preview " + this.state.animation;

        return (

            <div className={itemClass}>

                <div className={animationClass}>

                    <Link to={'/portfolio/' + this.props.item.slug}>

                        <picture className="c-preview__img">

                            {this.props.item.thumbnails.map((source, index) => (
                                <source media={source.media} key={index} srcSet={source.url}/>
                            ))}

                            <img src={this.props.item.featured_image}
                                 srcSet={this.props.item.featured_image}
                                 className="img-responsive" alt={this.props.item.title}/>

                        </picture>

                    </Link>

                    <h3>{this.props.item.title}</h3>

                </div>

            </div>
        )
    }

}

export default PortfolioItem;