function gerar() {
    let numero = document.getElementById('numero')
    let res = document.getElementById('res')
    if (numero.value.length == 0) {
        window.alert('Deu Erro')
    } else {
        let n = Number(numero.value)
        res.innerHTML = ''
        for (let c = 1; c <= 10; c++) {
            let r = n * c
            res.innerHTML += `${n} * ${c} = ${r} <br>`  
        }
    }
}