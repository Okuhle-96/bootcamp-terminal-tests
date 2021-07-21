let assert = require("assert");
let yearsAgo = require("../yearsAgo");

describe("yearsAgo function", function(){
    it("Should return the current total number as of 1976", function(){
        assert.equal(yearsAgo(45), 1976)
    })
})