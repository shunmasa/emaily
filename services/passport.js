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
async (accessToken, refreshToken, profile, done)=> {
  const existingUser = await User.findOne({ googleId: profile.id})

  if (existingUser) {   
    return done(null,existingUser);
   } 
  const user = await new User({ googleId: profile.id }).save()
  done(null, user);
}
)
);