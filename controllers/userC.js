var db = require('better-sqlite3')('./database.db');

class userController {
    constructor() {
        db.exec(`CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            first_name VARCHAR(255),
            last_name VARCHAR(255),
            email VARCHAR(255),
            username VARCHAR(255),
            password VARCHAR(255)
            )`
        );
    }

    static index() {
        let result = db.prepare('SELECT * FROM users').all();
        return result;
    }

    static show(params) {
        let result = db.prepare('SELECT * FROM users WHERE id = ?').get(params['user_id']);
        return result;
    }

    static store(body) {
        let first_name = body.first_name
        let last_name = body.last_name;
        let email = body.email;
        let username = body.username;
        let password = body.password;

        let result = db.prepare('INSERT INTO users (first_name, last_name, email, username, password) VALUES (?, ?, ?, ?, ?)').run(first_name, last_name, email, username, password); 
        return result;
    }

    static update(body, params) {
        let id = params['user_id'];
        let first_name = body.first_name
        let last_name = body.last_name;
        let email = body.email;
        let username = body.username;
        let password = body.password;

        let result = db.prepare('UPDATE users SET first_name = ?, last_name = ?, email = ?, username = ?, password = ? WHERE id = ?').run(first_name, last_name, email, username, password, id); 
        return result;
    }

    static destroy(params) {
        let result = db.prepare('DELETE FROM users WHERE id = ?').run(params['user_id']);
        return result;
    }

    destroyTable() {
        db.exec('DROP TABLE users');
    }
}
module.exports = userController;