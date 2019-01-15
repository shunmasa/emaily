// prod.js-production key is here

module.exports = {
    googleClientID:process.env.GOOGLE_CLIENT_ID,
    googleClientSecret:process.env.GOODLE_CLIENT_SECRET,
    mongoURI:process.env.MONGO_URI,
    cookiekey: process.env.COOKIE_KEY,
    stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    stripeSecreateKey: process.env.STRIPE_SECRET_KEY
    };