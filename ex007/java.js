function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 5 && hora < 12){
        img.src = 'manha.png'
        document.body.style.background = '#fde55e'
    } else if (hora >= 12 && hora < 19) {
        img.src = 'tarde.png'
        document.body.style.background = '#fd9f26'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#1A3951'
    }
}