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

        //db.exec('INSERT INTO reviews (name, develpoer, platform, device, releaseYear, thumbnail) VALUES ("testName", "testDeveloper", "testPlatform", "testDevice", 2000-03-23, "testPicture")');
    }

    static index() {
        let result = db.prepare('SELECT * FROM games').all();
        return result;
    }

    static show(params) {
        let result = db.prepare('SELECT * FROM games WHERE id = ?').get(params['game_id']);
        return result;
    }

    static store(body) {
        let name = body.name;
        let developer = body.developer;
        let platform = body.platform;
        let device = body.device;
        let releaseYear = body.releaseYear;
        let thumbnail = body.thumbnail;

        db.prepare('INSERT INTO games (name, developer, platform, device, releaseYear, thumbnail) VALUES (?, ?, ?, ?, ?, ?)').run(name, developer, platform, device, releaseYear, thumbnail);    
    }

    static update(body, params) {
        let id = params['game_id'];
        let name = body.name;
        let developer = body.developer;
        let platform = body.platform;
        let device = body.device;
        let releaseYear = body.releaseYear;
        let thumbnail = body.thumbnail;

        db.prepare('UPDATE games SET name = ?, developer = ?, platform = ?, device = ?, releaseYear = ?, thumbnail = ? WHERE id = ?').run(name, developer, platform, device, releaseYear, thumbnail, id);
    }

    static destroy(params) {
        db.prepare('DELETE FROM games WHERE id = ?').run(params['game_id']);
    }

    destroyTable () {
        db.exec('DROP TABLE games');
    }
}
module.exports = gameController;