const coupons = require('../data/coupons')

exports.getCoupons = (req, res) => {
  res.json(coupons)
}

exports.createCoupon = (req, res) => {
  const coupon = {
    id: coupons.length + 1,
    codigo: req.body.codigo,
    desconto: req.body.desconto
  }

  coupons.push(coupon)

  res.json(coupon)
}