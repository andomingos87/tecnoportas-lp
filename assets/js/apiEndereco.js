document.getElementById('estado').addEventListener('change', function() {
    var uf = this.value;
    var url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/' + uf + '/municipios';

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Falha ao buscar cidades: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            var selectCidade = document.getElementById('cidade');
            selectCidade.innerHTML = ''; // Limpar cidades antigas

            // Supondo que 'data' é um array de objetos e cada 'cidade' tem uma propriedade 'nome'
            data.forEach(function(cidade) {
                var option = document.createElement('option');
                option.value = cidade.nome; // A propriedade deve ser em minúsculas, de acordo com a API do IBGE
                option.text = cidade.nome; // Mesma coisa aqui
                selectCidade.appendChild(option);
            });
        })
        .catch(error => {
            console.error('Erro ao buscar cidades:', error);
        });
});
