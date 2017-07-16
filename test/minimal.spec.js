/* global describe,  it */
const chai = require("chai");
const expect = chai.expect;

const MinimalModule = require("../lib/nqm-package-minimal");
const Minimal = MinimalModule.Minimal;

describe("minimal", function() {
  it("checks hello world", function() {
    const mini = new Minimal();
    expect(mini.helloWorld()).equals("hello world");
  });
});
