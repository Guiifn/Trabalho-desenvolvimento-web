const users = require('../data/users')

exports.getUsers = (req, res) => {
  res.json(users)
}

exports.createUser = (req, res) => {
  const { nome, email } = req.body

  if (!nome || !email) {
    return res.status(400).json({ message: 'Nome e email são obrigatórios' })
  }

  const newUser = {
    id: users.length + 1,
    nome,
    email
  }

  users.push(newUser)

  res.status(201).json(newUser)
}

exports.updateUser = (req, res) => {
  const id = parseInt(req.params.id)
  const { nome, email } = req.body

  const user = users.find(u => u.id === id)

  if (!user) {
    return res.status(404).json({ message: 'Usuário não encontrado' })
  }

  if (nome) {
    user.nome = nome
  }

  if (email) {
    user.email = email
  }

  res.json(user)
}

exports.deleteUser = (req, res) => {
  const id = parseInt(req.params.id)

  const index = users.findIndex(u => u.id === id)

  if (index === -1) {
    return res.status(404).json({ message: 'Usuário não encontrado' })
  }

  const userRemoved = users.splice(index, 1)

  res.json({
    message: 'Usuário removido com sucesso',
    user: userRemoved[0]
  })
}