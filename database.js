function db() {
    console.log('I am in db function');
}
db.prototype.connect = function (callback) {
    console.log("I am in db.prototype.connect");
    var MongoClient = require('mongodb').MongoClient;
    //var url = 'mongodb://localhost:27017/mongoMock02';
    var url = 'mongodb://alokadhao:noguess21@ds115411.mlab.com:15411/graspu';
    // Connect using MongoClient
    MongoClient.connect(url, function (err, db) {
        if(err) {
            callback(err, null);
        } else {
            global.database = db.collection('mongoMock02');
            callback(null, 'database careated');
        }      
    });
};

module.exports = db;