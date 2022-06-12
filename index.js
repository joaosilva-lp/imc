const calcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");
let info = '';

function imc(){
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    const valorIMC = (peso / (altura * altura)).toFixed(2);
    console.log(`o imc é ${valorIMC}`);
    

    if (valorIMC<18.5){
        info = 'you are in the underweight range.'
    } else if (valorIMC>=18.5 && valorIMC<25){
        info = 'you are in the healthy weight range.'
    } else if (valorIMC>=25 && valorIMC<30){
        info = 'you are in the overweight range.'
    } else if (valorIMC>=30 && imc<40){
        info = 'you are in the obese range.'
    }


    resultado.textContent = `Your body mass index is ${valorIMC} and ${info}`;
};

calcular.addEventListener("click", imc);

