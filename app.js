import express from "express";
import path from "path";
import fs from "fs";
import cookieParser from "cookie-parser";
import cors from "cors";
import debug from 'debug';
import bearerToken from "express-bearer-token";

require('dotenv').config();

// Loggers used. Environment variables used to limit output
const debugAutoWire = debug('auto-wire');
const debugAutoWireWarning = debug('auto-wire-warning');

const app = express();

// view engine setup
app.engine('html', require('ejs').renderFile);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// register public path
app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(require('morgan')('dev'));

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bearerToken());
app.use(cookieParser());
app.use(cors());

// Require route files
var apiGamesRouter = require('./routes/api/games');
var webGamesRouter = require('./routes/web/games');

// Register routes
app.use('/api/games', apiGamesRouter.router);
app.use('/games', webGamesRouter.router);

export default app;
