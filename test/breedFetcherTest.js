const { fetcher } = require("../breedFetcher");
const { assert } = require("chai");

describe("fetcher", () => {
  it("returns a string description for a valid breed, via callback", done => {
    fetcher("Siberian", (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc =
        "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors. ";

      // compare returned description
      assert.equal(expectedDesc, desc);

      done();
    });
  });
  it("returns a string saying that the breed was not found", done => {
    fetcher("DOGS", (err, desc) => {
      const expectedDesc = "The breed is extinct in our server.";
      assert.equal(err, expectedDesc);
      done();
    });
  });
});
