var app = require("../../server.js");
var sinon = require('sinon');
var supertest = require("supertest")(app);
var should = require('should');

describe("Server", function () {
    var stub;
    beforeEach(function (done) {
        global.database = {
            insert: function () {}
        };
        console.log('I am in before each');
         stub = sinon.stub(global.database, "insert", function (data, callback) {
            console.log("Inside stub function data - ", data);
            callback(null, 'done');
        });
        done();
    });
    it("Inserting data into db", function (done) {
        supertest
            .get("/api/products/insert")
            .expect(200)
            .expect({
                message: "data inserted"
            }).end(function(err,res) {
                console.log("res", res.body.message);
                should.equal(res.body.message, 'done', 'not equals to done');
                stub.restore();
                done();
            });            
    });
});