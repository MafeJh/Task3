const smokeTestDataset = require("./google-cloud-computing-smoke.dataset.json");
const smokeDevDataset = require("./google-cloud-computing-dev.dataset.json");
const smokeProdDataset = require("./google-cloud-computing-prod.dataset.json");

function datasets(dataset) {
  const items = {
    smoke: smokeTestDataset,
    dev: smokeDevDataset,
    prod: smokeProdDataset,
  };
  return items[dataset];
}

module.exports = { datasets };
