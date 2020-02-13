const request = require("request");
const breed = process.argv[2];
let url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

const fetcher = url => {
  request(url, (error, response, body) => {
    if (error) {
      console.error("Error", error);
      return;
    }
    const data = JSON.parse(body);

    if (!data[0]) {
      console.log("The breed is extinct in our server.");
    } else {
      console.log(data[0].description);
    }
  });
};

fetcher(url);
