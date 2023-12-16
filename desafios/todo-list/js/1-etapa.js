// Seleleção de elementos
// 1. Seleciona os elementos que serão manipulados
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');
const editForm = document.querySelector('#edit-form');
const editInput = document.querySelector('#edit-input');
const cancelEditBtn = document.querySelector('#cancel-edit-btn');

// Funções

// Eventos
// 2. Adiciona o eventos de sumbmit ao formulário
todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // 3. verifica se o form está funcionando
  console.log('enviou o formulário');
  // 4. captura o valor do input
  const inputValue = todoInput.value;
  // 5. verifica se o valor existe para não criar tarefa vazia
  if (inputValue) {
    // Salva o valor no todoList
    console.log(inputValue);
  }
});