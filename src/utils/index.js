const smokeTestDataset = require("./google-cloud-computing-smoke.dataset.json");
const devDataset = require("./google-cloud-computing-dev.dataset.json");
const prodDataset = require("./google-cloud-computing-prod.dataset.json");

function datasets(dataset) {
  const items = {
    smoke: smokeTestDataset,
    dev: devDataset,
    prod: prodDataset,
  };
  return items[dataset];
}

module.exports = { datasets };
