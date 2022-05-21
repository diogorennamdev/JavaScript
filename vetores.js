let num = [3, 5, 4, 1, 2]
num.sort() //colocar todos elementos em ordem crescente

num.push(6) // esse comando push acresentar mais um número ao vetor

console.log(`O vetor tem ${num.length} elementos.`) // o comando lenght conta quantos elementos tem o vetor
let pos = num.indexOf(9)// esse comando mostra exatamente a posição que o número está dentro do vetor
if(pos == -1){
  console.log(`O valor não existe nesse vetor`)
}else{
  console.log(`O valor 6 está na posição ${pos}`)
}
for (let pos in num) {
  console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}
