const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const path = require('path');
require('./models/User');
require('./services/passportGoogleOAuth');
const routes = require('./routes');
const config = require('./config');

mongoose.Promise = global.Promise;
mongoose.connect(config.mongoURI);

app.use(bodyParser.json());

app.use(session({
  secret: config.cookieKey,
  resave: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 30 * 24 * 60 * 60 * 1000
  }
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', routes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(config.port, () => {
  console.log(`Server listening on PORT ${config.port}`);
});
