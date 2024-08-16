const db = require("./sequelize")

const usuarios = db.sequelize.define("usuarios", {

    nome: {

        type: db.Sequelize.STRING
    },

    email: {

        type: db.Sequelize.STRING
    }
})

// usuarios.sync({force: true})

module.exports = usuarios