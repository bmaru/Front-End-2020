var express = require('express');
var router = express.Router();
const request = require('request');
const soap = require('soap');

router.get('/consulta/:cep', function(req, res, next) {
  var cepRecebido = req.params.cep;
  var url = 'https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl';

    soap.createClient(url, function (err, client) {
      client.consultaCEP({cep: cepRecebido}, function(err, result) {
        if(err) return console.log(err);
        res.send(result)
      })
    })
});

module.exports = router;
