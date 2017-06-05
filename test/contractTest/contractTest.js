var app = require("../../setup.js");
var request = require('request');

describe("Server", function () {
    it("Inserting data into db", function (done) {
        request('http://localhost:3000/api/products/insert', function (error, response, body) {
            console.log('error:', error); // Print the error if one occurred 
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received 
            console.log('body:', body); // Print the HTML for the Google homepage. 
            done();
        });
    });
});