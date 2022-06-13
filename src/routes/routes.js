const routes = require('express').Router();
const LivroController = require('../controllers/LivrosController');
const Livro = require('../models/Livros');

routes.get("/", LivroController.getAll);
routes.get("/signup", LivroController.signup);
routes.post("/create", LivroController.create);
routes.get("/getById/:id/:method", LivroController.getById);
routes.post("/update/:id", LivroController.update);
routes.get("/remove/:id", LivroController.remove);
routes.get("/detalhes/:id", LivroController.detalhes);

module.exports = routes;