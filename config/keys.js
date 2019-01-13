//keys.js-figure out what set of credentials to return
if (process.env.NODE_ENV ==='production'){
//we are in production -return the prod set of key
module.exports = require('./prod');
//imidiately assign
}else{
 //we are in develompemt - return the dev key 
 modeul.exports = require('./dev');
}   