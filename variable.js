let nome = prompt("Qual é o seu nome?")
let idade = prompt("Quantos anos você tem?")
let linguagemProgamacao = prompt("Qual linguagem você está aprendendo?")

console.log(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagemProgamacao}`)
let gostarLinguagem = prompt(`Você está gostando de estudar ${linguagemProgamacao}? 1 para SIM e 2 para NÃO.`)
if (gostarLinguagem == 1) {
    console.log("Muito bom! Continue estudando e você terá muito sucesso.")
} else if (gostarLinguagem == 2) {
    console.log(" Ahh que pena... Já tentou aprender outras linguagens?")
}
