//Manipulação de string
let primeiroNome = "Anna"
let ultimoNome = "Schettini"
let nomeCompleto = primeiroNome + " " + ultimoNome

console.log(nomeCompleto)

//Operação com Nunbers
let numero1 = 10
let numero2 = 20

let soma = numero1 + numero2
let subtracao = numero1 - numero2
let multiplicacao = numero1 * numero2
let divisao = numero1 / numero2

console.log(soma, subtracao, multiplicacao, divisao)

//Trabalho com Booleanos
let estaChovendo = true
if(estaChovendo){
    console.log("Está chovendo!")
}else{
    console.log("Não está chovendo")
}

//Uso de Null e Undefined
let resposta = null
let nota

console.log(resposta, nota)

//Utilizando Symbol
let idUnico = Symbol()

let produto = {
    [idUnico]: 1234
}
console.log(produto[idUnico])

//Trabalhando com BigInt
let grandeInteiro = BigInt("21345798456798340985403905490349380809808")
let numero = 21345798456798340985403905490349380809808
let numero3 = grandeInteiro
console.log(grandeInteiro)
console.log(numero)
console.log(numero3)