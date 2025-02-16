function contagem() {
    let n1 = Number(document.getElementById('fnum1').value)
    let n2 = Number(document.getElementById('fnum2').value)
    let res = document.getElementById('res')
    res.innerHTML += `<h2>Contagem de ${n1} até ${n2}</h2>`
    if (n1 < n2) {
        for (let c = n1; c <= n2; c ++) {
            res.innerHTML += `${c} &#x1F449;`
        }
        res.innerHTML += `&#x1F3C1;`
    } else {
        for (let c = n1; c >= n2; c --) {
            res.innerHTML += `${c} &#x1F449;`
        }
        res.innerHTML += `&#x1F3C1;`
    }
}