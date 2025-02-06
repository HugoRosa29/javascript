var idade = 22
console.log(`Você tem ${idade} anos.`)
if (idade < 16) {
    console.log(`Não Vota.`)
} else if (idade < 18 || idade > 65) {
    console.log('Seu Voto é Opcional.')
} else {
    console.log('Seu Voto é Obrigatório.')
}