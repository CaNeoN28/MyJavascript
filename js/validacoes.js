function validaNome(nome){
    if (nome.length >= 3)
        return true
    
    return false
}

function validaGordura(gordura){
    if (gordura > 0 &&  gordura < 100)
        return true

    return false
}