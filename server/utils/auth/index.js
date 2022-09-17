const passport = require('passport');
const LocalStategy = require('./stategies/local.stategy');

passport.use(LocalStategy);
