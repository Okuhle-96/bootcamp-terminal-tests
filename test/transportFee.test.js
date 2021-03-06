let assert = require("assert");
let transportFee = require("../transportFee");

describe("transportFee function", function(){
    it("Should return R20 if the shift is Morning", function(){
        assert.equal(transportFee('morning'), "R20")
    })
    it("Should return R10 if the shift is Afternoon", function(){
        assert.equal(transportFee('afternoon'), "R10")
    })
    it("Should return FREE if the shift is Nightshift", function(){
        assert.equal(transportFee('nightshift'), "free")
    })
})