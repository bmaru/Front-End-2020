/**
 * Arquivo: server.js
 * Descrição: Arquivo de configuração responsável por inicializar o serviço da noss aplicação utilizando o módulo Express
 * Data: 12/09/2020
 * Autor: Bianca
 */

 //Base de configuração da nossa aplicação

 //Chamada de pacotes que serão utilizados pela aplicação
 var express = require('express'); //Chamada do pacote express
 var app = express(); //Criação da aplicação apppelo express
 var bodyParser = require('body-parser'); //Chamada do pacote body-parser

 //Configuração da variável app para utilizar o pacote body-parser, permitindo que os dados sejam retornados a partir do verbo POST
 app.use(bodyParser.urlencoded({extended: true}));
 app.use(bodyParser.json());

 //Importação do módulo mongoose
 var mongoose = require('mongoose');

 //Configuração da conexão com o MongoDB instalado localmente
 //const uri = 'mongodb://localhost:27017/api_restful';

 //Configuração da conexão com o MongoDB no serviço cloud MongoDB Atlas
 const uri = 'mongodb+srv://bianca:b051298@cluster0.mhfwt.mongodb.net/api_restful?retryWrites=true&w=majority';

 //Validação da configuração de conexão com o MongoDB
 mongoose.connect(uri, {
     useNewUrlParser: true,
     useUnifiedTopology: true
 })
    .then(() => {
        console.log('A conexão com o MongoDB foi realizada com sucesso!')
    })
    .catch(err => console.log(err))

    //Importação do arquivo de modelo que irá representar a coleção 'user'
    var Usuario = require('./models/user')

    //Definir a porta de utilização do servidor da aplicação
    var port = process.env. PORT || 4000;

    //Rotas da nossa aplicação

    //Definir a variável router para utilizar as instâncias das rotas do express
    var router = express.Router();
    
    //Definição do middleware para acessar as solicitações enviadas à API
    //Enviar mensagem padrão
router.use(function (req, res, next) {
    console.log("Acesso ao nosso middleware.");
    next(); //Indica a chamada para a próxima rota.
});

//Rota padrão para verificação do funcionamento da aplicação 
//Deve ser acessada por: GET http://localhost:4000/api
router.get('/', function (req, res) {
    res.json({ message: "Olá mundo! Esta é a nossa API."});
});

//TODO - Definição das demais rotas da aplicação
// Rota						            Verbos HTTP				Descrição
// /api/usuarios					    GET					    Retornar a listagem de usuários.
// /api/usuarios					    POST					Cadastrar um usuário.
// /api/usuarios/:usuario_id			GET					    Listar as informações de um único usuário.
// /api/usuarios/:usuario_id			PUT					    Atualizar as informações de um único usuário.
// /api/usuarios/:usuario_id			DELETE					Deleter um usuário específico.

//Rotas que irão terminar com '/usuarios' (rotas para os verbos GET e POST)
router.route('/usuarios')

//1. Método POST: realizar o cadastro de um usuário
//Acesso: POST http://localhost:4000/api/usuarios
.post(function (req, res) {
    var usuario = new Usuario();
    //Definição dos campos que fazem parte da request

    usuario.nome = req.body.nome;
    usuario.login = req.body.login;
    usuario.senha = req.body.senha;

    usuario.save(function (error) {
        if(error)
        res.send(error)
        res.json({ message: 'Usuário cadastrado com sucesso!'});
    });
})

//2. Método GET: realizar a listagem de usuários cadastrados
//Acesso: GET http://localhost:4000/api/usuarios
.get(function(req, res) {
    //Função para selecionar todos os usuarios e verificar se há algum erro
    Usuario.find(function (error, usuarios) {
        if(error)
        res.send(error);
        res.json(usuarios);
    });
});

//Rotas terminadas em '/usuarios/:usuario_id' (rotas para os verbos GET, PUT e DELETE)
router.route('/usuarios/:usuario_id')

//3. Método GET: realizar a listagem de um usuário específico
//Acesso: GET http://localhost:4000/api/usuarios/:usuario_id
.get(function(req, res) {
    //Função para selecionar um usuário a partir do id informado e verificar se há algum erro
    Usuario.findById(req.params.usuario_id, function(error, usuario) {
        if(error)
        res.send(error);
        res.json(usuario);
    });
})

//4. Método PUT: realizar a atualização de um usuário específico
//Acesso: PUT http://localhost:4000/api/usuarios/:usuario_id
.put(function(req, res) {
    //Passo 1: Identificar o usuário pelo id para efetuar a atualização
    Usuario.findById(req.params.usuario_id, function(error, usuario) {
        if(error)
        res.send(error);
        //Passo 2: A solicitação irá enviar os dados para serem validados com os atributos declarados no modelo 'usuario'
        usuario.nome = req.body.nome;
        usuario.login = req.body.login;
        usuario.senha = req.body.senha;
        //Passo 3: Após atribuição dos campos presentes no 'formulário' para os atributos declarados no modelo, é necessário salvar os dados
        usuario.save(function(error) {
            if(error)
            res.send(error);
            res.json({message: 'Usuário atualizado com sucesso'});
        }); 
    });
})

//5. Método DELETE: realizar a deleção de um usuário específico
//Acesso: DELETE http://localhost:4000/api/usuarios/:usuario_id
.delete(function(req, res) {
    //Função para excluir o resgistro e verificar se ocorreu algum erro
    Usuario.remove({
        _id: req.params.usuario_id 
        }, function(error) {
            if(error)
            res.send(error);
            res.json({message: 'Usuário removido com sucesso!'})
    })
});

//Definição de uma rota com prefixo '/api/' para todas as demais rotas
app.use('/api', router);

//Inicialização do servidor da nossa aplicação
app.listen(port);
console.log('Iniciando nossa aplicação na porta ' + port);
