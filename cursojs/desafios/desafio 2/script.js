function carregar() {
    let msg = window.document.getElementById('mensagem')
    let foto = window.document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora}`
    if (hora > 0 && hora <= 22) {
            foto.src = 'foto-manha.jpg'

    }
}