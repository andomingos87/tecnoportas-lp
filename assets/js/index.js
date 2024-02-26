document.getElementById('meuFormulario').addEventListener('submit', function (e) {
    e.preventDefault();

    var data = {
        nomecompleto: document.getElementById('nomecompleto').value, // Garanta que o ID está correto
        email: document.getElementById('email').value,
        whatsapp: document.getElementById('whatsapp').value,
        cidade: document.getElementById('cidade').value,
        tipolead: document.getElementById('tipolead').value, // Garanta que o ID está correto
        estado: document.getElementById('estado').value,
        segmento: document.getElementById('segmento').value, // Garanta que o ID está correto
        produtointeresse: document.getElementById('produtointeresse').value // Garanta que o ID está correto
    };

    // Url da API em produção
    fetch('https://tecnoportasleads.com.br/api/1.1/wf/novo-lead', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // Se necessário, adicione o cabeçalho de autorização aqui
        },
        body: JSON.stringify(data)
    })

        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok: ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            // Tratar a resposta de sucesso aqui
            this.reset()
            window.location.href = "obrigado.html"
        })
        .catch((error) => {
            console.error('Error:', error);
            // Tratar o erro aqui
        });

});