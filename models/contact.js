//to save storage nodejs automaticaly will have same instance of below as the ../models/contact.js
const mongoose = require('mongoose'); 

const contactSchema = new mongoose.Schema({
    name:{//we discribe here necessary things like no one can do scam with us by puting false values
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    }
});

//now we need to tell what would be the collection of using the schema likebelow
//here belo!! capital is naming convention
const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;