function contar() {
    var inicio = window.document.getElementById('txtInicio')
    var fim = window.document.getElementById('txtFim')
    var passos = window.document.getElementById('txtPassos')
    var res = window.document.getElementById('res')
    if (inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0) {
        window.alert('Por favor preenchar todos os campos')
    } else {
        res.innerHTML = 'Contando.... <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passos.value)
    if (p <=0) {
        window.alert('Passo invalido!!! Passo passára a vale 1')
        p = 1
    }
    if (i < f) { //CONTAGEM CRESENTE
        for (var c = i; c <= f; c += p ) {
              res.innerHTML += `${c} \u{1F643}  `
       }
    } else {
        for (var c = i; c >= f; c -= p) { //CONTAGEM REGRESSIVA 
             res.innerHTML += `${c} \u{1F643}`
              }
    } 
       res.innerHTML += `${c} \u{1F3C1}`  
    }
}
