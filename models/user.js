import sqlite3 from "sqlite3";


class User {
    constructor(name, lastname, email, username, password) {
        this.name = name;
        this.lastname = lastname;
        this.email = email;
        this.username = username;
        this.password = password;
    }

    create () {

    }

    exists () {
        //const sqlite3 = require('sqlite3').verbose(); 

        const db = new sqlite3.Database('./database.sqlite');
            //connection to db

        let result = db.exec(`SELECT name FROM sqlite_master WHERE type ='table' AND name NOT LIKE 'sqlite_%'`);

        /*let result = db.run('SELECT * FROM users WHERE email = $email OR username = $username', {
            $email: this.email,
            $username: this.username
        });//does a user with the same email/username exist in the users database?*/
        console.log(result);
    }

}

module.exports = User;