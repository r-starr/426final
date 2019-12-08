var db = require('better-sqlite3')('./database.db');

class reviewController {
    constructor() {
        db.exec(`CREATE TABLE IF NOT EXISTS reviews (
                id INTEGER,
                user_id	INTEGER,
                game_id	INTEGER,
                body VARCHAR,
                rating INTEGER,
                date_created DATE,
                date_updated DATE,
            )`
        );
    }

    index() {
        let result = db.prepare('SELECT * FROM games').all();
        return result;
    }

    show(params) {
        let result = db.prepare('SELECT * FROM games WHERE id = ?').get(params['game_id']);
        return result;
    }

    create() {

    }

    store() {
        // let result = db.prepare('SELECT * FROM games WHERE id = ?').post();
        // return result;      
    }

    edit() {

    }

    update() {

    }

    destroy() {

    }
}
    module.exports = reviewController;