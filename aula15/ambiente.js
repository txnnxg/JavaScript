let num = [5, 8, 9, 3, 7, 5]
num.push(1)
num.sort()
console.log(`Nosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(5)
if (pos == -1) {
    console.log(`O valor não foi encotrado`)
} else {
    console.log(`O valor está na posição ${pos}`)
}
