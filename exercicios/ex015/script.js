function data() {
    var agora = new Date()
    var dia = agora.getDay()
    var mes = agora.getMonth()
    var ano = agora.getFullYear()
    var diasem = agora.getUTCDay()
    var hora = agora.getHours() 
    var min = agora.getMinutes()
    var seg = agora.getSeconds()

    res.innerHTML = `
    <p>Dia: ${dia}</p>
    <p>Mês: ${mes}</p>
    <p>Ano: ${ano}</p>
    <p>Dia da semana: ${diasem}</p>
    <p>Hora: ${hora}</p>
    <p>Minutos: ${min}</p>
    <p>Segundos: ${seg}</p>
    `
}