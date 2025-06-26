let todos = [];

// Function to add a new Todo
function addTodo() {
    const inputField = document.getElementById('todoInput');
    const newTodo = inputField.value.trim();
    if (newTodo !== '') {
        todos.push({ title: newTodo, complete: false });
        inputField.value = '';
        displayTodos();
    }
}

// Function to display Todos
function displayTodos() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
    
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${todo.title}</span>
            <button onclick="markComplete(${index})">Complete</button>
            <button onclick="deleteTodo(${index})">Delete</button>
        `;
        if (todo.complete) {
            li.classList.add('completed');
        }
        todoList.appendChild(li);
    });
}

// Function to mark a Todo as complete
function markComplete(index) {
    todos[index].complete = true;
    displayTodos();
}

// Function to delete a Todo
function deleteTodo(index) {
    todos.splice(index, 1);
    displayTodos();
}

// Event listener for adding a new Todo
document.getElementById('addTodo').addEventListener('click', addTodo);



// Initial display of Todos
displayTodos();