// Função para carregar todos os personagens ou buscar por nome
async function carregarPersonagens(nome = '') {
    try {
        // Se o nome for fornecido, busca o personagem pelo nome
        const url = nome ? `http://localhost:3000/characters/${nome}` : 'http://localhost:3000/characters';
        const resposta = await fetch(url);
        const personagens = await resposta.json();

        const listaDePersonagens = document.getElementById('lista-de-personagens');
        listaDePersonagens.innerHTML = ''; // Limpa a lista antes de preencher

        if (personagens.length === 0) {
            listaDePersonagens.innerHTML = '<li>Personagem não encontrado.</li>';
            return;
        }

        personagens.forEach(personagem => {
            const li = document.createElement('li');
            li.textContent = `${personagem.nome} - ${personagem.descricao}`;
            listaDePersonagens.appendChild(li);
        });
    } catch (erro) {
        console.error('Erro ao carregar personagens:', erro);
    }
}

// Função de pesquisa
function configurarPesquisaDePersonagens() {
    const botaoBusca = document.getElementById('search-button');
    const campoBusca = document.getElementById('search-input');

    botaoBusca.addEventListener('click', () => {
        const nomePersonagem = campoBusca.value.trim();
        carregarPersonagens(nomePersonagem); // Chama a função de busca com o nome fornecido
    });
}

// Quando o conteúdo da página for carregado, configurar a busca
document.addEventListener('DOMContentLoaded', () => {
    configurarPesquisaDePersonagens();
    carregarPersonagens(); // Carregar todos os personagens inicialmente
});
