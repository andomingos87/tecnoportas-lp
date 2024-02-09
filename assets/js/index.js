document.getElementById('meuFormulario').addEventListener('submit', function(e) {
    e.preventDefault();

    var data = {
        nomeCompleto: document.getElementById('nomecompleto').value, // Garanta que o ID está correto
        email: document.getElementById('email').value,
        whatsapp: document.getElementById('whatsapp').value,
        tipoLead: document.getElementById('tipolead').value, // Garanta que o ID está correto
        estado: document.getElementById('estado').value,
        cidade: document.getElementById('cidade').value, // Agora coleta o valor de um input de texto
        segmento: document.getElementById('segmento').value, // Garanta que o ID está correto
        produtoInteresse: document.getElementById('produtointeresse').value // Garanta que o ID está correto
    };

    fetch('https://tecnoportasleads.com.br/api/1.1/wf/novo-lead', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Tratar a resposta de sucesso aqui
    })
    .catch((error) => {
        console.error('Error:', error);
        // Tratar o erro aqui
    });
});
