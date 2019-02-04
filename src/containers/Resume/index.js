import React, { Component } from 'react';
import ResumeItem from '../../components/ResumeItem';
import firebase from "../../data/firebase";

class Resume extends Component {

    constructor(props){

        super(props);

        this.state = {
            items: []
        };

    }

    componentDidMount(){

        firebase.firestore().collection('resume').orderBy("order", "asc").onSnapshot((snap) => {

            const items = [];

            snap.forEach((docSnapshot) => {
                items.push(docSnapshot.data());
            });

            this.setState({items: items});

        });

    }

    render() {

        return (

            <section id="resume">

                <div className="container">

                    <h2 className="section-title">RESUME</h2>

                    {this.state.items.map((item, key) => (
                        <ResumeItem item={item} key={key} />
                    ))}

                </div>

            </section>

        )

    }

}

export default Resume;