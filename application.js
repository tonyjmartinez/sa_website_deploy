var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var appRoutes = require('./routes/app');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');
  next();
});

// load aws sdk
    var aws = require('aws-sdk');

app.use('/', appRoutes);
app.post('/email', function (req, res) {
    console.log(req.body.email);
    
    //email stuff

    

    // load aws config
    aws.config.loadFromPath('config.json');

    // load AWS SES
    var ses = new aws.SES({apiVersion: '2010-12-01'});

    // send to list
    var to = ['ajosephmartinez@gmail.com']

    // this must relate to a verified SES account
    var from = 'ajosephmartinez@gmail.com'

    

    // this sends the email
    // @todo - add HTML version


        ses.sendEmail( { 
       Source: from, 
       Destination: { ToAddresses: to },
       Message: {
           Subject: {
              Data: req.body.email
           },
           Body: {
               Text: {
                   Data: 'Subject: ' + req.body.subject + '\n\n'
                   + 'Name: ' + req.body.name + '\n\n'
                   + 'Email: ' + req.body.email + '\n\n'
                   + 'Age: ' + req.body.age + '\n\n'
                   + 'Gender: ' + req.body.gender + '\n\n'
            
                   + 'Comments: ' + req.body.comments
               }
            }
       }
    }
    , function(err, data) {
        if(err) throw err
            console.log('Email sent:');
            console.log(data);
     });

});

app.post('/email2', function (req, res) {
    console.log(req.body.email);
    
    //email stuff

    

    // load aws config
    aws.config.loadFromPath('config.json');

    // load AWS SES
    var ses = new aws.SES({apiVersion: '2010-12-01'});

    // send to list
    var to = ['ajosephmartinez@gmail.com']

    // this must relate to a verified SES account
    var from = 'ajosephmartinez@gmail.com'

    

    // this sends the email
    // @todo - add HTML version


        ses.sendEmail( { 
       Source: from, 
       Destination: { ToAddresses: to },
       Message: {
           Subject: {
              Data: req.body.email
           },
           Body: {
               Text: {
                   Data: 'Subject: ' + req.body.subject + '\n\n'
                   + 'Name: ' + req.body.name + '\n\n'
                   + 'Email: ' + req.body.email + '\n\n'
                  
            
                   + 'Message: ' + req.body.message
               }
            }
       }
    }
    , function(err, data) {
        if(err) throw err
            console.log('Email sent:');
            console.log(data);
     });

});
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.render('index');
});

module.exports = app;
