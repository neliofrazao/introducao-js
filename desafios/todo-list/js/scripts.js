// Seleleção de elemento
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');
const editForm = document.querySelector('#edit-form');
const editInput = document.querySelector('#edit-input');
const cancelEditBtn = document.querySelector('#cancel-edit-btn');
const searchInput = document.querySelector('#search-input');
const eraseBtn = document.querySelector('#erase-button');
const filterBtn = document.querySelector('#filter-select');

let oldInputValue

// Funções
const saveTodo = (todoValue) => {
  const todo = document.createElement('div');
  todo.classList.add('todo')
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
  todoList.appendChild(todo);
  todoInput.value = '';
  todoInput.focus();
}

const toggleForms = () => {
  editForm.classList.toggle('hide');
  todoForm.classList.toggle('hide');
  todoList.classList.toggle('hide');
}

const updateTodo = (todoValue) => {
  const todos = document.querySelectorAll('.todo');
  todos.forEach((todo) => {
    const todoTitle = todo.querySelector('h3');
    if(todoTitle.innerText === oldInputValue) {
      todoTitle.innerText = todoValue;
    }
  })
}

const getSearchTodo = (searchValue) => {
  console.log(searchValue)
  const todos = document.querySelectorAll('.todo');
  todos.forEach((todo) => {
    const todoTitle = todo.querySelector('h3').innerText.toLowerCase();
    const normalizedSearchValue = searchValue.toLocaleLowerCase();
    todo.style.display = 'flex';
    if(!todoTitle.includes(normalizedSearchValue)) {
      todo.style.display = 'none';
    }
  })
}

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
todoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const inputValue = todoInput.value;
  if (inputValue) {
    saveTodo(inputValue)
  }
});

document.addEventListener('click', (e) => {
  const targetEl = e.target;
  const parentEl = targetEl.closest('div');
  let todoTitle
    
  if (parentEl && parentEl.querySelector('h3')) {
    todoTitle = parentEl.querySelector('h3').innerText;
  }
  
  if(targetEl.classList.contains('finish-todo')) {    
    parentEl.classList.toggle('done');
  }

  if(targetEl.classList.contains('edit-todo')) {
    toggleForms();
    editInput.value = todoTitle;
    oldInputValue = todoTitle;
  }

  if(targetEl.classList.contains('remove-todo')) {
    parentEl.remove();
  } 
})

cancelEditBtn.addEventListener('click', (e) => {
  e.preventDefault();
  toggleForms();
});


editForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const editInputValue = editInput.value;
  
  if(editInputValue) {
    
    updateTodo(editInputValue)
  }
  toggleForms()
});


searchInput.addEventListener('keyup', (e) => {
  const searchValue = e.target.value;
  getSearchTodo(searchValue);
})

eraseBtn.addEventListener('click', (e) => {
  e.preventDefault();
  searchInput.value = '';
  searchInput.dispatchEvent(new Event('keyup'));
});

// 1. adiciona evento de change no filterSelect
filterBtn.addEventListener('change', (e) => {
  // 2. captura o valor do filterSelect
  const filterValue = e.target.value;
  // 2.1 mostra o valor do filterValue na tela
  // console.log(filterValue)
  // 3. cria uma função para filtrar os todos
  filterTodos(filterValue);

})