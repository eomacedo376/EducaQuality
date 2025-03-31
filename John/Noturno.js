// Verificar se o modo noturno está ativado no localStorage
if (localStorage.getItem('nightMode') === 'enabled') {
    document.body.classList.add('night-mode');
    document.getElementById('toggleButton').innerText = 'Desativar Modo Noturno';
}

// Função para alternar o modo noturno
function toggleNightMode() {
    if (document.body.classList.contains('night-mode')) {
        // Desativar o modo noturno
        document.body.classList.remove('night-mode');
        document.getElementById('toggleButton').innerText = 'Ativar Modo Noturno';
        localStorage.setItem('nightMode', 'disabled');
    } else {
        // Ativar o modo noturno
        document.body.classList.add('night-mode');
        document.getElementById('toggleButton').innerText = 'Desativar Modo Noturno';
        localStorage.setItem('nightMode', 'enabled');
    }
}

// Adicionar o evento de clique no botão
document.getElementById('toggleButton').addEventListener('click', toggleNightMode);