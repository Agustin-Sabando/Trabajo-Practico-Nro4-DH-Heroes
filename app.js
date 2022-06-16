const express = require('express')
const path = require('path')
const app = express()
const port = 3030

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, 'DH-Heroes', 'views', 'index.html')))
app.get('/turing', (req, res) => res.sendFile(path.resolve(__dirname, 'DH-Heroes', 'views', 'turing.html')))
app.get('/lovelace', (req, res) => res.sendFile(path.resolve(__dirname, 'DH-Heroes', 'views', 'lovelace.html')))
app.get('/hopper', (req, res) => res.sendFile(path.resolve(__dirname, 'DH-Heroes', 'views', 'hopper.html')))
app.get('/hamilton', (req, res) => res.sendFile(path.resolve(__dirname, 'DH-Heroes', 'views', 'hamilton.html')))
app.get('/clarke', (req, res) => res.sendFile(path.resolve(__dirname, 'DH-Heroes', 'views', 'clarke.html')))
app.get('/berners-lee', (req, res) => res.sendFile(path.resolve(__dirname, 'DH-Heroes', 'views', 'berners-lee.html')))
app.get('/babbage', (req, res) => res.sendFile(path.resolve(__dirname, 'DH-Heroes', 'views', 'babbage.html')))

app.use(express.static(path.join(__dirname, '/DH-Heroes/public')))

app.listen(port, () => console.log(`Servidor abierto en http://localhost:${port}`))