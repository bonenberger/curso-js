var idade = 18
if (idade <= 16) {
    console.log('não vota')
} else {
    if (idade >= 16 && idade < 18) {
        console.log('voto opcional')
    } else {
        console.log('voto obrigatório')
    }
}

var idade2 = 15
console.log(`a sua idade é ${idade2}`)
if (idade2 < 16) {
    console.log('não vota')
} else if (idade2 < 18 || idade2 > 65) {
    console.log('voto opcional')
} else {
    console.log('voto obrigatório')
}