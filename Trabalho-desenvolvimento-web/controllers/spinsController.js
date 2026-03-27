// spins controller
const spins = require('../data/spins');

const getSpins = (req, res) => {
  res.json(spins);
};

module.exports = { getSpins };
