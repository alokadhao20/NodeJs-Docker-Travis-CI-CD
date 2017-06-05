var router = require('express').Router();

// api/products
router.get('/insert', function(req, res) {
      insertIntoDB(function( err, result) {
        if(err) {
            res.send({ message: "Error inserting data" });
        } else {
            console.log('result - ', result);
            res.status(200).send({ message: result });
        }
    });
});
function insertIntoDB(callback) {
  console.log("I am in insertIntoDB");
  global.database.insert([{
    a: 1,
    b: 1
  }, {
    a: 2,
    b: 2
  }, {
    a: 3,
    b: 3
  }, {
    a: 4,
    b: 4
  }], function (err, result) {
      if(err) {
        callback(err, null);
      } else {
         callback(null, result);
      }
   
  });
}

module.exports = router;