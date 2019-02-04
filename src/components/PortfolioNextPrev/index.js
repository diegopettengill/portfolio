import React from 'react';
import './styles.css';

const PortfolioNextPrev = (props) => {

    return (
        <div className={'arrow-wrapper '+props.type} tooltip={props.title}>
            <a href="" className={"arrow arrow-"+props.type} data-slug={props.slug}
               onClick={props.onClick}>
            </a>
        </div>

    )

};

export default PortfolioNextPrev;
