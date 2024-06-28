document.getElementsByClassName("className");   
document.getElementByTagName("h1");
var x = document.document.getElementByTagName("div").lenght;
console.log(x)
compras.pust("arroz")
compras.pop()
compras.splice(2,0, "banana");
compras.splice(2,1);
var listacompras = ["leite", "pão", "queijo", "presunto"];
function preencherSelect(){
    var htmlfinal = "";
    var tamanholista = listacompras.lenght;
    
    for(var i = 0; i < tamanholista; i++){
        htmlfinal += "<option>" + listacompra[i] + "</option"
    }
    document.getElementById("meuSelect").innerHTML = htmlfinal
}                 

function divi(){
    var num1 = parseInt(document.getElementById("input1").value);
    var num2 = parseInt(document.getElementById("input2").value);
    document.getElementById("resultado").innerHTML = num1/num2  
}
function criarInputs(){
    var numInputs = parseInt(document.getElementById("numerosInputs").value);
    var htmlfinal = "";
    for(var i = 0; i < numInputs; i++){
        htmlfinal += "<input class='inputMedia'><br><br>"
    }
    document.getElementById("divInputs").innerHTML = htmlfinal
}
function calcularMedia(){
    var inputs = document.getElementsByName("inputMedia");
    var numerosInputs = inputs.length;
    var soma = 0;
    for(var i = 0; i < numerosInputs; i++){
        soma += parseInt(inputs[i].value);
    } 
    document.getElementById("mediaFinal").innerHTML = soma/numerosInputs;
}