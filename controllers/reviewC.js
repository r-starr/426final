var db = require('better-sqlite3')('./database.db');
const algoliasearch = require('algoliasearch');

class reviewController {
    constructor() {
        db.exec(`CREATE TABLE IF NOT EXISTS reviews (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id	INTEGER,
                game_id	INTEGER,
                text VARCHAR,
                rating INTEGER,
                date_created DATE,
                date_updated DATE,
                FOREIGN KEY (user_id) REFERENCES users (id),
                FOREIGN KEY (game_id) REFERENCES games (id)
            )`
        );
    }

    static index() {
        let result = db.prepare('SELECT * FROM reviews ORDER BY id DESC').all();
        this.algolia(result);
        return result;
    }

    static show(params) {
        let result = db.prepare('SELECT * FROM reviews WHERE id = ?').get(params['review_id']);
        return result;
    }

    static store(body, user_id) {
        let game_id = body.game_id;
        let text = body.text;
        let rating = body.rating;

        var d = new Date();
        let date = d.getFullYear() + '-' + (d.getMonth() +1) +  '-' + d.getDate();

        let result = db.prepare('INSERT INTO reviews (user_id, game_id, text, rating, date_created, date_updated) VALUES (?, ?, ?, ?, ?, ?)').run(user_id, game_id, text, rating, date, date);
        return result;
    }

    static update(body, params) {
        let id = params['review_id'];
        let text = body.text;
        let rating = body.rating;

        var d = new Date();
        let date = d.getFullYear() + '-' + (d.getMonth() +1) +  '-' + d.getDate();

        let result = db.prepare('UPDATE reviews SET text =  ?, rating = ?, date_updated = ? WHERE id = ?').run(text, rating, date, id);
        return result;
    }

    static destroy(params) {
        let result = db.prepare('DELETE FROM reviews WHERE id = ?').run(params['review_id']);
        return result;
    }

    destroyTable () {
        db.exec('DROP TABLE reviews');
    }

    static algolia (reviews) {
        const client = algoliasearch('I5UBGGYBBY', '37c61a03f49460ca5d42260e68c5b214');
        const index = client.initIndex('reviews');

        index.addObjects(reviews, (err, content) =>  {
            console.log(content);
        });
    }

    static getGames (params) {
        let result = db.prepare('SELECT * FROM reviews WHERE game_id = ?').all(params['game_id']);
        console.log(result);
        return result;
    }
}
module.exports = reviewController;