// Nosso programa em js

    // cria um array para armazenar as tarefas
    let tarefas = [];

function adicionarTarefa() {    
    // Recebe a informação da tarefa a ser adicionada
    const inputTarefa = document.getElementById("inputTarefa");
    let tarefa = inputTarefa.value.trim()

    const mensagem = document.getElementById("mensagem");
    
    // estruturas condicionais (if else) e operadores relacionais
    // se o valor do input for vazio então mostre uma mensagem de erro para o usuario
    if (tarefa == "") {
        // mostre uma mensagem de erro
        let mensagemErro = "Digite uma terefa para adicioná-la a sua lista!";
        mensagem.textContent = mensagemErro;
        mensagem.style.color = '#A34743';
    } else {
        // Exime a mensagem de sucesso após a tarefa ser adicionada 
        let mensagemSucesso = "Tarefa adicionada com sucesso!";
        mensagem.textContent = mensagemSucesso;
        mensagem.style.color = '#28A745';
        tarefas.push(tarefa);
        renderizarTarefas();
    }       

    // por fim das adições, ele limpa o campo de input do que foi digitado anteriormente
    inputTarefa.value = "";
}

function renderizarTarefas() {
    // Função para renderizar as tarefas na tela
    // Esta função pode ser expandida para mostrar todas as tarefas armazenadas no array
    //cria novo item (li) e insere na (lista ul)
        const listaTarefas = document.getElementById("listaTarefas");
        listaTarefas.innerHTML = ""; // Limpa a lista antes de renderizar novamente
        
        // Loop através do array de tarefas e cria um item de lista para cada tarefa
        for (let i = 0; i < tarefas.length; i++) {
            let novaTarefa = document.createElement("li");
            novaTarefa.textContent = tarefas[i];

            let bortaoRemover = document.createElement("button"); 
            bortaoRemover.className = "botao-remover";
            bortaoRemover.textContent = "Remover";
            bortaoRemover.onclick = () => removerTerefa(i);

            let botaoEditar = document.createElement("button");
            botaoEditar.className = "botao-editar";
            botaoEditar.textContent = "Editar";
            botaoEditar.onclick = () => editarTarefa(i);

            novaTarefa.appendChild(bortaoRemover);
            novaTarefa.appendChild(botaoEditar);
            listaTarefas.appendChild(novaTarefa);
        }
}

function removerTerefa(i) { // função para remover a tarefa do array pelo índice
    tarefas.splice(i, 1); // Remove 1 item na posição i
    renderizarTarefas(); // Atualiza a exibição da lista
    const mensagem = document.getElementById("mensagem"); // Pega o elemento de mensagem
    mensagem.textContent = "Tarefa removida com sucesso!"; // Exibe mensagem de sucesso
    mensagem.style.color = '#28A745';
}

function editarTarefa(i) { // Função para editar uma tarefa existente
   let tarefaEditada= prompt("Edite sua tarefa:"); // Pede ao usuário para editar a tarefa abrindo um prompt
   if (tarefaEditada.trim() !== "") { // Verifica se o valor editado não está vazio
        tarefas[i] = tarefaEditada; // Atualiza a tarefa no array
        renderizarTarefas();
        const mensagem = document.getElementById("mensagem"); // Pega o elemento de mensagem
        mensagem.textContent = "Tarefa editada com sucesso!"; // Exibe mensagem de sucesso
        mensagem.style.color = '#28A745';
   }
}

function limparTarefas() { // Função para limpar todas as tarefas
    tarefas.length = 0; // Limpa o array de tarefas
    renderizarTarefas(); 
    const mensagem = document.getElementById("mensagem");
    mensagem.textContent = "Todas as tarefas foram limpas!"; 
    mensagem.style.color = '#28A745';
}    
// vermelho #A34743, VERDE #28A745