import React, {Component} from 'react';
import './style.css';

const Phone = (props) => {
    return (
        <div className="phone frame">
            <div className="button volume"></div>
            <div className="button bixby"></div>
            <div className="frame-inner">
                <div className="top">
                    <div className="speaker"></div>
                    <div className="camera"></div>
                    <div className="sensor"></div>
                </div>
                <div className="screen">
                    <div className="app">
                        {props.children}
                    </div>
                </div>
            </div>
            <div className="button power"></div>
        </div>
    )
};

export default Phone;