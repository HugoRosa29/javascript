function contagem() {
    let num = Number(document.getElementById('fnum').value)
    let res = document.getElementById('res')
    res.innerHTML += `<h2>Contando de 0 até ${num}</h2>`
    for (let c = 0; c <= num; c++) {
        res.innerHTML += `${c} &#x1F449;`
    }
    res.innerHTML += `&#x1F3C1;`
}