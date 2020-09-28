var http = require('http');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(require("cors")());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const registros = [];

app.get('/', (req, res, next) => {
    res.json({message: 'Dados recebidos: ', dados: registros});
});

app.post('/cadastro', (req, res, next) => {
    registros.push({
        nome: req.body.txtNome,
        cpf: req.body.txtCPF,
        uf: req.body.cmbUF
    });
    res.json({message: "Registro recebido com sucesso!", dados: registros});
    console.log('Registro recebido com sucesso!')
    console.log(dados);
})

var server = http.createServer(app);
server.listen(3002);
console.log("Servidor está executando na porta 3002.")