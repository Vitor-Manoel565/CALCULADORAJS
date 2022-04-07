

//escolhando primeiro numero


var n2 = prompt('Escolha um número:')
n2 = parseFloat(n2)
imprimi(n2)


function iniciaCalc(simbolo) {
    var n1 = document.querySelector('#output').textContent
    var n1 = prompt('Digite outro numero')
    n1 = parseFloat(n1)
    if(n1 === undefined || n2 === undefined){
        alert("Erro encontrado!")
        throw new Error('Erro:Você precisa definir um valora valido!');
    }

    if(isNaN(n1) || isNaN(n2)){
        alert("Erro encontrado!")
        throw new Error('Erro: Valor passado não permitido!')
    }
    var sms = calcular(simbolo,n1,n2)
    imprimi(sms)
}


function imprimi(mensg){
    var msg = document.querySelector('#output')
    msg.innerHTML = mensg
}

function calcular(simbolo, n1,n2) {
    var numCalc = null

    switch (simbolo) {
        case '+':
            numCalc = n1 + n2
            break;
        case '-':
            numCalc = n1 -n2
            break;
        case '*':
            numCalc = n1 * n2
            break;
        case '/':
            numCalc = n1 / n2
            break;
        default:
            break;
    }

    return numCalc
}

var f = document.querySelector('#output')
var mensg 

function END() {
    mensg = 'Finazilado com sucesso!!'
    f.innerHTML = mensg
}


/*
function somar(){
    var n2 = prompt('Escolha o segundo número:')
    n2 = parseFloat(n2)
    n1 = n1 + n2
    msg = n1
    imprimi.innerHTML = msg
}

function subtrair(){
    var n2 = prompt('Escolha o segundo número:')
    n2 = parseFloat(n2)
    n1 = n1 - n2
    msg = n1
    imprimi.innerHTML = msg
}

function multiplicar(){
    var n2 = prompt('Escolha o segundo número:')
    n2 = parseFloat(n2)
    n1 = n1 * n2
    msg = n1
    imprimi.innerHTML = msg
}

function dividir(){
    var n2 = prompt('Escolha o segundo número:')
    n2 = parseFloat(n2)
    n1 = n1 / n2
    msg = n1
    imprimi.innerHTML = msg
}

/*function limpar(){
    imprimi.innerHTML = ''
    n1 =  0
    msg = n1
    var n1 = prompt('Escolha um número:')
    n1 = parseFloat(n1)
}
*/