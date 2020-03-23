let name = prompt("Olá! Por favor, insira seu nome:");
let chooseTheme;
document.getElementById('salutation').innerHTML = "Olá " + name + "!";

let startGame = prompt("Você deseja jogar?\n 1. Sim \n 2. Não");

if (startGame == 1) {
    chooseTheme = prompt("Qual matéria você deseja responder\n 1. Matemática\n 2. História");
} else {
    alert("Obrigado por participar!")
}

if (chooseTheme == 1) {

    mathQuestionOne = prompt("Quanto é 2+2?\n 1. 3\n 2. 4 \n 3. 5");
    if (mathQuestionOne == "2") {
        document.getElementById('one').innerHTML = "Resposta 1";
    } else {
        document.getElementById('four').innerHTML = "Resposta 1";
    }

    mathQuestionTwo = prompt("Qual o sinal da subtração?\n 1. +\n 2. * \n 3. -");
    if (mathQuestionTwo == "3") {
        document.getElementById('two').innerHTML = "Resposta 2";
    } else {
        document.getElementById('five').innerHTML = "Resposta 2";
    }

    mathQuestionThree = prompt("Quanto é 3*5?\n 1. 5\n 2. 15\n 3. 10");
    if (mathQuestionThree == "2") {
        document.getElementById('three').innerHTML = "Resposta 3";
    } else {
        document.getElementById('six').innerHTML = "Resposta 3";
    }

} else if (chooseTheme == 2) {

    historyQuestionOne = prompt("Qual o ano do descobrimento do Brasil?\n 1. 1.500\n 2. 1.600\n 3. 1.400");
    if (historyQuestionOne == "1") {
        document.getElementById('one').innerHTML = "Resposta 1";
    } else {
        document.getElementById('four').innerHTML = "Resposta 1";
    }

    historyQuestionTwo = prompt("Quantas Guerras Mundiais o mundo já sofreu?\n 1. 3\n 2. 1\n 3. 2");
    if (historyQuestionTwo == "3") {
        document.getElementById('two').innerHTML = "Resposta 2";
    } else {
        document.getElementById('five').innerHTML = "Resposta 2";
    }

    historyQuestionThree = prompt("Qual a melhor civilização da história?\n 1. Romana\n 2. Egípcia\n 3. Grega");
    if (historyQuestionThree == "2") {
        document.getElementById('three').innerHTML = "Resposta 3";
    } else {
        document.getElementById('six').innerHTML = "Resposta 3";
    }
} else {
    alert("Obrigado por participar!")
}
