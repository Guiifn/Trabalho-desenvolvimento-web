const express = require('express')

const app = express()
const usersController = require('./controllers/usersController')
const gamesController = require('./controllers/gamesController')
const couponsController = require('./controllers/couponsController')
const ordersController = require('./controllers/ordersController')
app.use(express.json())

app.get('/users', usersController.getUsers)
app.post('/users', usersController.createUser)
app.put('/users/:id', usersController.updateUser)
app.delete('/users/:id', usersController.deleteUser)

app.get('/coupons', couponsController.getCoupons)
app.post('/coupons', couponsController.createCoupon)

app.get('/games', gamesController.getGames)
app.post('/games', gamesController.createGame)

app.get('/orders', ordersController.getOrders)
app.post('/orders', ordersController.createOrder)
app.put('/orders/:id', ordersController.updateOrder)
app.delete('/orders/:id', ordersController.deleteOrder)

app.listen(3000, () => {
  console.log('API rodando na porta 3000')
})