const games = require('../data/games')

exports.getGames = (req, res) => {
  res.json(games)
}

exports.createGame = (req, res) => {
  const game = {
    id: games.length + 1,
    nome: req.body.nome
  }

  games.push(game)

  res.json(game)
}