import firebase from "../data/firebase";

/** Class that handles database interaction */
class PortfolioService {

    static collection = 'portfolio_items';

    /**
     * Finds an portfolio item by his slug
     * @param slug - The slug property of the portfolio_items collection
     * @returns {Promise<any>}
     */
    static find(slug) {

        return new Promise((resolve, reject) => {

            firebase.firestore()
                .collection(this.collection)
                .where("slug", "==", slug)
                .limit(1)
                .get()
                .then((doc) => {

                    let item = doc.docs[0];

                    if (item.exists) {
                        resolve(item.data());

                    } else {
                        reject();
                    }

                }).catch((error) => {
                    reject(error);
                });

        });

    }

    /**
     * Fetches the previous and the next portfolio items
     * @param slug
     * @returns {Promise<any>}
     */
    static prevAndNext(slug) {

        return new Promise((resolve, reject) => {

            firebase.firestore()
                .collection(this.collection)
                .orderBy('order', 'asc')
                .get()
                .then((doc) => {

                    let prev = {};

                    let next = {};

                    doc.docs.forEach((portfolio, key) => {

                        let item = portfolio.data();

                        if(item.slug === slug){

                            if(typeof doc.docs[key-1] !== "undefined"){
                                prev = doc.docs[key-1].data();
                            }

                            if(typeof doc.docs[key+1] !== "undefined"){
                                next = doc.docs[key+1].data();
                            }

                        }

                    });

                    resolve({
                        prev : prev,
                        next : next
                    });

                }).catch((error) => {
                reject(error);
            });

        });

    }

}

export default PortfolioService;
