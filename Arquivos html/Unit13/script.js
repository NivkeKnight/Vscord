//Jquerry é 1 biblioteca do javascript que permite simplificar a escrita    

//JavaScript - ID
document.getElementById("nomeID")
//JQuerry - ID
$("#nomeID")
//JavaScript - classe
document.getElementsByClassName("nomeClasse")
//Jquerry
$(".nomeclasse")
//Javascript - tag
document.getElementsByTagName("h1")
//Jquerry
$("h1")

//metodo construtor
 function people(_nome, _sobrenome, _idade){
        this.nome = _nome;
        this._sobrenome = _sobrenome;
        this._idade = _idade;
}
var aluno1 = new people("kaique", "rocha", 12)
var aluno1 = new people("kevin", "Vinicius", 15)
var aluno1 = new people("Pedro", "Galoroo", 12)

console.log(aluno1.nome)
console.log(aluno2.nome)
console.log(aluno3.nome)
function Item(nome,quantidade, preço){
    this.nome = nome;
    this.quantidade = quantidade;
    this.preço = preço;
}
var itens = []
function adicionarItem(){
    var nomeItemnovo = $("#nomeItem").val();
    var quantidadenovo = $("#quantidade").val();
    var preçonovo = $("#preço").val();
    var novoItem = new Item(nomeItemnovo, quantidadenovo, preçonovo)
    itens.push(novoItem)
    atualizaTabela(novoItem)
}
function atualizaTabela(item){
    var htmlFinal = "<tr>";
    htmlFinal += "td" + item.nome + "</td";
    htmlFinal += "td" + item.quantidade + "</td";
    htmlFinal += "td" + item.preço + "</td";
    htmlFinal += "</tr>";
}
function fecharcompra() {
    var htmlFinal = "voce comprou";
    var soma = 0;
    for(var i = 0; i < itens.length; i++){
        htmlFinal += itens[i].quantidade
    }
}
