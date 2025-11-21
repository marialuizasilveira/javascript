let num = document.getElementById('fnum')
let lista = document.querySelector('#flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
} //vai verificar se o número está entre 1 e 100
} 

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
} // verifica se o número já está na lista


function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){ //se for um número entre 1 e 100 e não estiver na lista
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item) //adicionei o numero, criei um elemento option, criei um texto para ser visto na tela e adicionei o numero na lista 
        res.innerHTML = '' //limpa o resultado ao adicionar um novo número
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = '' //limpa o campo adicionando o numero ou nao
    num.focus() //deixa o foco no campo para digitar outro numero
}

function finalizar(){
    if (valores.length == 0){
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0] //inicializa o maior valor como o primeiro valor da lista
        let menor = valores[0] 
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos] //soma todos os valores da lista
            if (valores[pos] > maior)
                maior = valores[pos] //atualiza o maior valor se encontrar um valor maior
            if (valores[pos] < menor)
                menor = valores[pos]
        }

        media = soma / tot //calcula a média dos valores

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}.</p>`
        res.innerHTML += `<p>A média dos valores é ${media}.</p>`
    }
}