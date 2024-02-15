function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ``
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked) {
            genero = 'Homem'
        if (idade >=0 && idade < 10) {
            // Ciança
            img.setAttribute('src', 'criança-H.jpg')
        } else if (idade < 21) {
            // Jovem
            img.setAttribute('src', 'jovem-H.jpg')
        } else if (idade < 50) {
            // Adulto
            img.setAttribute('src', 'adulto-H.jpg')
        } else {
            // Idoso
            img.setAttribute('src', 'idoso-H.jpg')
        }
       } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                // Ciança
                img.setAttribute('src', 'criança-M.jpg')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'jovem-M.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adulto-M.jpg')
            } else {
                // Idoso
                img.setAttribute('src', 'idoso-M.jpg')
            }
       }
       res.style.textAlign = `center`
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img)
       img.style.borderRadius = `50% 50% 50% 50%`
       img.style.width = `320px`
       img.style.height = `320px`
       img.style.display = `block`
       img.style.margin = `auto`
       img.style.padding = `10px`
      // border-radius: 50% 50% 50% 50%;
      // width: 320px;
      // height: 320px;
      // display: block;
      // margin: auto;
      // padding: 10px; 
    }
    }
