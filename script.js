// Simular login e mostrar a tela principal
function handleLogin(event) {
    event.preventDefault();
    
    // Aqui você pode capturar o nome do professor real, se necessário
    var nomeProfessor = "João"; // Substitua por uma lógica real de captura do nome

    // Armazenar o nome no elemento
    document.getElementById('professor-nome').innerText = `Bem-vindo, ${nomeProfessor}!`;

    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('main-screen').style.display = 'block';
    openTab(event, 'listar-turmas'); // Abre a aba inicial
}


// Função para alternar entre as abas
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
}

// Função para cadastrar uma turma e adicionar à lista
function cadastrarTurma(event) {
    event.preventDefault();
    var nome = document.getElementById('nome-turma').value;
    var ano = document.getElementById('ano-turma').value;

    if (nome && ano) {
        var tbody = document.getElementById('turmas-lista');
        var row = document.createElement('tr');
        row.innerHTML = `<td>${nome}</td><td>${ano}</td><td><span class="delete-btn" onclick="excluirTurma(this)">Excluir</span></td>`;
        tbody.appendChild(row);

        // Limpar os campos após o cadastro
        document.getElementById('nome-turma').value = '';
        document.getElementById('ano-turma').value = '';
    }

    openTab(event, 'listar-turmas');
}

// Função para excluir uma turma
function excluirTurma(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

// Função para formatar a data
function formatarData(data) {
    const [ano, mes, dia] = data.split('-');
    return `${dia}/${mes}/${ano}`; // Formato: dia/mês/ano
}

// Função para cadastrar uma atividade
function cadastrarAtividade(event) {
    event.preventDefault();
    var turma = document.getElementById('turma-atividade').value;
    var atividade = document.getElementById('nome-atividade').value;
    var dataInicio = formatarData(document.getElementById('data-inicio').value);
    var dataFinal = formatarData(document.getElementById('data-final').value);

    if (turma && atividade && dataInicio && dataFinal) {
        var tbody = document.getElementById('atividades-lista');
        var row = document.createElement('tr');

        // Adiciona um botão de excluir
        row.innerHTML = `
            <td>${turma}</td>
            <td>${atividade}</td>
            <td>${dataInicio}</td>
            <td>${dataFinal}</td>
            <td><button onclick="excluirAtividade(this)">Excluir</button></td>
        `;
        tbody.appendChild(row);

        // Limpar os campos após o cadastro
        document.getElementById('turma-atividade').value = '';
        document.getElementById('nome-atividade').value = '';
        document.getElementById('data-inicio').value = '';
        document.getElementById('data-final').value = '';
    }

    openTab(event, 'listar-atividades');
}

// Função para excluir uma atividade
function excluirAtividade(button) {
    // Remove a linha da tabela
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}




// Função de logout
function logout() {
    window.location.reload(); // Simula o logout recarregando a página
}
