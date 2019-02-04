import React from 'react';
import {Route} from 'react-router-dom';
import {AnimatedSwitch} from 'react-router-transition';
import Home from './containers/Home';
import PortfolioView from './containers/PortfolioView';
import DocumentTitle from 'react-document-title';
import './App.css';

console.log('%cWant to see under the hood?\nCheck the repo on GitHub\n(https://github.com/diegopettengill/portfolio)', 'font-size:20px;color:#333;');

const App = () => {
    return (
        <DocumentTitle title="Web Developer Portfolio | Diego Pettengill Fernandes">
            <AnimatedSwitch
                atEnter={{opacity: 0}}
                atLeave={{opacity: 1}}
                atActive={{opacity: 1}}
                className="route-wrapper">
                <Route exact path='/' key={1} component={Home}/>
                <Route exact path='/portfolio/:text' component={PortfolioView}/>
            </AnimatedSwitch>
        </DocumentTitle>
    )
};

export default App;
