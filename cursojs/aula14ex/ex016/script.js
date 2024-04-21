function contagem() {
    let ini = window.document.getElementById('ini')
    let fim = window.document.getElementById('fim')
    let pas = window.document.getElementById('pas')
    let res = window.document.getElementById('res')
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.lenght == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else if (ini.value.length > fim.value.length ) {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)
        for ( let c = i ; c >= f ; c -= p) {
            res.innerHTML += `${c} `
            }
    } 
        else {
        res.innerHTML = 'Contando: '
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(pas.value)
    for ( let c = i ; c <= f ; c += p) {
            res.innerHTML += `${c} `
            }
    } 
}