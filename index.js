const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');

require('./models/User');
require('./services/passport');

mongoose.connect(keys.mongoURI);
const app = express();

app.use(
cookieSession({
    maxAge:30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookiekey]
})
);
app.use(passport.initialize());
app.use(passport.session());
//2 session in cookie ,cookie expires in 30 days 24 hours ....
// cookie key not config key
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

// creant id and seacret
 