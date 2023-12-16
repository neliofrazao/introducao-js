// Cria a função de salvar do todo


// Funções
const saveTodo = (todoValue) => {
  // 1. mostrar o template html na tela do que a gene vai criar
  // 2. criar a div que vai servir de base para o todo
  const todo = document.createElement('div');
  // 3. adicicionar a classe todo na div
  todo.classList.add('todo');
  // 4. criar o title do h3
  const todoTitle = document.createElement('h3');
  todoTitle.innerText = todoValue;
  // 5. Adiciona o h3 no todoList
  todo.appendChild(todoTitle);
  // 6. Loga o todo list para mostrar o que foi criado
  console.log(todo);
  // 7. explica que vai yer que fazer isso para todos os elementos
  // 8. mostrar como fazer com innerHtml

}

// Eventos
todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputValue = todoInput.value;
  if (inputValue) {
    // 1. criar uma função para salvar os valores do todo
    saveTodo(inputValue)
  }
});