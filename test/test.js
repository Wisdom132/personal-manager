process.env.NODE_ENV = "test";

let mongoose = require("mongoose");
let Note = require("../model/note");

let chai = require("chai");
let chaiHttp = require("chai-http");
let app = require("../server");
let should = chai.should();

chai.use("chaiHttp");



  describe("/GET note", () => {
    it("it should get all notes form the database", done => {
      chai
        .request(app)
        .get("/note")
        .end((err, res) => {
            res.should.have.status(200);
            res.should.be.a("array");
            res.body.length.should.be.eql(0);
          done();
        })
    });
  });
