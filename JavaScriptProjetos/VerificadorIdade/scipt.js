function Verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = window.document.getElementById('txtAno')
    var res = window.document.getElementById('res')
        if(fAno.value.length == 0 || fAno.value > ano  ){
      window.alert('Verifique os dados e tente novamente!')
       }else{
    var fsex = document.getElementsByName('txtsex')    
    var idade = ano - Number(fAno.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id','foto')
      if(fsex[0].checked){
        gênero = 'homem'
      if(idade >= 0 && idade <10){
      //  Crianca
      img.setAttribute('src', 'beber Homem.jpg')
      }else if (idade < 21 ){
      //Jovem
      img.setAttribute('src', 'jovem Homem.jpg')
      }else if ( idade < 60 ){
      //Adulto
      img.setAttribute('src', 'Adulto homem.jpg')
      }else{
      //idoso 
      img.setAttribute('src', 'idoso.jpg')
      
      }
    }else if(fsex[1].checked){
        gênero = 'Mulher'
        if(idade >= 0 && idade <10){
            //  Crianca
            img.setAttribute('src', 'Beber Mulher.jpg')
            }else if (idade < 21 ){
            // jovem 
            img.setAttribute('src', 'jovem mulher.jpg')
            }else if ( idade < 60 ){
            //Adulto
            img.setAttribute('src', 'Adulto Mulher.jpg')
            }else{
            //idosa
            img.setAttribute('src', 'idosa.jpg')
            }
    }
    if(fsex[0].checked){
      res.innerHTML = `Detectamos um ${gênero} com ${idade} anos `
    }else {
     res.innerHTML = `Detectamos uma ${gênero} com ${idade} anos `
  }
    res.style.textAlign = 'center'
    res.appendChild(img)
     
    } 
  
}