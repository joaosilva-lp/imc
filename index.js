const calcular = document.getElementById("calcular")
const resultado = document.getElementById("resultado");

function imc(){
    let info ='';
    const peso = document.getElementById("peso").value;
    const altura = document.getElementById("altura").value;
    const valorIMC = (peso / (altura * altura)).toFixed(2);
        

    if (valorIMC<18.5){
        info = 'you are in the underweight range.'
    } else if (valorIMC>=18.5 && valorIMC<25){
        info = 'you are in the healthy weight range.'
    } else if (valorIMC>=25 && valorIMC<30){
        info = 'you are in the overweight range.'
    } else if (valorIMC>=30 && valorIMC<35){
        info = 'you are in the obese range.'
    } else if (valorIMC>=35 && valorIMC<40){
        info = 'you are in the excessive obese range.'
    } else if (valorIMC>=40){
        info = 'you are in the morbid obese range.'
    } else{
        info= 'the value is not valid, please try another'
    }

    resultado.textContent = `Your body mass index is ${valorIMC} and ${info}`;
    console.log(resultado.textContent);
};

calcular.addEventListener("click", function(event){
    imc();
    event.preventDefault();
}
);
