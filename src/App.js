import { useState } from 'react';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

function App() {
	const [todos, setTodos] = useState([]);

	function addTodo(todo) {
		setTodos([...todos, todo]);
	}

	function deleteTodo(id) {
		const filtered = todos.filter((item) => item.id !== id);
		setTodos(filtered);
	}

	return (
		<div>
			<AddTodo addTodo={addTodo} />
			<TodoList todos={todos} deleteTodo={deleteTodo} />
		</div>
	);
}

export default App;
