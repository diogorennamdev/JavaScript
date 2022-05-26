let num = document.querySelector('input#txtnumber')
let list = document.querySelector('select#listnumber')
let res = document.querySelector('div#res')

let valores = []

function isnumber(n){
  if(Number(n) >= 1 && Number(n) <= 100){
    return true
  }else {
    return false 
  }
}
function inlist(n, l){
  if(l.indexOf(Number(n)) != -1){
    return true 
  }else{
    return false 
  }
}

function adicionar(){
  if(isnumber(num.value) && !inlist(num.value, valores)) {
    valores.push(Number(num.value))
    let intem = document.createElement('Option')
    intem.text = `valor ${num.value} adicionado`
    list.appendChild(intem)
    res.innerHTML = ''
  }else{
    window.alert('valor inválido ou já encontado na lista')
  }
  num.value = ''
  num.focus()
}

function Finalizar(){
  if(valores.length == 0){
    window.alert('Adicione valores antes de finalizar')
  }else{
    let total = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0 
    for(let pos in valores){
      soma += valores[pos]
      if(valores[pos] > maior)
        maior = valores[pos]
      if(valores[pos] < menor)
        menor = valores[pos]

    }
    media = soma / total 
    res.innerHTML = ''
    res.innerHTML += `<p> Ao todo, temos ${total} números cadastrados. </p> `
    res.innerHTML += `<p> O maior valor informado foi ${maior}. </p>`
    res.innerHTML += `<p> O menor valor informado foi ${menor}. </p>`
    res.innerHTML += `<p> Somando todos o valores temos ${soma}. </p>`
    res.innerHTML += `<P> A média dos números digitados foi de: ${media}. </p>`
  }
}