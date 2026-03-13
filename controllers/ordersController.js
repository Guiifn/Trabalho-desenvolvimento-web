// orders controller
const orders = require('../data/orders');

const getOrders = (req, res) => {
  res.json(orders);
};

module.exports = { getOrders };
