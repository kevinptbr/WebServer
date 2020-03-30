var options = {
    inflate: true,
    limit: '100kb',
    type: 'application/octet-stream'
  }

const porta = 3003
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
    res.status(200)
    res.send(banco.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = banco.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.status(404).send(produto)
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = banco.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.status(200).send(produto)
})

app.delete('/produtos/:id',(req,res,next) =>{
    
    res.send(banco.deleteProd(req.params.id))
}
)





app.listen(porta, () =>{
    console.log(`servidor esta executando na porta ${porta}`)
})
console.log("oie")