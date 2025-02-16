function contar() {
    let res = document.getElementById('res')
    res.innerHTML += `<h2>Contando de 1 até 10</h2>`
    for (let cont = 1; cont <= 10; cont ++) {
        res.innerHTML += `${cont} &#x1F449;`
    }
    res.innerHTML += `&#x1F3C1;`
}