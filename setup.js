var async = require('async');
server = require('./server');
db = require('./database');
async.waterfall([
    function (callback) {
    dbObj = new db();
    dbObj.connect(function(err, result) {
        if(err) {
           callback(err, null); 
        } else {
            callback(null, result); 
        }
    });
   // callback(null, 'dbCreated');
}, function(result, callback) {
    var server1 = server.listen(3000, function () {
        var port = server1.address().port;
        callback(null, 'Example app listening at port ' + port);
    });
}], function (err, result) {
    if (err) {
        console.log('err- ', err);
    } else {
        console.log('result- ', result);
    }
});