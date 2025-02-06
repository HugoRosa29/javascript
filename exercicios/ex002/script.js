function clicar() {
    var agora = new Date()
    var ano = agora.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = document.getElementById('resp')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/c-homem.jpg')
            } else if(idade < 21) {
                img.setAttribute('src', 'imagens/j-homem.jpg')
            } else if(idade < 50) {
                img.setAttribute('src', 'imagens/a-homem.jpg')
            } else {
                img.setAttribute('src', 'imagens/i-homem.jpg')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'imagens/c-mulher.jpg')
            } else if(idade < 21) {
                img.setAttribute('src', 'imagens/j-mulher.jpg')
            } else if(idade < 50) {
                img.setAttribute('src', 'imagens/a-mulher.jpg')
            } else {
                img.setAttribute('src', 'imagens/i-mulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}