function carregar() {
    var res = window.prompt('Digite o Nome!')
    var nome = window.document.getElementById('nome')
    nome.innerHTML = `Seja bem vindo ${res}`
}