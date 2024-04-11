// Importando o Express (CommonJS Modules)
const express = require("express")
// criando uma sessão
const session = require('express-session')

// Iniciando o express na variável app
const app = express()
// Configurar a sessão
app.use(session
    ({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: true,
        cookie: { secure: false }
    }))
// Rotas de exemplo
app.get('/session', (req, res) => {
    // Criar ou recuperar a sessão
    const sess = req.session;
  
    // Definir um valor de sessão
    sess.views = (sess.views || 0) + 1;
  
    // Enviar uma resposta
    res.send(`Você visitou esta página ${sess.views} vezes.`);
  });

// Definindo o EJS para renderizar páginas HTML
app.set('view engine', 'ejs')

// Definindo a pasta "public" para uso de arquivos estáticos
app.use(express.static('public'))

// Criando a primeira rota (ROTA PRINCIPAL)
app.get("/", (req, res) => {
    // Criar ou recuperar a sessão
    const sess = req.session;
    // Definir um valor de sessão
    sess.views = (sess.views || 0) + 1;
    // Enviar uma resposta para a pagina renderizada
    res.render('index', {views: sess.views})
    // Será renderizada a página 'views\index.ejs'
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