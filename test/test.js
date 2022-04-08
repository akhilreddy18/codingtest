var expect = require("chai").expect;
var anagram = require("../problem1.js")

describe("Anagram checker", function () {
  describe("Checks if two strings are anagram", function () {
    it("returns true it is a anagram", function () {
      result = anagram.check_anagram("indian", "ndiani")
      expect(result).to.equal(true)
    })
    it("returns true if two case sensitive strings are anagram", function () {
      result = anagram.check_anagram("indian", "ndianI")
      expect(result).to.equal(true)
    })
    it("returns fasle if two strings are not anagram", function () {
      result = anagram.check_anagram("indian", "ndiand")
      expect(result).to.equal(false)
    })
  })
})