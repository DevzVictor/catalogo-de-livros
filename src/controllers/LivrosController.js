const res = require("express/lib/response");
const Livro = require("../models/Livros");

let message = "";
let type = "";

const getAll = async (req, res) => {
  try {
    
    setTimeout(() => {
      message = ""
      type = ""
    }, 1000);

    const biblioteca = await Livro.findAll({ order: [["id", "ASC"]] });
    res.render("index", {
      biblioteca,
      livroPut: null,
      livroDel: null,
      message,
      type,
    });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const signup = (req, res) => {
  try {
    res.render("signup", {message, type});
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const create = async (req, res) => {
  try {
    const livro = req.body;

    if (!livro.nome || !livro.resumo || !livro.imagem) {
      message = "Preencha todos os campos para cadastrar!";
      type = "danger";
      return res.redirect("/signup");
    }

    await Livro.create(livro);
    message = "Livro cadastrado com sucesso!";
    type = "success";
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const getById = async (req, res) => {
  try {
    const method = req.params.method;
    const biblioteca = await Livro.findAll({ order: [["id", "ASC"]] });
    const livro = await Livro.findByPk(req.params.id);

    if (method == "put") {
      res.render("index", {
        biblioteca,
        livroPut: livro,
        livroDel: null,
        message,
        type,
      });
    } else {
      res.render("index", {
        biblioteca,
        livroPut: null,
        livroDel: livro,
        message,
        type,
      });
    }
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const update = async (req, res) => {
  try {
    const livro = req.body;
    await Livro.update(livro, { where: { id: req.params.id } });
    message = "Livro atualizado com sucesso!";
    type = "success";
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const remove = async (req, res) => {
  try {
    await Livro.destroy({ where: { id: req.params.id } });
    message = "Livro removido com sucesso!";
    type = "success";
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

const detalhes = async (req, res) => {
  try {
    const biblioteca = await Livro.findAll();
    const livro = await Livro.findByPk(req.params.id);
    res.render("detalhes", { biblioteca, livro });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};

module.exports = {
  getAll,
  signup,
  create,
  getById,
  update,
  remove,
  detalhes,
};
