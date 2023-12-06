const axios = require("axios");

const encodedParams = new URLSearchParams();
encodedParams.set("q", "Hello, world!");
encodedParams.set("target", "zh");

const options = {
  method: "POST",
  url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
  headers: {
    "content-type": "application/x-www-form-urlencoded",
    "Accept-Encoding": "application/gzip",
    "X-RapidAPI-Key": "9e52b9464bmsh107197cae005512p1a4a48jsn7a748e4cc2ac",
    "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
  },
  data: encodedParams,
};

async function translate() {
  try {
    const response = await axios.request(options);
    const data = response.data;
    // console.log(data);
    const translations = Object.values(data);
    console.log(translations[0]);
    // const translations = JSON.parse(response.data);
    // console.log(translations);
  } catch (error) {
    console.error(error);
  }
}

translate();
