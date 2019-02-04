import React, {Component} from 'react';
import WOW from "wow.js";
import firebase from "../../data/firebase";

class ListLanguages extends Component {

    state = {
        languages: []
    };

    componentDidMount() {

        const wow = new WOW();
        wow.init();

        firebase.firestore().collection('languages').onSnapshot((snap) => {

            const languages = [];

            snap.forEach((docSnapshot) => {
                languages.push(docSnapshot.data());
            });

            this.setState({languages: languages});

        });

    }

    render() {

        return (
            <ul className="frameworks-list">
                {this.state.languages.map((languages, index) => (
                    <li data-wow-delay="1" className="wow bounceIn" key={index}> {languages.name} </li>
                ))}
            </ul>
        )
    }

}

export default ListLanguages;