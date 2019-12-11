var db = require('better-sqlite3')('./database.db');

const algoliasearch = require('algoliasearch');
const client = algoliasearch('I5UBGGYBBY', '37c61a03f49460ca5d42260e68c5b214');
const index = client.initIndex('games');

class gameController { 
    constructor() {
        db.exec(`CREATE TABLE IF NOT EXISTS games (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name VARCHAR(255),
            developer VARCHAR(255),
            platform VARCHAR(255),
            device VARCHAR(255),
            releaseYear	DATE,
            thumbnail VARCHAR(255)
            )`
        );
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

        let test = db.prepare('INSERT INTO games (name, developer, platform, device, releaseYear, thumbnail) VALUES (?, ?, ?, ?, ?, ?)').run(name, developer, platform, device, releaseYear, thumbnail);

        const id = db.prepare('SELECT id FROM games WHERE name = ?').get(name);

        index.addObject({
            objectID: id,
            name: name,
            developer: developer,
            platform: platform,
            device: device,
            releaseYear: releaseYear,
        }, (err, { objectID } = {}) => {
            console.log(`objectID=${objectID}`);
        });

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

        const object = [{
            name: name,
            developer: developer,
            platform: platform,
            device: device,
            releaseYear: releaseYear,
            thumbnail: thumbnail,
        }];

        index.partialUpdateObjects(object, (err, content) => {
            if (err) throw err;
            console.log(content);
        });
    }

    static destroy(params) {
        db.prepare('DELETE FROM games WHERE id = ?').run(params['game_id']);
    }

    destroyTable() {
        db.exec('DROP TABLE games');
    }
}
module.exports = gameController;