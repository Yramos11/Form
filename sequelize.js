const Sequelize = require("sequelize")
const sequelize = new Sequelize("form", "root", "root", {

    host: "localhost",
    dialect: "mysql"
})

module.exports = {

    Sequelize: Sequelize,
    sequelize: sequelize
}