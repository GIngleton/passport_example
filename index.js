var express = require(express),
  hbs = require(hbs),
  bcrypt = require(bcrypt-nodejs),
  bodyParser = require(body-parser),
  session = require(express-session),
  mongoose = require(mongoose),
  passport = require(passport),
  //User = require('./user'),
  //localAuth = require('./auth'),
  app = express();

  app.set("view engine", "hbs")
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
  	extended: true
  }));

  app.use(session({
    secret: 'itsASecret',
    resave: true,
    saveUninitialized: true
  }));
