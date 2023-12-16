// Etapa 7: Filtrando os dados

// Seleleção de elemento
// 1. seleciona o searchInput eraseBtn filterBtn
const searchInput = document.querySelector('#search-input');
const eraseBtn = document.querySelector('#erase-btn');
const filterBtn = document.querySelector('#filter-btn');
const filterSelect = document.querySelector('#filter-select');
let oldInputValue

// Funções
// 3. criar uma função para filtrar os todos
const getSearchTodo = (searchValue) => {
  console.log(searchValue)
  // 3.1 capituro todos os todos
  const todos = document.querySelectorAll('.todo');
  todos.forEach((todo) => {

    // 3.2 pego o valor do h3 e transformo em minusculo para normalizar a busca
    const todoTitle = todo.querySelector('h3').innerText.toLowerCase();

    // 3.3 normalizo o valor do searchValue
    const normalizedSearchValue = searchValue.toLocaleLowerCase();

    // 3.6 adiciona o display flex como padrão, caso não entre no if
    todo.style.display = 'flex';

    // 3.4 se o valor do h3 incluir o valor do searchValue, removo a classe hide
    if(!todoTitle.includes(normalizedSearchValue)) {
      // 3.5 se o valor do h3 não incluir o valor do searchValue, adiciono a classe hide
      todo.style.display = 'none';
      // testa em tela
    }
  })
}


// 2. cria um evento de keyup no searchInput
searchInput.addEventListener('keyup', (e) => {
  const searchValue = e.target.value;
  // 2.1 mostrar o funcionamento no log
  // console.log(searchValue)

  // 3. criar uma função para filtrar os todos
  getSearchTodo(searchValue);
})

// 4. cria um evento de click no eraseBtn
eraseBtn.addEventListener('click', (e) => {
  // 4.1 previne o comportamento padrão do botão
  e.preventDefault();
  searchInput.value = '';
  // 4.2 mostra falhando na tela e precisa de um evento de keyup para funcionar
  // 4.3 cria um evento de keyup no eraseBtn 
  searchInput.dispatchEvent(new Event('keyup'));
});