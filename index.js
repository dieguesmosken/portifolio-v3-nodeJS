// Importando o Express (CommonJS Modules)
const express = require("express")
// Iniciando o express na variável app
const app = express()

// Definindo o EJS para renderizar páginas HTML
app.set('view engine', 'ejs')

// Definindo a pasta "public" para uso de arquivos estáticos
app.use(express.static('public'))

// Criando a primeira rota (ROTA PRINCIPAL)
app.get("/", (req, res) => {
    // Será renderizada a página 'views\index.ejs'
    res.render('index')
})
// ROTA PERFIL
app.get("/perfil", (req, res) => { 
    res.render('perfil')
})
// rota about
app.get("/about", (req, res) => {
    res.render('about')
})
// rota projects
app.get("/projects", (req, res) => {
    res.render('projects')
})
// Iniciando o servidor
app.listen(8080, function(erro){
    if (erro) {
        console.log("Ocorreu um erro!")
    } else {
        console.log("Servidor iniciado com sucesso!")
    }
})