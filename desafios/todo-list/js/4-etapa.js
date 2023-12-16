// Cria o finish-todo e o remove-todo

// 1. criar um evento de click no documento todo pois temos elementos que não existem no documento no momento da seleção
document.addEventListener('click', (e) => {
  // 2. capturar o elemento clicado para assim ter acesso aos seus dados
  const targetEl = e.target;
  console.log(e.target)
  // 6 pega o elemento pai do elemento clicado com parentElement
  const parentEl1 = targetEl.parentElement;
  // 7 pega o elemento pai do elemento clicado com closest
  const parentEl = targetEl.closest('div');
  console.log(parentEl)

  // 3. criar um if para verificar se o elemento clicado é o botão de finalizar a tarefa
  if(targetEl.classList.contains('finish-todo')) {
    console.log('finalizou a tarefa');
    // 8. mostra como funciona com add
    // parentEl.classList.add('done');
    // 8.1 mostra como funciona com toggle
    parentEl.classList.toggle('done');
  }
  // 4. criar um if para verificar se o elemento clicado é o botão de editar a tarefa
  if(targetEl.classList.contains('edit-todo')) {
    console.log('editou a tarefa');
  }
  // 5. criar um if para verificar se o elemento clicado é o botão de remover a tarefa
  if(targetEl.classList.contains('remove-todo')) {
    // 9. mostra como funciona com remove
    parentEl.remove();
    console.log('removeu a tarefa');
  } 
})