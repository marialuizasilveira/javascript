function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO!] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') 
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 10) {
                img.src = 'criança-h.png'
            } else if (idade < 21){
                img.src = 'adolescente-h.png'
            } else if (idade < 50){
                img.src = 'adulto-h.png'
            } else {
                img.src = 'idoso-h.png'
            }
        } else if (fsex[1].checked){
            gênero = 'Mulher'
            if (idade >=0 && idade < 10) {
                img.src = 'criança-m.png'
            } else if (idade < 21){
                img.src = 'adolescente-m.png'
            } else if (idade < 50){
                img.src = 'adulto-m.png'
            } else {
                img.src = 'idoso-m.png'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}