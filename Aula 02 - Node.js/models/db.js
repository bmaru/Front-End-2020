const Sequelize = require("sequelize");
const sequelize = new Sequelize("blog", "root", "bianca", {
    host: "localhost",
    dialect: "mysql", 
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize,
};

