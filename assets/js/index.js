document.getElementById('meuFormulario').addEventListener('submit', function (e) {
    e.preventDefault();

    var data = {
        nomecompleto: document.getElementById('nomecompleto').value,
        email: document.getElementById('email').value,
        whatsapp: document.getElementById('whatsapp').value,
        cidade: document.getElementById('cidade').value,
        tipolead: document.getElementById('tipolead').value,
        estado: document.getElementById('estado').value,
        segmento: document.getElementById('segmento').value,
        produtointeresse: document.getElementById('produtointeresse').value,
        origem: 'LP Campanha Código'
    };

    var botao = document.getElementById('botao')

    var xhr = new XMLHttpRequest();
    xhr.open("POST", 'https://tecnoportasleads.com.br/api/1.1/wf/novo-lead', true);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log('Success:', xhr.responseText);
                botao.disabled = true
                setTimeout(function () {
                    window.location.href = "sucesso-campanha-code.html";
                }, 5000);
            } else {
                console.error('Error:', xhr.statusText);
            }
        }
    };

    xhr.send(JSON.stringify(data));
});
