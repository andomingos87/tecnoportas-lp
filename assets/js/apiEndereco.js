document.getElementById('estado').addEventListener('change', function() {
    var uf = this.value;
    fetch('http://enderecos.metheora.com/api/estado/' + uf + '/cidades')
        .then(response => response.json())
        .then(data => {
            var selectCidade = document.getElementById('cidade');
            selectCidade.innerHTML = ''; // Limpar cidades antigas

            // Supondo que 'data' é um array de objetos e cada 'cidade' tem uma propriedade 'nome'
            data.forEach(function(cidade) {
                var option = document.createElement('option');
                option.value = cidade.Nome; // Aqui você acessa a propriedade que contém o nome da cidade
                option.text = cidade.Nome; // Mesma coisa aqui
                option.classList.add('form__option')
                selectCidade.appendChild(option);
            });
        })
        .catch(error => console.error('Erro ao buscar cidades:', error));
});
