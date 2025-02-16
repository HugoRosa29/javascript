function contar() {
    let res = document.getElementById('res')
    res.innerHTML += `<h2>Contando de 1 até 10, marcando os pares</h2>`
    for (let c = 1; c <= 10; c ++) {
        if (c % 2 == 0) {
            res.innerHTML += `<mark><strong>${c}</strong></mark> &#x1F449;`
        } else {
            res.innerHTML += `${c} &#x1F449;`
        }
    }
    res.innerHTML += `&#x1F3C1;` 
}