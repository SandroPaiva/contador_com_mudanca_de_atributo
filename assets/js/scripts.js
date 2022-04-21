var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = 0;

var currentNumberWrapper2 = document.getElementById('currentNumber2');
var currentNumber2 = 0;


function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber >= 10){
        document.getElementById('adicionar').setAttribute('disabled',''); //Se o valor de currentNumber for maior que 10, desabilita o botão "+" 
    } else{
        document.getElementById('subtrair').removeAttribute('disabled',''); //Se o valor de currentNumber for maior que 0, reabilita o botão "-" se este estiver inativo. 
    }
    
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
    if (currentNumber <= 0){
        document.getElementById('subtrair').setAttribute('disabled',''); //Se o valor de currentNumber for menor que 0, desabilita o botão "-" 
    }else{
        document.getElementById('adicionar').removeAttribute('disabled',''); //Se o valor de currentNumber for menor que 10, reabilita o botão "+" se este estiver inativo. 
    }
}


function increment2(){
    currentNumber2 = currentNumber2 + 1;
    currentNumberWrapper2.innerHTML = currentNumber2;
    if (currentNumber2 >= 10){
        document.getElementById('currentNumber2').setAttribute('style','color: blue; font-weight: bolder;'); //Se o valor de currentNumber for maior que 10, desabilita o botão "+" 
    } else{
        document.getElementById('currentNumber2').removeAttribute('style','color: red; font-weight: bolder;'); //Se o valor de currentNumber for maior que 0, reabilita o botão "-" se este estiver inativo. 
    }
    
}

function decrement2(){
    currentNumber2 = currentNumber2 - 1;
    currentNumberWrapper2.innerHTML = currentNumber2;
    if (currentNumber2 <= 0){
        document.getElementById('currentNumber2').setAttribute('style','color: red; font-weight: bolder;'); //Se o valor de currentNumber for menor que 0, desabilita o botão "-" 
    }else{
        document.getElementById('currentNumber2').removeAttribute('style','color: blue; font-weight: bolder;'); //Se o valor de currentNumber for menor que 10, reabilita o botão "+" se este estiver inativo. 
    }
}