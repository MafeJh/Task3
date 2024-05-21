const HomePage = require("./homeGoogleCloud.page");

/**
 *
 * @param {*} page {'Home'}
 * @returns {HomePage}
 */
// 'pages' function receive a page argument to return the instance of HomePage
// HomePage has access to all the elements in the form (selector of those elements)
function pages(page) {
  const items = {
    home: new HomePage(),
  };
  return items[page.toLowerCase()];
}

module.exports = { HomePage, pages };
