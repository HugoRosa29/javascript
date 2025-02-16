let res = document.getElementById('res')
let num = 0
let usu = 0

function sortear() {
    let min = 1
    let max = 100
    let dif = max - min
    let ale = Math.random()
    num = min + Math.trunc(dif * ale)
}

function jogo() {
    usu = window.prompt('Qual é o seu palpite?')

    if (num == usu) {
        res.innerHTML += `<p><strong>PARABÉNS!</strong> Você acertou! Eu tinha sorteado o valor ${num}!</p>`
        document.getElementById('bt').style.visibility = 'hidden'
    } else if (num < usu) {
        res.innerHTML += `<p>Você falou ${usu}. Meu número é <strong>MENOR!</strong></p>`
    } else if(num > usu) {
        res.innerHTML += `<p>Você falou ${usu}. Meu número é <strong>MAIOR!</strong></p>`
    }
}