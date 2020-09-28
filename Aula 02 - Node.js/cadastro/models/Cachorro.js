const db = require("./db");

const Cachorro = db.sequelize.define("cachorro", {
    nome: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    idade: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    raca: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    peso: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    tutor: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    motivo: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
});

module.exports = Cachorro;


Cachorro.sync({ alter: true});