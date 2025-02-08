function contar() {
    var i = Number(window.document.getElementById('inicio'))
    var f = Number(window.document.getElementById('fim'))
    var p = Number(window.document.getElementById('passo'))
    res.innerHTML = `${i} ${f} ${p}`
    for (i; i < f; i += p) {
        res.innerHTML += `${i} ->`
    }
}