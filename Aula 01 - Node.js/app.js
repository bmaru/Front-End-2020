const express = require("express");
const app = express();

app.get("/home", function (req, res) {
    res.sendFile(__dirname + "/assets/home.html")
});

app.get("/clientes", function (req, res) {
    res.sendFile(__dirname + "/assets/clientes.html")
});

app.get("/fornecedores", function (req, res) {
    res.sendFile(__dirname + "/assets/fornecedores.html")
});

app.get("/funcionarios", function (req, res) {
    res.sendFile(__dirname + "/assets/funcionarios.html")
});

app.get("/veiculos", function (req, res) {
    res.sendFile(__dirname + "/assets/veiculos.html")
});

app.listen(3000, function() {
    console.log("Servidor na porta 3000");
})
