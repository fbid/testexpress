var express = require('express');
var app = express();

var port = process.env.OPENSHIFT_NODEJS_PORT || 8080; // Port 8080 if you run locally
var address = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1"; // Listening to localhost if you run locally

// attivazione di EJS per la gestione del rendering
app.engine('.html', require('ejs').renderFile);

// logica di gestione delle richieste
app.get('/',function(req,res){
    res.render('index.html');
    console.log('GET index.html request');
});
app.get('/about',function(req,res){
    res.render('about.html');
    console.log('GET about.html request');
});

var server = app.listen(port, address, function(){
    console.log('Server listening at port 8080...')
}); 