function fatorial() {
    let num = Number(document.getElementById('fnum').value)
    let res = document.getElementById('res')
    let fat = 1
    res.innerHTML += `<h2>Calculando ${num}!</h2>`

    for(let c = num; c > 1; c--) {
        res.innerHTML += `${c} x `
        fat *= c
    }

    res.innerHTML += `1 = <strong>${fat.toLocaleString('pt-BR')}</strong>`
}