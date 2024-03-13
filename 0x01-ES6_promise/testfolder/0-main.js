import getResponseFromAPI from "./testfolder/0-promise.js";

const response = getResponseFromAPI();
console.log(response instanceof Promise);
