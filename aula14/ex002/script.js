function tabuada() {
    let txtnum = document.getElementById('txtnum')
    let tab = document.getElementById('seltab')

    if (txtnum.value.length == 0) {
        window.alert('DADO INVÁLIDO! Por favor digite um número!')
    } else {
        let num = Number(txtnum.value)
        let cont = 1
        tab.innerHTML = ''
        for (c = cont; c <= 10; c += 1) {
            let item = document.createElement('option')
            item.text =  `${num} x ${c} = ${num * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}