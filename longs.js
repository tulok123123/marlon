var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listsongs', function (req, res) {
   fs.readFile( __dirname + "/" + "song.json", 'utf8', function (err, data) {
      console.log( data );
      res.end( data );
   });
})
var song = {
    "song6" : {
       "song" : "the real slim shady",
       "artist" : "eminem",
       "genre" : "rapper",
       "link": "https://www.youtube.com/watch?v=eJO5HU_7_1w&list=RDS9bCLPwzSC0&index=6"
    }
 }
 
 app.post('/addsongs', function (req, res) {
    
    fs.readFile( __dirname + "/" + "song.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       data["song6"] = song["song6"];
       console.log( data );
       res.end( JSON.stringify(data));
    });
 })

 app.get('/:id', function (req, res) {
   
    fs.readFile( __dirname + "/" + "song.json", 'utf8', function (err, data) {
       var users = JSON.parse( data );
       var user = users["song" + req.params.id] 
       console.log( user );
       res.end( JSON.stringify(user));
    });
 })
 var id = 2;

app.delete('/deletesong', function (req, res) {
   
   fs.readFile( __dirname + "/" + "song.json", 'utf8', function (err, data) {
      data = JSON.parse( data );
      delete data["song" + 2];
       
      console.log( data );
      res.end( JSON.stringify(data));
   });
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})