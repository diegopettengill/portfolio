import React, {Fragment, Component} from 'react';
import './FullPageLoader.css';

class FullPageLoader extends Component {

    state = {
        classes: "full-page-loader animated "
    };


    componentDidUpdate(prevProps) {

        if (this.props.isLoading !== prevProps.isLoading) {

            if (this.props.isLoading) {

                this.setState({classes: "full-page-loader animated fadeIn"});

            } else {

                this.setState({classes: "full-page-loader animated fadeOut"});

                setTimeout(() => {
                        // this.classes = "full-page-loader unloaded";
                        this.setState({classes: "full-page-loader unloaded"});
                    },
                    800);
            }

        }

    }

    shouldComponentUpdate(nextProps, nextState, nextContext) {

        if (nextState.isLoading !== this.props.isLoading) {
            return true;
        }

    }


    render() {

        return (

            <Fragment>

                <div className={this.state.classes}>
                    <div>
                        <span>{'{'}</span> <span>{'}'}</span>

                        <div className="loader-text fadeIn">
                            {this.props.text}
                        </div>

                    </div>
                </div>

            </Fragment>

        )

    }

}

export default FullPageLoader;