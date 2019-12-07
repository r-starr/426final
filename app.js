import express from "express";
import path from "path";
import fs from "fs";
import cookieParser from "cookie-parser";
import cors from "cors";
import debug from 'debug';
import bearerToken from "express-bearer-token";
import sqlite3 from "sqlite3";

require('dotenv').config();

// Loggers used. Environment variables used to limit output
const debugAutoWire = debug('auto-wire');
const debugAutoWireWarning = debug('auto-wire-warning');

const app = express();

app.use(require('morgan')('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bearerToken());
app.use(cookieParser());
app.use(cors());

// SQLITE3
//const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database.sqlite');

db.exec('CREATE TABLE IF NOT EXISTS users (name VARCHAR, lastname VARCHAR, username VARCHAR, email VARCHAR, password VARCHAR)');
const User = require('./models/user.js');
let user = new User("name", "lastname", "email", "username", "password");
user.exists();
 
// auto-wire routes. Must export default router, and a prefix.
const files = fs.readdirSync(path.join(__dirname, 'routes'));
files.forEach(file => {
  const router = require(path.join(__dirname, './routes', file));

  if (!router.router) {
    debugAutoWireWarning(`'${file}' did not export a 'router'. Skipped`);
    return;
  }
  if (!router.prefix) {
    debugAutoWireWarning(`'${file}' did not export a 'prefix' path. Defaulting to '/'`);
  }

  app.use(router.prefix || '/', router.router);
  debugAutoWire(`registered '${file}' to route '${router.prefix || '/'}'`);
});

export default app;
