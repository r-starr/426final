var db = require('better-sqlite3')('./database.db');

class reviewController {
    constructor() {
        db.exec(`CREATE TABLE IF NOT EXISTS reviews (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                user_id	INTEGER,
                game_id	INTEGER,
                text VARCHAR(255),
                rating INTEGER,
                dateCreated DATE,
                dateUpdated DATE,
                FOREIGN KEY (user_id) REFERENCES users (id),
                FOREIGN KEY (game_id) REFERENCES games (id)
            )`
        );
    }

    static index() {
        let result = db.prepare('SELECT * FROM reviews').all();
        return result;
    }

    static show(params) {
        let result = db.prepare('SELECT * FROM reviews WHERE id = ?').get(params['review_id']);
        return result;
    }

    static store(body) {
        let user_id = body.user_id;
        let game_id = body.game_id;
        let text = body.text;
        let rating = body.rating;
        let dateCreated = body.dateCreated;
        let dateUpdated = body.dateUpdated;

        let result = db.prepare('INSERT INTO reviews (user_id, game_id, text, rating, dateCreated, dateUpdated) VALUES (?, ?, ?, ?, ?, ?)').run(user_id, game_id, text, rating, dateCreated, dateUpdated);
        return result;
    }

    static update(body, params) {
        let id = params['review_id'];
        let user_id = body.user_id;
        let text = body.text;
        let rating = body.rating;
        let dateUpdated = body.dateUpdated;

        let result = db.prepare('UPDATE reviews SET user_id = ?, text =  ?, rating = ?, dateUpdated = ? WHERE id = ?').run(user_id, text, rating, dateUpdated, id);
        return result;
    }

    static destroy(params) {
        let result = db.prepare('DELETE FROM reviews WHERE id = ?').run(params['review_id']);
        return result;
    }

    destroyTable () {
        db.exec('DROP TABLE reviews');
    }
}
module.exports = reviewController;