function searchPage() {
    var searchTerm = document.getElementById('search-input').value;
    if (searchTerm) {
        var content = document.body.innerText;
        var regex = new RegExp(searchTerm, 'gi');
        var matches = content.match(regex);
        if (matches) {
            alert('Termo encontrado ' + matches.length + ' vezes.');
        } else {
            alert('Termo não encontrado.');
        }
    } else {
        alert('Digite um termo para pesquisar.');
    }
}


const header = document.getElementById('header');

// Função para exibir a barra de cabeçalho temporariamente
function showHeaderBar() {
    header.style.opacity = 1;
    setTimeout(() => {
        header.style.opacity = 0;
    }, 5000); // Exibe por 5 segundos (5000 milissegundos)
}

// Mapeia a rolagem do mouse para exibir a barra de cabeçalho
window.addEventListener('wheel', () => {
    showHeaderBar();
});

