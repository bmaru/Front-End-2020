var http = require("http");

http.createServer(function(req, res) {
    console.log("Servidor está sendo executado.")
    res.end("Olá mundo!")
}).listen(3000);