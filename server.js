const path = require('path');
const express = require('express');
const app = express();

const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

require('./backend/models/user');
require('./backend/services/passport');
const keys = require('./backend/config/keys');
const api = require('./backend/routes/');

const bodyParser = require('body-parser');

app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use(
    cookieSession({
        maxAge: 24 * 60 * 60 * 1000, // 1 day
        keys: [keys.cookieKey]
    })
);

//authentication
app.use(passport.initialize());
app.use(passport.session());

//api and frontend routes
app.use('/api', api);
app.use('/', (request, response) => {
    response.sendFile(__dirname + '/public/index.html'); // For React/Redux
});

//mongo
mongoose.connect(keys.mongoUri);

const PORT = process.env.PORT || 3000;
app.listen(PORT, error => {
    error
        ? console.error(error)
        : console.info(
              `==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`
          );
});
