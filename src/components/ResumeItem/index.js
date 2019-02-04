import React from 'react';
import WOW from "wow.js";

const ResumeItem = (props) => {

    const wow = new WOW();
    wow.init();

    const {item} = props;

    const itemClass = item.current ? "row resume-item actual wow fadeInUp" : "row resume-item wow fadeInUp";

    return (
        <div className={itemClass}>

            <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 resume-item-company">
                <h5>{item.company}</h5>
                <h6>{item.period[0]} - {item.period[1]}</h6>
            </div>

            <div className="col-xs-12 col-sm-9 col-md-9 col-lg-9 resume-item-content">

                <h2>{item.ocupation}</h2>

                <p>
                    {item.description}
                </p>

            </div>

            <div className="clearfix"></div>

        </div>
    )
};

export default ResumeItem;