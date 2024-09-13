//API Application Programmin Interface
//Interface de Programação de Aplicações
$("#BotaoBuscarPersonagem").click(buscapersonagemaleatorio);
 
function buscapersonagemaleatorio(){
    console.log("teste")
    $.get("https://swapi.dev/api/people/1" , preenchercardpersonagem)
}
function preenchercardpersonagem(data){
    $("#personagemaleatorio").text(data.name)
    $("#NomePersonagem").text(data.name)
    $("#Altura").text(data.height)
    $("#Massa").text(data.mass)
    $("#CorCabeloPersonagem").text(data.hair_color)
    $("#CorOlhoPersonagem").text(data.eye_color)
    $("#AnoPersonagem").text(data.birth_year)
    $("#GêneroPersonagem").text(data.gender)
}
$("#BotaoBuscarfilme").click(BuscarFilmeporNomePersonagem)
function BuscarFilmeporNomePersonagem() {
    var nome = $("#BuscarFilmeporNomePersonagem").val();
    
    $.get ("https://swapi.dev/api/people/?search=" + nome, popularTabela)
}
function popularTabela(data) {
    $("#labelFilme").text(data.results[0].name);
    $("#TabelaFilmes").find("tr:gt(0)").remove();
    for (var i = 0; i < data.results[0].films.length; i++)
    {
        $.get(data.results[0].films[i], crialinha)
    }
}
function crialinha(data){
    console.log("a")
    var htmlFinal = 
        "<tr><td>" + data.title + "</td>"+
        "<td>" + data.episode_id + "</td>"+
        "<td>" + data.director + "</td> </tr>";
    $("#TabelaFilmes").append(htmlFinal)    

}