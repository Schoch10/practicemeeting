/// <reference path="base.js">

"use strict";
 
describe("Base JS Test", function () { 
    it("Add gives the correct result", function () {
        var expected = 2;
        var result = baseFunction();          
        expect(result).toBe(expected);
    });
});