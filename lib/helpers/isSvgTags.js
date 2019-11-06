const tagList = require("./tagList.js");

module.exports = function isSvg(name) {
  return tagList.svgTags.indexOf(name) >= 0;
};
