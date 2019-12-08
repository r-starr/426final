var db = require('better-sqlite3')('./database.db');

class gameController {
    constructor() {
        db.exec(`CREATE TABLE IF NOT EXISTS games (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR(255),
            developer VARCHAR(255),
            platform VARCHAR(255),
            device VARCHAR(255),
            releaseYear	DATE,
            thumbnail VARCHAR(255))`
        );

        // db.exec('INSERT INTO games (name, developer, platform, device, releaseYear, thumbnail) VALUES ("testName", "testDeveloper", "testPlatform", "testDevice", 2000-03-23, "testPicture")');
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

module.exports = gameController;