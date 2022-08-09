const tech = prompt('Qual aréa da tecnologia você que seguir "backend" ou "front-end" ?');
let linguaguem = "";

if(tech == "frontend"){
    linguaguem = prompt('Legal! já sabe qual tecnolgia irá estudar? react ou vue');
 
}else if(tech == "backend"){
    linguaguem = prompt('Muito bem!!! quer aprender C# ou java?')
}else{
    alert('Você inseriu uma resposta inválida!!')
    
}

const especialidadefullstack = prompt('Digite 1 para continuar se especilizando na tecnologia escolhia ou 2 para se tornar fulllstack ')

if(especialidadefullstack == 1){
    alert(`continue se especializando no ${linguaguem} para dominar a área ${tech}`)
}else if(especialidadefullstack == 2){
    alert(`chegou a hora de aprender uma nova tech além de ${linguaguem} para se tornar um dev fullstcak`)
}else{
    alert('você não inseriu o valor válido')
}

let msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' caso positivo! ");

while(msg == 'ok'){
    let novatech = prompt('qual?');
    alert(`realmente estudar  ${novatech} irá gerar bastante conhecimento!"`);

    msg = prompt("Tem mais alguma tecnologia que gostaria de aprender? Digite 'ok' caso positivo");
}
