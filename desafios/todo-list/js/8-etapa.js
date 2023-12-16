// Filtro

// 3. criar uma função para filtrar os todos
const filterTodos = (filterValue) => {
  // 4.capituro todos os todos
  const todos = document.querySelectorAll('.todo');
  // 5. crio um switch case para filtrar os todos
  switch(filterValue) {
    case 'all':
      todos.forEach((todo) => {
        todo.style.display = 'flex';
      })
      break;
    case 'done':
      todos.forEach((todo) => {
        todo.classList.contains('done') ? todo.style.display = 'flex' : todo.style.display = 'none';
      })
    break;
    case 'todo':
      // podemos até criar uma função aqui para reaproveitar a lógica
      todos.forEach((todo) => {
        !todo.classList.contains('done') ? todo.style.display = 'flex' : todo.style.display = 'none';
      })
      break;

    default: 
      break
  }
  
  
};

// Eventos
// 1. adiciona evento de change no filterSelect
filterBtn.addEventListener('change', (e) => {
  // 2. captura o valor do filterSelect
  const filterValue = e.target.value;
  // 2.1 mostra o valor do filterValue na tela
  // console.log(filterValue)
  // 3. cria uma função para filtrar os todos
  filterTodos(filterValue);

})