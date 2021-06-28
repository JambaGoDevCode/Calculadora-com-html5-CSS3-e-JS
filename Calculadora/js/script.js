
//Função para inserir os dados na tela da calculadora 
function insert(num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

//Função para limpar a tela de resutado
function clean(){
    document.getElementById('resultado').innerHTML = "";
}

//Função para apagar cada número/valor inserido 
function back(){
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1);
}


//Função para calcular o resultado de cada operação
 function calcular(){
     var resultado = document.getElementById('resultado').innerHTML;
     if(resultado){
         document.getElementById('resultado').innerHTML = eval(resultado);
     }
     else{
         document.getElementById('resultado').innerHTML = "Digite um valor...";
     }
 }
