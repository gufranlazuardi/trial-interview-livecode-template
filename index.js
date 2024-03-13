import fetch from "node-fetch";

const getData = async (url) => {
  try {
    const response = await fetch(url);
    const dataJson = await response.json();
    console.log(dataJson);
  } catch (error) {
    console.error("Failed to fetch data");
  }
};

const main = async () => {
  await getData("https://kobars.id/api/generate/array/string-and-number");
};

main();
