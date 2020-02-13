const request = require("request");
process.argv[2];

const fetcher = (breedName, callback) => {
  let url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    const data = JSON.parse(body);
    if (!data[0]) {
      callback("The breed is extinct in our server.");
    } else {
      callback(null, data[0].description);
    }
  });
};

module.exports = { fetcher };
