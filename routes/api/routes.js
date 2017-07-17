const user = require('./user');
const message = require('./message');
const phonebook = require('./phonebook');
module.exports = function(app){
    app.use('/user', user);
    app.use('/message', message);
    app.use('/phonebook', phonebook);
};