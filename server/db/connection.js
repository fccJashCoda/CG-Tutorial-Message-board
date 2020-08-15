const monk = require('monk');
const connectionURI = 'mongodb://127.0.0.1:27017/monkmessageboard';
const db = monk(connectionURI);

module.exports = db;
