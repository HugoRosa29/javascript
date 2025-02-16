function calcular() {
    let n1 = Number(window.prompt('Primeiro valor:'))
    let n2 = Number(window.prompt('Segundo valor:'))
    let op = Number(window.prompt(`Valores informados: ${n1} e ${n2}.
O que vamos fazer?
[1] Somar
[2] Subtrair
[3] Multiplicar
[4] Dividir
`))
    let res  = document.getElementById('res')
    res.innerHTML = `<h2>Calculando...</h2>`
    switch (op) {
        case 1:
            res.innerHTML += `${n1} + ${n2} = <strong>${n1 + n2}</strong>`
            break
        case 2:
            res.innerHTML += `${n1} - ${n2} = <strong>${n1 - n2}</strong>`
            break
        case 3:
            res.innerHTML += `${n1} x ${n2} = <strong>${n1 * n2}</strong>`
            break
        case 4:
            res.innerHTML += `${n1} : ${n2} = <strong>${(n1 / n2).toLocaleString('pt-BR')}</strong>`
            break
        default:
            res.innerHTML += `OPÇÃO INVÁLIDA! Você digitou ${n1} e ${n2}, mas não sei o que fazer com eles.`
    }
}