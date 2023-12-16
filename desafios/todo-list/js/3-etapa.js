// Cria um template para salvar o todo na tela
// Funções
const saveTodo = (todoValue) => {
  const todo = document.createElement('div');
  todo.classList.add('todo');
  // 1. aplica o inner html no todo
  todo.innerHTML = `
    <h3>${todoValue}</h3>
    <button class="finish-todo">
      <i class="fa-solid fa-check"></i>
    </button>
    <button class="edit-todo">
      <i class="fa-solid fa-pen"></i>
    </button>
    <button class="remove-todo">
      <i class="fa-solid fa-xmark"></i>
    </button>
  `;
  // 2. faz o append do todo na lista
  todoList.appendChild(todo);
  // 3. limpar o valor do input
  todoInput.value = '';
  // 4. focar no todoInput quando der submit
  todoInput.focus();
  // 5. Agora vamos começar a trabalhar no clicks dos botoes, adicionar, excluir e editar
}

