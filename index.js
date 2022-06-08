require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());


const biblioteca = [
  {
    id: 1,
    nome: "Meditações de Marco Aurelio",
    imagem: "https://m.media-amazon.com/images/I/612B0id4gNL._AC_UL320_.jpg",
    resumo: "Estas são anotações pessoais do imperador romano Marco Aurélio escritas entre os anos de 170 a 180 Também conhecidas como Meditações a mim mesmo, reúnem aforismos que orientaram o governante pela perspectiva do estoicismo – o controle das emoções para que se evitem os erros de julgamento.",
  },
  {
    id: 2,
    nome: "48 leis do poder",
    imagem: "https://m.media-amazon.com/images/I/617iS--XOQL._AC_UL320_.jpg",
    resumo: "Edição definitiva em capa dura, com fitilho, do clássico sobre poder e liderança. “O homem que tenta ser bom o tempo todo está fadado à ruína entre os inúmeros outros que não são bons” - Nicolau Maquiavel Todos querem ter poder.",
  },
  {
    id: 3,
    nome: "12 regras para a vida",
    imagem: "https://m.media-amazon.com/images/I/51DSFiydE-L._AC_UL320_.jpg",
    resumo: "Aclamado psicólogo clínico, Jordan Peterson tem influenciado a compreensão moderna sobre a personalidade e, agora, se transformou em um dos pensadores públicos mais populares do mundo, com suas palestras sobre tópicos que variam da bíblia, às relações amorosas e à mitologia, atraindo dezenas de milhões de espectadores.",
  },
  {
    id: 4,
    nome: "O poder do hábito",
    imagem: "https://m.media-amazon.com/images/I/81XTXQEVPlL._AC_UL320_.jpg",
    resumo: "Durante os últimos dois anos, uma jovem transformou quase todos os aspectos de sua vida. Parou de fumar, correu uma maratona e foi promovida. Em um laboratório, neurologistas descobriram que os padrões dentro do cérebro dela mudaram de maneira fundamental.",
  },
  {
    id: 5,
    nome: "A Arte da guerra",
    imagem: "https://m.media-amazon.com/images/I/51Fe45NGwkL._AC_UL320_.jpg",
    resumo: "O que faz de um tratado militar, escrito por volta de 500 a.C., manter-se atual a ponto de ser publicado praticamente no mundo todo até os dias de hoje? Você verá que, em A arte da guerra, as estratégias transmitidas pelo general chinês Sun Tzu carregam um profundo conhecimento da natureza humana.",
  },
  {
    id: 6,
    nome: "Gatilhos Mentais",
    imagem: "https://m.media-amazon.com/images/I/713GIPU1lpL._AC_UL320_.jpg",
    resumo: "A Coroa de Ferro dos Gatilhos Mentais (e os 4 gatilhos que realmente importam na sua comunicação). A Joia da Coroa (e o principal motivo que o impede de realizar mais vendas). 18 Gatilhos Emocionais (e como você ativa as principais emoções no seu cliente para que ele compre).",
  },
  {
    id: 7,
    nome: "Os segredos da mente milionária",
    imagem: "https://m.media-amazon.com/images/I/81ZnJcgjCdL._AC_UL320_.jpg",
    resumo: "Se as suas finanças andam na corda bamba, talvez esteja na hora de você refletir sobre o que T. Harv Eker chama de o seu modelo de dinheiro – um conjunto de crenças que cada um de nós alimenta desde a infância e que molda o nosso destino financeiro, quase sempre nos levando para uma situação difícil.",
  },
  {
    id: 8,
    nome: "Mindset: A nova psicologia do sucesso",
    imagem: "https://m.media-amazon.com/images/I/71Ils+Co9fL._AC_UL320_.jpg",
    resumo: "Carol S. Dweck, ph.D., professora de psicologia na Universidade Stanford e especialista internacional em sucesso e motivação, desenvolveu, ao longo de décadas de pesquisa, um conceito fundamental: a atitude mental com que encaramos a vida, que ela chama de “mindset”, é crucial para o sucesso.",
  },
];


// ROTAS
//READ
app.get("/home", (req, res) => {
  res.render("index", {biblioteca});
});

app.get("/cadastro", (req, res) => {
  res.render("cadastro", {biblioteca});
});

app.get("/detalhes/:id", (req, res) => {
  const id = +req.params.id;
  livro = biblioteca.find((livro) => livro.id === id);
  res.render("detalhes", {livro});
});

//CREATE
app.post("/create", (req, res) => {
  const livro = req.body;
  livro.id = biblioteca.length + 1;
  biblioteca.push(livro);
  res.redirect("/home");
});

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));