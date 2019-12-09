var db = require('better-sqlite3')('./database.db');

class userController {
    constructor() {
        db.exec(`CREATE TABLE IF NOT EXISTS users (
            id INTEGER,
            first_name VARCHAR,
            last_name VARCHAR,
            email VARCHAR,
            username VARCHAR,
            password VARCHAR
            )`
        );
    }

    index() {
        let result = db.prepare('SELECT * FROM users').all();
        return result;
    }

    show(params) {
        // let result = db.prepare('SELECT * FROM users WHERE id = ?').get(params['game_id']);
        // return result;
    }

    store() {
        // let result = db.prepare('SELECT * FROM games WHERE id = ?').post();
        // return result;      
    }

    update() {

    }

    destroy() {

    }
}
module.exports = userController;