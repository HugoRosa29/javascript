function tabuada() {
    let num = Number(document.getElementById('fnum').value)
    let res = document.getElementById('res')
    res.innerHTML = `<h2>Tabuada de ${num}</h2>`

    for (let c = 1; c <= 10; c++) {
        res.innerHTML += `<p>${num} x ${c} = <strong>${num * c}</strong></p>`
    }
}