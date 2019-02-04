import React from 'react';
import Header from "../Header";
import WhatIDo from '../WhatIDo';
import Resume from '../Resume';
import Portfolio from '../Portfolio';
import Footer from '../Footer';

const Home = () => {
    return [
        <Header key={0}/>,
        <WhatIDo key={1}/>,
        <Resume key={2}/>,
        <Portfolio key={3} />,
        <Footer key={4}/>
    ]
};

export default Home;
