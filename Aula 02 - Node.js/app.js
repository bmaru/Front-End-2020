const express = require('express');
const app = express();

const handlebars = require('express-handlebars');

const bodyParser = require('body-parser');

const Post = require("./models/Post");


app.engine("handlebars", handlebars({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function(req, res) {
    Post.findAll({order: [["id", "DESC"]]})
    .then(function(posts) {
        res.render("home", {posts: posts});
        console.log(posts);
    });
    
    //res.send('Página Inicial');
});

app.post("/add", function(req, res) {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo,
    })
    .then(function() {
        //res.send("Postagem criada!");
        res.redirect('/');
    })
    .catch(function(erro) {
        res.send("Erro ao inserir postagem!" + erro);
    })
    //res.send("Título: " + req.body.titulo + " Conteúdo: " + req.body.conteudo);
});

app.get("/form", function(req, res) {
    res.render ("formulario"); 
});

app.get("/delet/:id", function(req, res) {
    Post.destroy({where: {id: req.params.id}})
    .then(function() {
        //res.send("Postagem excluída com sucesso!");
        res.redirect("/");
    })
    .catch(function(erro) {
        res.send("Erro ao excluir postagem!" + erro);
    }) 
});

app.listen(3000, function(){
    console.log("Servidor está executando na porta 3000.")
});