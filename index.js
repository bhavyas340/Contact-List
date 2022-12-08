const express = require('express');
const path = require('path');
const port = 8000;

const db = require('../contact_list/config/mongoose');
const Contact = require('./models/contact');
const Contacts = require('./models/contact'); //this contact will use for create documentries or collection should be populate 
const app = express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded()); //(use anotation is told that it is => middleware) tha is use for
app.use(express.static('assets')); // this refers to get the assets files functionality(like all the css,js and images file it asset folder all can be access by this).

//middleware
// app.use(function(req,res,next){
//     req.myName ="Bavya"
//     // console.log('middleware 1 called');
//     next();
// });

// app.use(function(req,res,next){
//     console.log("its from md2",req.myName);
//     // console.log('middleware 2 called');
//     next();
// });

var contactList = [
    {//this inside the "{name,phone}" --> called document and schema is called what the fild in the document like name,phone etc. 
        //schema needs to define in momgoos  
        name: "bhavya",
        phone: "6378210987"
    },
    {
        name:"Tony stark",
        phone:"2132143210 "
    }
]

app.get('/',function(req,res){
    // console.log(__dirname);
    // console.log("its from get met",req.myName);

    //here just below in "{}" need all contact this is why need all the names this is why it is empty. else if you want to display all the contacts with the name 'New' like you have to write {name:"New"}
    Contact.find({}, function(err, contacts){
        if(err){
            console.log('error is fatching contacts from DB');
            return;
        }
        return res.render('home', {
            title: "Contact List",
            contact_list: contacts 
        });
    })
    
    
});

app.get('/practice',function(req,res){
    // console.log(url);
  
    return res.render('practice', {
        title: "Wow"
    });
});


app.post('/contact-add', function(req,res){
//    contactList.push({
//        name: req.body.name,
//        phone: req.body.phone,
//    });

    // contactList.push(req.body);
    // return res.redirect('back');

    Contact.create({
        name:req.body.name,
        phone:req.body.phone
    }, function(err,newContact){
        if(err){console.log('Error in creating a contact'); 
        return;}

        console.log('********', newContact);
        return res.redirect('back');
    });
    
});

// for deete contact
app.get('/delete-contact',function(req, res){
    console.log(req.query);
    //get the query from url
    let id = req.query.id;

    //find the cntact using id and delete
    Contact.findByIdAndDelete(id,function(err){
        if(err){
        console.log('error in deleting an object from deta base');
           return;
        }
        return res.redirect('back');

    });
});

app.listen(port, function(err){
    console.log('yup it works on port:',port)
});