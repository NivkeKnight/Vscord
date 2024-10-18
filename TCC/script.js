// Seleciona a div onde os resultados serão exibidos
const divResultados = $("#resultados");

// Associa a função de busca de itens ao botão com ID "pesquisar"
$("#pesquisar").click(pesquisarItem);

// Associa a função de busca de armas ao botão com ID "search"
$("#search").click(pesquisarArma);

// ========================== Função para Pesquisar Itens ==========================
function pesquisarItem() {
    // Captura o valor digitado no campo de busca de itens
    var nome = $("#ProcuraItem").val();

    // Faz uma requisição GET para a API local na rota de itens
    $.get("http://localhost:4000/api/items?search=" + nome)
        .done(data => {
            popularLista(data);  // Chama a função para exibir a lista de itens
            console.log(data);    // Exibe os dados no console para depuração
        })
        .fail(() => {
            // Exibe um alerta se a requisição falhar
            alert("Erro ao buscar itens. Tente novamente.");
        });
}

// ========================== Função para Pesquisar Armas ==========================
function pesquisarArma() {
    // Captura o valor digitado no campo de busca de armas
    var nome = $("#ProcuraArma").val();

    // Faz uma requisição GET para a API local na rota de armas
    $.get("http://localhost:8080/api/weapon/name?value=" + nome)
        .done(data => popularListaArma(data.Resultado))  // Exibe a lista de armas retornadas
        .fail(() => {
            // Exibe um alerta em caso de erro
            alert("Erro ao buscar armas. Tente novamente.");
        });
}

// ========================== Função para Exibir a Lista de Itens ==========================
function popularLista(data) {
    console.log(data);  // Exibe os dados no console para depuração
    divResultados.html('');  // Limpa os resultados anteriores

    // Verifica se não há resultados e exibe uma mensagem apropriada
    if (data.length === 0) {
        divResultados.append("<p>Nenhum resultado encontrado.</p>");
        return;
    }

    // Itera sobre cada item retornado pela API
    data.forEach(item => {
        const resultado = document.createElement('div');  // Cria um novo div para o item
        resultado.classList.add('resultado');  // Adiciona a classe CSS 'resultado'

        // Define o HTML do item, incluindo imagem, nome e descrição
        resultado.innerHTML = `
          <img src="${item.Image}" alt="${item.Name}" />
          <div>
            <h3>${item.Name}</h3>
            <p>${item.InGameDescription}</p>
          </div>
        `;

        // Adiciona o item à div de resultados
        divResultados.append(resultado);
    });
}

// ========================== Função para Exibir a Lista de Armas ==========================
function popularListaArma(data) {
    console.log(data);  // Exibe os dados no console para depuração
    divResultados.html('');  // Limpa os resultados anteriores

    // Verifica se não há resultados e exibe uma mensagem apropriada
    if (data.length === 0) {
        divResultados.append("<p>Nenhum resultado encontrado.</p>");
        return;
    }

    // Itera sobre cada arma retornada pela API
    data.forEach(item => {
        const resultado = document.createElement('div');  // Cria um novo div para a arma
        resultado.classList.add('resultado');  // Adiciona a classe CSS 'resultado'

        // Define o HTML da arma, incluindo seus atributos
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

        // Adiciona a arma à div de resultados
        divResultados.append(resultado);
    });
}
