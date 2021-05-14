const mongoose = require('mongoose');
const mongooseEndPoint = 'mongodb+srv://chefyata:pomber145@cluster0.wo3t9.mongodb.net/react';

let connection = mongoose.connect(mongooseEndPoint, { useNewUrlParser: true, useUnifiedTopology: true });
module.exports = connection;

const db = mongoose.connection;                                      
db.once('open', console.log.bind(console, 'Db Connected!'));
db.on('error', console.error.bind(console, 'connection error:'));