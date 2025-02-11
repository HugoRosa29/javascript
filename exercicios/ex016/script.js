function idade() {
    let agora = new Date()
    let ano = Number(window.prompt('Em que ano você nasceu? '))
    let res = document.getElementById('res')
    let idade = (agora.getFullYear()) - ano
    res.innerHTML = `Quem nasceu em ${ano} vai completar <strong>${idade}</strong> anos em ${agora.getFullYear()}.`
}