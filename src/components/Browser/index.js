import React,{Component} from 'react';

class Browser extends Component{

    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className="browser-mockup">
                {this.props.children}
            </div>
        )
    }

}

export default Browser;