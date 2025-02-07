function mvalor() {
    n1 = window.prompt('Digite um número: ')
    n2 = window.prompt('Digite outro número: ')
    if (n1 > n2) {
        res.innerHTML = `Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, o maior valor é <strong>${n1}</strong>`
    } else {
        res.innerHTML = `Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, o maior valor é <strong>${n2}</strong>`
    }
}