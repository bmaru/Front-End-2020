const express = require('express');
const app = express();

const handlebars = require('express-handlebars');

const bodyParser = require('body-parser');

const Cachorro = require("./models/Cachorro");


app.engine("handlebars", handlebars({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
        res.render("home");
});

app.get('/pacientes', function(req, res) {
    Cachorro.findAll({order: [["id", "ASC"]]})
    .then(function(cachorros) {
        res.render("pacientes", {cachorros: cachorros});
        console.log(cachorros);
    });
});

app.post("/add", function(req, res) {
    Cachorro.create({
        nome: req.body.nome,
        idade: req.body.idade,
        raca: req.body.raca,
        peso: req.body.peso,
        tutor: req.body.tutor,
        motivo: req.body.motivo,
    })
    .then(function() {
        res.redirect('/pacientes');
    })
    .catch(function(erro) {
        res.send("Erro ao inserir paciente!" + erro);
    })
});

app.get("/form", function(req, res) {
    res.render ("formulario"); 
});

app.get("/delet/:id", function(req, res) {
    Cachorro.destroy({where: {id: req.params.id}})
    .then(function() {
        res.redirect("/pacientes");
    })
    .catch(function(erro) {
        res.send("Erro ao excluir paciente!" + erro);
    }) 
});

app.get("/edit/:id", function (req, res) {
    Cachorro.findByPk(req.params.id)
        .then((cachorro) => {
            res.render("edit", {
            id: req.params.id,
            nome: cachorro.nome,
            idade: cachorro.idade,
            raca: cachorro.raca,
            peso: cachorro.peso,
            tutor: cachorro.tutor,
            motivo: cachorro.motivo,
            });
        })
        .catch((err) => {
            res.send("Postagem não encontrada!");
        });
});


app.post("/edition/:id", function (req, res) {
    Cachorro.update(
        {
        nome: req.body.nome,
        idade: req.body.idade,
        raca: req.body.raca,
        peso: req.body.peso,
        tutor: req.body.tutor,
        motivo: req.body.motivo,
        },
        {
            where: {id: req.params.id },
        }
    )
    .then(function() {
        res.redirect("/pacientes");
    })
    .catch(function(erro) {
        res.send("Erro ao editar paciente!" + erro);
    })
});

  

app.listen(5000, function(){
    console.log("Servidor está executando na porta 5000.")
});