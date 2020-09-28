const db = require("./db");

const Post = db.sequelize.define("post", {
    titulo: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    conteudo: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
});

module.exports = Post;

//Atualiza a estrutura da tabela
Post.sync({ alter: true});

//Recria toda a estrutura da tabela (exclui e cria uma nova tabela)
//Post.sync({ alter: true});

//Somente cria a estrutura da taela caso ela não exista
//Post.sync();