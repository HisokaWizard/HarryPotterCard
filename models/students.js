var ObjectID = require('mongodb').ObjectID;
var db = require('../db');

exports.all = function(cb){
    db.get().collection('students').find().toArray(function(err, docs){
        cb(err, docs);
    });
};

exports.findById = function(id, cb){
    db.get().collection('students').findOne({_id: ObjectID(id)}, function(err, doc){
        cb(err, doc);
    });
};


exports.create = function(student, cb){
    db.get().collection('students').insert(student, function(err, result){
        cb(err, result);
    });
};

exports.update = function(id, newdata, cb){
    db.get().collection('students').updateOne(
        {_id: ObjectID(id)},
        newdata,
        function(err, result){
            cb(err, result);
        }
    );
};

exports.removeById = function(id, cb){
    db.get().collection('students').deleteOne(
        {_id: ObjectID(id)},
        function(err, result){
            cb(err, result);
        }
    );
};