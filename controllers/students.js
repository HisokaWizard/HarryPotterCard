var StudentsCtrl = require('../models/students');

exports.all=function(req, res){
    StudentsCtrl.all(function(err, docs){
        if(err){
            console.log(err);
            res.sendStatus(500);
        }
        res.send(docs);
    });
};

exports.findById = function(req, res){
    StudentsCtrl.findById(req.params.id, function(err, doc){
        if(err){
            console.log(err);
            res.sendStatus(500);
        }
        res.send(doc);
    });
};

exports.create = function(req, res){
    var student = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        facultet: req.body.facultet,
        result_test: req.body.result_test
    };
    StudentsCtrl.create(student,function(err, result){
        if(err){
            console.log(err);
            res.sendStatus(500);
        }
        res.sendStatus(200);
    });
};

exports.update = function(req, res){
    StudentsCtrl.update(req.params.id,
        {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            facultet: req.body.facultet,
            result_test: req.body.result_test
        },
        function(err, result){
        if(err){
            console.log(err);
            res.sendStatus(500);
        }
        res.sendStatus(200);
    });
};

exports.removeById = function(req, res){
    StudentsCtrl.removeById(req.params.id, function(err, result){
        if(err){
            console.log(err);
            res.sendStatus(500);
        }
        res.sendStatus(200);
    });
};