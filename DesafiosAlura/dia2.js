
const nome = prompt('Qual seu nome:');


const idade = prompt('Qual sua idade?');

const programacao = prompt('Qual linguaguem de programação você utilizar?');

const msg = (`Olá ${nome} tudo bem? então você tem ${idade} aninhos, olha você tulizar a linguguem ${programacao} ameiii!`)
alert(msg);

const gosta = prompt(` Esta gostando de estudar ${programacao}? Responda com o número 1 para SIM ou 2 para NÃO.`)
if (gosta == 1) {
    alert('Muito bom! Continue estudando e você terá muito sucesso.')
}else{
    alert('Ahh que pena... Já tentou aprender outras linguagens?')
}