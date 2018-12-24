var todos = ['item 1', 'item 2', 'item 3'];

// fungsi menampilkan todo
function displayTodos() {
	console.log('My todos:', todos);
}

// menambahkan fungsi todo
function addTodos(todo) {
	todos.push(todo);
	displayTodos();
}

// menambahkan fungsi mengubah todo
function changeTodo(position, newValue) {
	todos[position] = newValue;
	displayTodos();
}

// menambahkan fungsi hapus todo
function deleteTodo(position) {
	todos.splice(position, 1);
	displayTodos();
}

addTodos('Some Stuff');
addTodos('Another Stuff');
changeTodo(1, 'Ampun Bos');
changeTodo(0, 'Changed Again');
deleteTodo(3);
