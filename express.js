const express = require("express")
const app = express()
const handlebars = require("./handlebars")
const usuarios = require("./usuarios")

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.engine("handlebars", handlebars.engine({defaultLayout: "main"}))
app.set("view engine", "handlebars")
app.use(express.static("public"))

app.get("/", function(req, res){

    res.render("form")
})

app.post("/", function(req, res){

    usuarios.create({

        nome: req.body.nome,
        email: req.body.email
    }).then(function(){

        res.render("formEnviado")
    }).catch(function(erro){

        console.log("dados nao enviados " + erro)
    })
})

app.listen(8081, function(){

    console.log("servidor rodando na 8081")
})