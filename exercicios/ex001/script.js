function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var agora = new Date()
    var hora = agora.getHours()

    msg.innerHTML = `<p>Agora são ${hora} horas.</p>`
    if (hora >= 0 && hora < 6) {
        document.body.style.background = 'rgb(33, 28, 43)'
        img.src = 'imagens/madrugada.jpg'
    } else if (hora < 12) {
        document.body.style.background = 'wheat'
        img.src = 'imagens/manha.jpg'
    } else if (hora <= 18) {
        document.body.style.background = 'rgb(215, 163, 108)'
        img.src = 'imagens/tarde.jpg'
    } else {
        document.body.style.background = 'rgb(65, 65, 65)'
        img.src = 'imagens/noite.jpg'
    }
}

