let res = document.getElementById('res')

function sortear() {
    let min = 1
    let max = 100
    let dif = max - min
    let ale  = Math.random()
    let num = min + Math.trunc(dif * ale)

    res.innerHTML += `<p>Acabei de pensar no número <mark>${num}</mark>!</p>`
}

function limpar() {
    res.innerHTML = null
}