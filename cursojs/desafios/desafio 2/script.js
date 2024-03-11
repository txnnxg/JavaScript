function carregar() {
    let msg = window.document.getElementById('mensagem')
    let foto = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
            foto.src = 'imagens/foto-manha.jpg'
            document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
            foto.src = 'imagens/foto-tarde.jpeg'
            document.body.style.background = '#b9846f'

    } else {
            foto.src = 'imagens/foto-noite.jpg'
            document.body.style.background = '#515154'
    }
}