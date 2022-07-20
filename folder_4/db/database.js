const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("todo_db", "root", "dkajf849@kjfFDS43#l;adf2", {
    dialect: "mysql",
    host: "localhost",
});

module.exports = sequelize;
