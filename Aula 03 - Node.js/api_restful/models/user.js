/**
 * Arquivo: user.js
 * Descrição: Arquivo de configuração do modelo da aplicação, em que será definido o esquema para ser utilizado na base de dados do MongoDB
 * Autor: Bianca
 * Data: 12/09/2020
 */ 

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsuarioSchema = new Schema({
    nome: String,
    login: String,
    senha: String
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
