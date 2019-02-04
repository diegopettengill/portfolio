import React, {Component} from 'react';
import PortfolioItem from '../../components/PortfolioItem';
import Loader from '../../components/Loader';
import firebase from "../../data/firebase";

/**
 * Main portfolio component.
 * Lists all the categories and items and filter them.
 */
class Portfolio extends Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            allItems: [],
            categories: [],
            filtering: false,
            activeFilter: ""
        };

        this.handleFilter = this.handleFilter.bind(this);

    }

    componentDidMount() {

        /** Filtering portfolio categories */
        firebase.firestore().collection('portfolio_categories').onSnapshot((snap) => {

            const categories = [];

            snap.forEach((docSnapshot) => {
                categories.push(docSnapshot.data());
            });

            this.setState({
                categories: categories
            });

            firebase.firestore().collection('portfolio_items').orderBy("order","asc").onSnapshot((snap) => {

                const items = [];

                snap.forEach((docSnapshot) => {
                    items.push(docSnapshot.data());
                });

                this.setState({
                    items: items,
                    allItems: items
                });

            });



        });

    }

    handleFilter(event) {

        event.preventDefault();

        let filteredCategory = event.target.dataset.filter;

        this.setState({
            items: [],
            filtering:true,
            activeFilter: filteredCategory
        });

        setTimeout(() => {

            if (filteredCategory !== "all") {

                let items = this.state.allItems;

                let filtered = items.filter((item) => {
                    return item.category === filteredCategory;
                });

                this.setState({
                    items: filtered,
                    filtering: false
                });

            } else {

                this.setState({
                    items: this.state.allItems,
                    filtering: false
                });

            }

        }, 2000);

    }

    render() {

        return (

            <section id="portfolio">

                <div className="container">

                    <h2 className="section-title">Portfolio</h2>

                    <div className="portfolio-categories">

                        <ul>
                            <li>
                                <a onClick={this.handleFilter} data-filter="all"
                                   className="primary-color link-gradient">All</a>
                            </li>
                            {this.state.categories.map((category, index) => (
                                <li key={index}>
                                    <a onClick={this.handleFilter} data-filter={category.name}
                                       className="primary-color link-gradient">{category.name}</a>
                                </li>
                            ))}
                        </ul>

                    </div>

                    <div className="row portfolio-container">

                        <Loader isLoading={this.state.filtering} filterName={this.state.activeFilter} />

                        {this.state.items.map((item, index) => (
                            <PortfolioItem item={item} key={index} />
                        ))}

                    </div>

                </div>

            </section>

        )

    }

}

export default Portfolio;