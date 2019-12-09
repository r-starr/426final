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
            )`
        );

        db.exec('INSERT INTO reviews (user_id, game_id, body, rating, dateCreated, dateUpdated) VALUES ("1", "2", "this game is fun", "4", "2001-01-01", "2001-01-02")');
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
        let user_id = body.uder_id;
        let game_id = body.game_id;
        let text = body.text;
        let rating = body.rating;
        let dateCreated = body.dateCreated;
        let dateUpdated = body.dateUpdated;

        db.prepare('INSERT INTO reviews (user_id, game_id, text, rating, dateCreated, dateUpdated) VALUES (?, ?, ?, ?, ?, ?)').run(user_id, game_id, text, rating, dateCreated, dateUpdated);     
    }

    static update(body, params) {
        let id = params['review_id'];
        let text = body.text;
        let rating = body.rating;
        let dateUpdated = body.dateUpdated;

        db.prepare('UPDATE reviews SET  text =  ?, rating = ?, dateUpdated = ? WHERE id = ?').run(text, rating, dateUpdated, id); 
    }

    destroy(params) {
        db.prepare('DELETE FROM reviews WHERE id = ?').run(params['review_id']);
    }
}
    module.exports = reviewController;