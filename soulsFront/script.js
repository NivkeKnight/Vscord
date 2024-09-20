const divResultados = $("#resultados");

$("#pesquisar").click(pesquisarItem);

function pesquisarItem() {
    var nome = $("#inputItem").val();
    console.log("teste")
    $.get("http://localhost:4000/api/items?search=" + nome, popularLista);
}

function popularLista(data){
    console.log(data)

    divResultados.html('')

    data.forEach(item => {
        const resultado = document.createElement('div');
        resultado.classList.add('resultado');

        resultado.innerHTML = `
          <img src="${item.Image}" alt="${item.Name}" />
          <div>
            <h3>${item.Name}</h3>
            <p>${item.InGameDescription}</p>
          </div>
        `;

        divResultados.append(resultado);
    });
}