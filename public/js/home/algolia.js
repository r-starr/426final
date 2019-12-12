window.onload = async function () {
    updateFeed();
    const searchClient = algoliasearch(
        'I5UBGGYBBY',
        '27a8eba63dfa2290c9e22e5dc680a37c'
    );

    const autocomplete = instantsearch.connectors.connectAutocomplete(
        ({ indices, refine, widgetParams }, isFirstRendering) => {
            const { container, onSelectChange } = widgetParams;

            if (isFirstRendering) {
                container.html('<select id="ais-autocomplete"></select>');

                container.find('select').selectize({
                    options: [],
                    valueField: 'name',
                    labelField: 'name',
                    highlight: false,
                    onType: refine,
                    onBlur() {
                        refine(this.getValue());
                    },
                    score() {
                        return function () {
                            return 1;
                        };
                    },
                    onChange(value) {
                        updateFeed(value);
                        onSelectChange(value);
                        refine(value);
                    },
                });

                return;
            }

            const [select] = container.find('select');

            indices.forEach(index => {
                select.selectize.clearOptions();
                index.results.hits.forEach(h => select.selectize.addOption(h));
                select.selectize.refreshOptions(select.selectize.isOpen);
            });
        }
    );

    const suggestions = instantsearch({
        indexName: 'games',
        searchClient,
    });

    suggestions.addWidget(
        instantsearch.widgets.configure({
            hitsPerPage: 5,
        })
    );

    suggestions.addWidget(
        autocomplete({
            container: $('#autocomplete'),
            onSelectChange(value) {
                search.helper.setQuery(value).search();
            },
        })
    );

    const search = instantsearch({
        indexName: 'games',
        searchClient,
    });

    search.addWidget(
        instantsearch.widgets.configure({
            hitsPerPage: 10,
        })
    );

    suggestions.start();
    search.start();

}

async function updateFeed(value = "") {
    console.log(value);
    const client = algoliasearch('I5UBGGYBBY', '27a8eba63dfa2290c9e22e5dc680a37c');
    const index = client.initIndex('games');

    let gameCount = (await getFullGameList()).length;

    index.search({
        query: value,
        hitsPerPage: 13,
    }).then(res => {
        console.log("Hello");
        //console.log(res);
        res.hits.forEach(async (hit) => {
            //console.log(hit);
            let reviews = await getRewiewsWithGame(hit['id']);
            //console.log(reviews);
            for (let i = 0; i < reviews.data.length; i++) {
                //console.log(reviews.data[i]);
                clearReviewCards();
                renderReviewCard(reviews.data[i]);
            }
        });
    });
}