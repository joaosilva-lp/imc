const calcular = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

function imc(){
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    const valorIMC = (peso / (altura * altura)).toFixed(2);
    console.log(`o imc é ${valorIMC}`);
    resultado.textContent = valorIMC;
};

calcular.addEventListener("click", imc);

