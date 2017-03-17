var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var ObjectID = require('mongodb').ObjectID;
var db = require('./db');
var Students = require('./controllers/students');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors());

app.use(express.static('ForMyBride')); //Для запуска всего проекта через запуск сервера!!

app.get('/', function(req, res){
    res.sendFile('index.html');
});

app.get('/students', Students.all);

app.get('/students', Students.findById);

app.post('/students', Students.create);

app.put('/students', Students.update);

app.delete('/students', Students.removeById);

db.connect('mongodb://localhost:27017/students_hogvarts', function(err){
    if(err){
        return console.log(err);
    }
    app.listen(3055, function(){
        console.log("Tonya API Started (Port:3055)");

    });
});