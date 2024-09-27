const divResultados = $("#resultados");

$("#pesquisar").click(pesquisarItem);

// Função para pesquisar item
function pesquisarItem(nome) {
    $.get("http://localhost:4000/api/items?search=" + nome)
        .done(data => {popularLista(data)
          console.log(data)
        })
        .fail(() => {
            alert("Erro ao buscar itens. Tente novamente.");
        });
}

// Função para pesquisar arma
function pesquisarArma(nome) {
    $.get("http://localhost:4000/api/weapons?search=" + nome)
        .done(data => popularLista(data))
        .fail(() => {
            alert("Erro ao buscar armas. Tente novamente.");
        });
}

// Função comum para exibir os resultados de itens ou armas
function popularLista(data) {
    console.log(data);
    divResultados.html('');  // Limpa a div de resultados

    if (data.length === 0) {
        divResultados.append("<p>Nenhum resultado encontrado.</p>");
        return;
    }

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
