// prizes controller
const prizes = require('../data/prizes');

const getPrizes = (req, res) => {
  res.json(prizes);
};

module.exports = { getPrizes };
