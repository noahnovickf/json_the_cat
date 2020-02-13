const { fetcher } = require("./breedFetcher");

fetcher(process.argv[2], (error, desc) => {
  if (error) {
    console.log("Error:", error);
  } else {
    console.log(desc);
  }
});
