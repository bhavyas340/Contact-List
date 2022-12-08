// require the library
//to save storage nodejs automaticaly will have same instance of below as the ../models/contact.js
const mongoose = require('mongoose');

//connect to the database
mongoose.connect('mongodb://localhost/contacts_list_db');

//acquire the connection (to check if it is successful)
const db = mongoose.connection;

//error handel
db.on('error', console.error.bind(console,'error is connection to db such me h'));

//up and running then print the messanges
db.once('open', function(){
    console.log('Successfully connected to the database');
});

module.exports = db;
