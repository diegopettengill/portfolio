import React, {Component} from 'react';
import WOW from "wow.js";
import firebase from "../../data/firebase";

class ListSkills extends Component {

    state = {
        skills: []
    };

    componentDidMount() {

        const wow = new WOW();
        wow.init();

        firebase.firestore().collection('skills').onSnapshot((snap) => {

            const skills = [];

            snap.forEach((docSnapshot) => {
                skills.push(docSnapshot.data());
            });

            this.setState({skills: skills});

        });

    }

    componentWillUnmount() {
        // wow.stop();

    }

    render() {
        return (
            <div>
                {this.state.skills.map((skills, index) => (
                    <div key={index} className="skill wow fadeInUp">
                        <h4 className="primary-color">{skills.name} <span>{skills.proficiency}%</span></h4>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" aria-valuenow={skills.proficiency}
                                 aria-valuemin="0" style={{ width: skills.proficiency+'%' }}
                                 aria-valuemax="100">
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }

};

export default ListSkills;