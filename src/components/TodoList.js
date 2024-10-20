import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, setTodos, setDoneTodos }) {
  const handleToggleDone = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    const doneTodo = todos.find((todo) => todo.id === id);

    if (doneTodo) {
      setDoneTodos((prevDone) => [...prevDone, { ...doneTodo, done: true }]);
      setTodos(updatedTodos);
    }
  };

  const handleEditTodo = (id, updatedTitle, updatedBody) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, title: updatedTitle, body: updatedBody } : todo
    ));
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleDone={handleToggleDone}
            onDelete={handleDeleteTodo}
            onEdit={handleEditTodo}
          />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;