const mongoose = require('mongoose');

//noderest: nome do bando de dados. 
mongoose.connect('mongodb://localhost/noderest', {useFindAndModify: false,useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;