function contar(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('Erro')  //caso algum campo esteja vazio
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)  //value para pegar o valor digitado
        let f = Number(fim.value) //Number para converter string em número
        let p = Number(passo.value)

        if (p <= 0){ //caso o passo seja 0 ou menor considear passo como 1
            window.alert('Passo Inválido! Considerando PASSO como 1!')
            p = 1
        }
        if (i < f){
            for (let c = i; c <= f; c += p) {  //mostrar o contador maior pro menor
            res.innerHTML += `${c} \u{1f449}`
            }
        } else {
            for (let c = i; c>= f; c-= p){  //mostar o contador menor pro maior
               res.innerHTML += `${c} \u{1f449}`
            }
        } res.innerHTML += '\u{1f3c1}'
    }
}