const orders = require('../data/orders')

exports.getOrders = (req, res) => {
  res.json(orders)
}

exports.createOrder = (req, res) => {
  const { product, quantity } = req.body

  const newOrder = {
    id: orders.length + 1,
    product,
    quantity
  }

  orders.push(newOrder)

  res.status(201).json(newOrder)
}

exports.updateOrder = (req, res) => {
  const id = parseInt(req.params.id)

  const order = orders.find(o => o.id === id)

  if (!order) {
    return res.status(404).json({ message: "Pedido não encontrado" })
  }

  const { product, quantity } = req.body

  if (product) order.product = product
  if (quantity) order.quantity = quantity

  res.json(order)
}

exports.deleteOrder = (req, res) => {
  const id = parseInt(req.params.id)

  const index = orders.findIndex(o => o.id === id)

  if (index === -1) {
    return res.status(404).json({ message: "Pedido não encontrado" })
  }

  const removed = orders.splice(index, 1)

  res.json({
    message: "Pedido removido",
    order: removed[0]
  })
}