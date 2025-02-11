function data() {
    let meses = new Array('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez')
    let semana = new Array ('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab')
    let agora = new Date()
    let dia = agora.getDate()
    let mes = agora.getMonth()
    let ano = agora.getFullYear()
    let diasem = agora.getUTCDay()
    let hora = agora.getHours() 
    let min = agora.getMinutes()
    let seg = agora.getSeconds()

    res.innerHTML = `
    <p>Dia: <mark>${dia}</mark></p>
    <p>Mês: <mark>${meses[mes]}</mark></p>
    <p>Ano: <mark>${ano}</mark></p>
    <p>Dia da semana: <mark>${semana[diasem]}</mark></p>
    <p>Hora: <mark>${hora}</mark></p>
    <p>Minutos: <mark>${min}</mark></p>
    <p>Segundos: <mark>${seg}</mark></p>
    `
}