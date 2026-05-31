const API = 'http://localhost:3001';

const formulario = document.getElementById('formulario');
const lista = document.getElementById('lista');

async function carregarTarefas() {
    const resposta = await fetch(`${API}/tarefas`);
    const tarefas = await resposta.json();

    lista.innerHTML = ''; // Limpa a tela antes de redesenhar

    tarefas.forEach(tarefa => {
        lista.innerHTML += `
            <div class="card">
                <strong>${tarefa.titulo}</strong>
                <p>${tarefa.descricao}</p>
                <button class="btn-delete" onclick="removerTarefa(${tarefa.id})">EXPULSAR (EXCLUIR)</button>
            </div>
        `;
    });
}

formulario.addEventListener('submit', async (e) => {
    e.preventDefault(); // Impede a página de recarregar

    const titulo = document.getElementById('titulo').value;
    const descricao = document.getElementById('descricao').value;

    await fetch(`${API}/tarefas`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ titulo, descricao })
    });

    formulario.reset(); // Limpa os campos de texto
    carregarTarefas();  // Atualiza a lista automaticamente
});

async function removerTarefa(id) {
    await fetch(`${API}/tarefas/${id}`, {
        method: 'DELETE'
    });
    carregarTarefas(); // Atualiza a lista automaticamente
}

// Executa assim que abre a página pela primeira vez
carregarTarefas();