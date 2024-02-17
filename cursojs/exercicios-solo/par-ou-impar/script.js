function par() {
    let num = document.getElementById('txtn')
    let res = document.getElementById('res')
    if (num.value.length == 0) {
        window.alert('Digite um numero')
    } else{
        if (num %= 2 == 0) {
            res.innerHTML = `O numero é par`
        }
    }

}