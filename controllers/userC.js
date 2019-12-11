import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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
        if (!body.first_name || !body.last_name || !body.email || !body.username || !body.password) {
            return;
        }

        let first_name = body.first_name
        let last_name = body.last_name;
        let email = body.email;
        let username = body.username;
        let password = body.password;

        let existsE = db.prepare('SELECT COUNT() FROM users WHERE email = ?').get(email);
        let existsU = db.prepare('SELECT COUNT() FROM users WHERE email = ?').get(username);

        // console.log("existsE: " + existsE);
        // console.log("existsU: " + existsU);
        
        // Check if user exists in DB via email (THIS DOESNT ACTUALLY DO ANYTHING)
        // if (exists > 0) {
        //     console.log("in loop to repvent new accounts");
        //     return;
        // }

        // Hash the user's password
        bcrypt.hash(password, 10, (err, hash) => {
            // Add new user to db
            let result = db.prepare('INSERT INTO users (first_name, last_name, email, username, password) VALUES (?, ?, ?, ?, ?)').run(first_name, last_name, email, username, hash);
        });

        const id = db.prepare('SELECT id FROM users WHERE username = ?').get(username);

        const token = jwt.sign({
            id: id,
            first_name: first_name,
            username: username
        }, process.env.SECRET_KEY, { expiresIn: '30d' });

        return { jwt: token };
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

    static login(body) {
        if (!body.username || !body.password) {
            return;
        }

        const username = body.username;
        const password = body.password;

        let exists = db.prepare('SELECT COUNT(1) FROM users WHERE username = ?').get(username);
        if (!exists) {
            return;
        }

        const user = db.prepare('SELECT id, first_name, username, password FROM users WHERE username = ?').get(username);
        if (!bcrypt.compare(password, user.password)) {
            return;
        }

        const id = db.prepare('SELECT id FROM users WHERE username = ?').get(username);

        const token = jwt.sign({
            id: user.id,
            first_name: user.first_name,
            username: user.username
        }, process.env.SECRET_KEY, { expiresIn: '30d' });
        return { jwt: token, id };
    }

    destroyTable() {
        db.exec('DROP TABLE users');
    }
}
module.exports = userController;