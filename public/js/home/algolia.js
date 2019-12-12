window.onload = function () {



    import algoliasearch from '/public/node_modules/algoliasearch/lite';
    import instantsearch from '/public/node_modules/instantsearch.js';
    import { searchBox, hits } from '/public/node_modules/instantsearch.js/es/widgets';

    const searchClient = algoliasearch('I5UBGGYBBY', '27a8eba63dfa2290c9e22e5dc680a37c');

    const search = instantsearch({
        indexName: 'reviews',
        searchClient,
    });

    search.addWidgets([
        searchBox({
            container: "#searchbox"
        }),

        hits({
            container: "#hits"
        })
    ]);

    search.start();




    //searchA();
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

export const renderAutocomplete = (renderOptions, isFirstRender) => {
    // Rendering logic
};