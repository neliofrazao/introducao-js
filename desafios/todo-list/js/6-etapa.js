// Cria a função de submit do editar

// Eventos
// 1. adiciona evento de submit no editForm
editForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const editInputValue = editInput.value;
  // 2. cria condicional para saber se o valor nao está vazio
  if(editInputValue) {
    // atualiza o valor do h3
    // 3. cria a função para edição dos dados
    updateTodo(editInputValue)
  }

  toggleForms()
});