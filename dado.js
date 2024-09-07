document.getElementById('pesquisar-btn').addEventListener('click', function() {
    // Oculta todos os resultados
    document.querySelectorAll('.item-resultado').forEach(item => {
        item.style.display = 'none';
    });

    // Obtém o valor da pesquisa
    let pesquisa = document.getElementById('pesquisar-input').value.toLowerCase();

    // Exibe o resultado correspondente
    if (pesquisa.includes('chiquititas')) {
        document.getElementById('chiquititas').style.display = 'block';
    } else if (pesquisa.includes('carrossel')) {
        document.getElementById('carrossel').style.display = 'block';
    } else if (pesquisa.includes('poliana')) {
        document.getElementById('poliana').style.display = 'block';
    } else if (pesquisa.includes('carinha de anjo')) {
        document.getElementById('carinha-de-anjo').style.display = 'block';
    } else if (pesquisa.includes('cúmplices de um resgate')) {
        document.getElementById('complices-de-um-resgate').style.display = 'block';
    } else if (pesquisa.includes('chocolate com pimenta')) {
        document.getElementById('chocolate-com-pimenta').style.display = 'block';
    }
});

  



