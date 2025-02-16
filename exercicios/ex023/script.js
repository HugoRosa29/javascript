function contar() {
    let res = document.getElementById('res')
    res.innerHTML += `<h2>Números pares de 1 até 10</h2>`
    for (let c = 2; c <= 10; c += 2) {
        res.innerHTML += `${c} &#x1F449;`
    }
    res.innerHTML += `&#x1F3C1;`
}