// Começa a edição do toDo capturando o valor antigo do h3 e atualizando o valor do h3 com o valor do input

// Seleleção de elemento
// 6. criar uma variavel global para guardar o valor do titulo antigo
let oldInputValue

// Funções
const toggleForms = () => {
  // 2. adiciona toggle com classList para esconder e mostrar o form o editForm todoForm e a todoList
  editForm.classList.toggle('hide');
  todoForm.classList.toggle('hide');
  todoList.classList.toggle('hide');
}

// Eventos
document.addEventListener('click', (e) => {
  const targetEl = e.target;
  const parentEl = targetEl.closest('div');
  // 4. criar uma váriavel para guardar o valor do h3
  let todoTitle

  // 5. adiciona uma condicional para saber se o elemento clicado tem um pai com h3
  if (parentEl && parentEl.querySelector('h3')) {
    // 5.1 se tiver um pai com h3, pega o valor do h3 e guarda na variável todoTitle
    todoTitle = parentEl.querySelector('h3').innerText;
    // 5.2 agora preciso guardar o valor do titulo antigo para poder utilizar no form de edição
  }
  
  if(targetEl.classList.contains('edit-todo')) {
    // 1. ciar uma função toogle forms para esconder o form de adicionar e mostrar o de editar
    toggleForms();

    // 7. muda o valor do input e mapeia o valor antigo na memória
      // 7.1 testa na tela a ediçao
    editInput.value = todoTitle;
    oldInputValue = todoTitle;
  }
})

// 3. adiciona aevento para cancelar a edição
cancelEditBtn.addEventListener('click', (e) => {
  e.preventDefault();
  // 4. chama a função toggleForms para esconder o form de edição e mostrar o de adicionar
  toggleForms();
});