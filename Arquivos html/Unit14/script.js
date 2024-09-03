//API Application Programmin Interface
//Interface de Programação de Aplicações
$("BotãoBuscarPersonagem").click(buscapersonagemaleatorio);
 
function buscapersonagemaleatorio(){
    $.get("https://swapi.dev/api/people/1" , preenchercardpersonagem)
}
function preenchercardpersonagem(data){
    $("personagemaleatorio").text(data.name)
}
