document.getElementById('meuFormulario').addEventListener('submit', function(e) {
    e.preventDefault();

    var data = {
        nomecompleto: document.getElementById('nomecompleto').value,
        email: document.getElementById('email').value,
        whatsapp: document.getElementById('whatsapp').value,
        tipolead: document.getElementById('tipolead').value,
        estado: document.getElementById('estado').value,
        cidade: document.getElementById('cidade').value,
        segmento: document.getElementById('segmento').value,
        produtointeresse: document.getElementById('produtointeresse').value
    };

    fetch('https://tecnoportasleads.com.br/version-test/api/1.1/wf/novo-lead', {
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
