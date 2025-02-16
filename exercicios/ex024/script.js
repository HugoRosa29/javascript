function contar() {
    let res = document.getElementById('res')
    res.innerHTML += `<h2>Contagem Regressiva de 10 a 1</h2>`
    for (let c = 10; c >= 1; c -= 1) {
        res.innerHTML += `${c} &#x1F449;`
    }
    res.innerHTML += `&#x1F3C1;`
}