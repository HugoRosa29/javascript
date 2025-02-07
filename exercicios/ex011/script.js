function media() {
    var nome = window.prompt('Qual o nome do aluno?')
    var n1 = Number(window.prompt(`Qual foi a primeira nota de ${nome}?`))
    var n2 = Number(window.prompt(`Qual foi a segunda nota de ${nome}?`))
    var media = (n1 + n2) / 2

    res.innerHTML = `
    <p>Calculando a média final de <mark>${nome}</mark>.</p>
    <p>As notas obtidas foram <mark>${n1} e ${n2}.</mark></p>
    <p>A média final será <mark>${media}.</mark></p>
    `
    if (media < 6) {
        res.innerHTML += `A mensagem que temos é: <strong><mark id="msg">Estude um pouco mais!</mark></strong>`
    } else {
        res.innerHTML += `A mensagem que temos é: <strong><mark id="msg">Meus parabéns!</mark></strong>`
    }
}