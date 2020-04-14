// Requimiento y aplicación
const express = require('express')
const app = express()

// Middleware de directorio público
app.use(express.static('public'))

// Enrutados
app.get('/', (req, res) => res.sendFile(`${__dirname}/views/home-page.html`))
app.get('/cat', (req, res) => res.sendFile(`${__dirname}/views/cat-page.html`))

// Escucha
app.listen(3000, () => console.log("App escuchando en el puerto 3000! GO!"))