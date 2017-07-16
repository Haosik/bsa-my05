const user = require('./user');
const message = require('./message');

module.exports = function(app){
    app.use('/user', user);
    app.use('/message', message);
};