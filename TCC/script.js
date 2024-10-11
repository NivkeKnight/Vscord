const divResultados = $("#resultados");

$("#pesquisar").click(pesquisarItem);
$("#search").click(pesquisarArma);

// Função para pesquisar item
function pesquisarItem() {
    var nome = $("#ProcuraItem").val()
    $.get("http://localhost:4000/api/items?search=" + nome)
        .done(data => {popularLista(data)
          console.log(data)
        })
        .fail(() => {
            alert("Erro ao buscar itens. Tente novamente.");
        });
}

// Função para pesquisar arma
function pesquisarArma() {
    var nome = $("#ProcuraArma").val()
    $.get("http://localhost:8080/api/weapon/name?value=" + nome)
        .done(data => popularListaArma(data.Resultado))
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
// Função comum para exibir os resultados de itens ou armas
function popularListaArma(data) {
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
  <div class="resultado-item">
    <h3>${item.name}</h3>
    <p><strong>Ataque Físico:</strong> ${item.atk.physical}</p>
    <p><strong>Ataque Mágico:</strong> ${item.atk.magic}</p>
    <p><strong>Ataque de Fogo:</strong> ${item.atk.fire}</p>
    <p><strong>Ataque de Relâmpago:</strong> ${item.atk.lightning}</p>
    <p><strong>Bônus de Ataque:</strong> ${item.atk.bonus}</p>
  </div>
`;


        divResultados.append(resultado);
    });
}
