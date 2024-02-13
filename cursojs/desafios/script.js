function carregar() {
    var img = window.document.getElementById('imagem')
    var msg = window.document.getElementById('msg')
    var data = new Date()
    var hora = data.getHours()
    var minu = data.getMinutes()
   
     msg.innerHTML = `Agora são ${hora}:${minu}`
    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = 'imagem/manhã.jpg'
        document.body.style.background = '#F1BF66'
    }else if (hora >= 12 && hora < 18) {
        //Boa tarde
        img.src = 'imagem/tarde.jpg'
        document.body.style.background = '#F39B00'
    } else {
        //Boa noite
        img.src = 'imagem/noite.jpg'
        document.body.style.background = '#515190'
    }

}