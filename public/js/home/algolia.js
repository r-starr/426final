window.onload = function () {
    searchA();
}

export function searchA() {
    const client = algoliasearch('I5UBGGYBBY', '27a8eba63dfa2290c9e22e5dc680a37c');
    const index = client.initIndex('reviews');

    index.search({
        query: 'Halo'
    },
        (err, { hits } = {}) => {
            if (err) throw err;
            console.log(hits);
        }
    );
}