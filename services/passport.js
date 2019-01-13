const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys');

const User = mongoose.model('users');

passport.serializeUser((user,done) => {
done(null,user.id);//put id to existing user or user as serializeUser //not profile.id
//google id = profile id ...mongo id = user id (uniqury identify id by mongo)
});

passport.deserializeUser((id, done) =>{
//id...token cookye,done ..successfully enter 
User.findById(id)
.then(user => {
    done(null,user);
});
});
//take a user model put identify pieace of infomation to cookyes 
passport.use(
new GoogleStrategy(
{
clientID:keys.googleClientID,
clientSecret:keys.googleClientSecret,
callbackURL: '/auth/google/callback',
proxy:true

},
(accessToken, refreshToken, profile, done)=> {
   User.findOne({ googleId: profile.id})
   .then((existingUser) => {
   if (existingUser) {   
    //we already have a record with the given   profile id 
    done(null,existingUser);
   } else {
// we dont have a user record with this ID,make a new record 
  new User({ googleId: profile.id })
  .save()
  .then(user => done(null,user));
}
});
}
)
);