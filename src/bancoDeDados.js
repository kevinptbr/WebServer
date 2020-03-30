const sequence = {
    _id:1,
    get id(){
        return this._id++
    }
}
const produtos = {}

function salvarProduto(prod){
    if(!prod.id)        
        prod.id = sequence.id
    produtos[prod.id] = prod
    
    return prod
}

function getProduto(id){
    return produtos[id] || {}

}

function getProdutos(){
    return Object.values(produtos)
}

function deleteProd(id){
    console.log("estou aqui")
    let produto = produtos[id]
    delete produtos[id]
    return produto

    
}

module.exports = {salvarProduto, getProduto, getProdutos, deleteProd }