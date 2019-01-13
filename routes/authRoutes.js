const passport = require('passport');

module.exports = app => {

app.get(
'/auth/google',
passport.authenticate('google',{
scope: ['profile','email']
})
);

app.get('/auth/google/callback',passport.authenticate('google'));

app.get('/api/logout', (req, res) => {
req.logout();
res.send(req.user);
});
//request is totally destroyed so no response no longer sign in 

app.get('/api/current_user', (req, res) => {
res.send(req.user);
});
};
//imidiately response ...send to user 