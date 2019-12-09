import express from "express";
import path from "path";
import fs from "fs";
import cookieParser from "cookie-parser";
import cors from "cors";
import debug from 'debug';
import bearerToken from "express-bearer-token";

//var db = require('better-sqlite3')('./database.db');

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

<<<<<<< HEAD
var webHomeRouter = require('./routes/web/home');
var webLoginRouter = require('./routes/web/login');

// Register routes
app.use('/home', webHomeRouter.router);
app.use('/login', webLoginRouter.router);
=======
var webHomeRouter = require('./routes/web/home')

// Register routes
app.use('/home', webHomeRouter.router);
>>>>>>> 9147554f2d8340bd80416a3a5dd7da29b5e28725

//user routes
var apiUsersRouter = require('./routes/api/users');
var webUsersRouter = require('./routes/web/users');
app.use('/api/users', apiUsersRouter.router);
app.use('/users', webUsersRouter.router);

//game routes
var apiGamesRouter = require('./routes/api/games');
var webGamesRouter = require('./routes/web/games');
app.use('/api/games', apiGamesRouter.router);
app.use('/games', webGamesRouter.router);

//review routes
var apiReviewsRouter = require('./routes/api/reviews');
var webReviewsRouter = require('./routes/web/reviews');
app.use('/api/users', apiReviewsRouter.router);
app.use('/users', webReviewsRouter.router);

export default app;
