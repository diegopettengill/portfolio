import React, {Fragment} from 'react';
import './Loader.css';

const Loader = (props) => {

    return (

        <Fragment>
        {props.isLoading &&
        <div className="loader">
            <div>
                <span>{'{'}</span> <span>{'}'}</span>

                <div className="loader-text fadeIn">
                    Filtering {props.filterName} projects
                </div>

            </div>
        </div>
        }
        </Fragment>

    )

};

export default Loader;