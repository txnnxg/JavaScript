function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[Erro]')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/foto-c-m.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/foto-j-m.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/foto-a-m.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/foto-v-m.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'imagens/foto-c-f.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/foto-j-f.jpg')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/foto-a-f.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/foto-v-f.jpg')
            }
        }
        res.style.textAlign = 'center'
        img.style.width = '100%'
        img.style.borderRadius = '20px'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}