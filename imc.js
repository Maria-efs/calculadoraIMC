const calcular = document.getElementById('calcular'); //pegando os elementos

function imc () {
    const nome = document.getElementById('nome').value; //pegando os elementos
    const altura = document.getElementById('altura').value; //pegando os elementos 
    const peso = document.getElementById('peso').value; //pegando os elementos
    const resultado = document.getElementById('resultado'); //pegando os elementos
    
    if(nome !== '' && altura !== '' && peso !== ''){
        const valorIMC = (peso / (altura*altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5){
            classificacao = 'abaixo do peso.';
        }
        else if (valorIMC < 25){
            classificacao = 'com o peso ideal.';
        }
        else if (valorIMC < 30){
            classificacao = 'levemente acima do peso.';
        }
        else if (valorIMC < 35){
            classificacao = 'com obesidade grau I.';
        }
        else if (valorIMC < 40){
            classificacao = 'com obesidade grau II.';
        }
        else{
            classificacao = 'com obesidade grau III.';
        }


        resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}`; 
        //assento grave (`) permite incluir variaveis, e para chamar a variavel usa o ${}


    }
    else{
        resultado.textContent = 'Preencha todos os campos.';
    }
}

calcular.addEventListener('click', imc); //captura do click