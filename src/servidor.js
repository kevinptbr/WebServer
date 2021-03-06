var options = {
    inflate: true,
    limit: '100kb',
    type: 'application/octet-stream'
  }

const porta =  process.env.PORT || 8080
const express = require("express")
app = express()
const banco = require("./bancoDeDados")
const parser = require("body-parser")


app.use(parser.urlencoded())
app.use(parser.raw(options))
app.use(parser.json())

app.get('/produtos', (req, res, next) => {
    res.send(banco.getProdutos())
})
app.get('/produto/:id', (req, res, next) => {
    res.send(banco.getProduto(req.params.id))
})

app.get('/teste', (req, res, next) => {
    res.send({"coe": "jn"})
})

app.post('/produtos', (req, res, next) => {
    const produto = banco.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})





app.listen(porta, () =>{
    console.log(`servidor esta executando na porta ${porta}`)
})
console.log("oie")
