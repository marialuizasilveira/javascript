function gerar(){
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')


    if (num.value.length == 0) { //caso o campo esteja vazio
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value) //converte o valor digitado em número e pego o valor escrito dentro do campo
        tab.innerHTML = '' //limpa a tabuada antes de gerar uma nova
        for (c=1; c<=10; c++){
            let item = document.createElement('option')
            item.innerHTML = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        } //tabuada de 1 a 10. Cria um elemento option para colocar tabuada que sera criada.
    }
}