var http = require('http');
const express = require('express');
const app = express();

app.use(require('cors')());

app.get("/", (req, res, next) => {
    res.json({message: "Aplicação está sendo executada."});
})

//http://localhost:3001/estados
app.get('/estados', (req, res, next) => {
    console.log("Dados a serem exibidos:")
    const uf = [
        {id: 1, uf: 'SC'}, {id: 2, uf: 'SP'}, {id:3, uf:'MG'}
    ]
    res.json(uf);
});

var server = http.createServer(app);
server.listen(3001);
console.log("Servidor está executando na porta 3001.")