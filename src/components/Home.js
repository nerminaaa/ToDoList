import React, { useState } from 'react';

function Home({ todos, setTodos, doneTodos, setDoneTodos }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [showDone, setShowDone] = useState(false);

  const handleAddTodo = () => {
    if (title.trim() && body.trim()) {
      const newTodo = {
        id: Date.now(),
        title,
        body,
        done: false
      };
      setTodos([...todos, newTodo]);
      setTitle('');
      setBody('');
    }
  };

  const handleToggleShowDone = () => {
    setShowDone(!showDone);
  };

  const handleClearDoneTasks = () => {
    setDoneTodos([]); // Clear the done tasks
  };

  return (
    <div>
      <h1>Home</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter task title"
      />
      <input
        type="text"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Enter task body"
      />
      <button onClick={handleAddTodo}>Add Todo</button>

      <h2>Done Tasks</h2>
      <button onClick={handleToggleShowDone}>
        {showDone ? 'Hide Done Tasks' : 'Show Done Tasks'}
      </button>
      <button onClick={handleClearDoneTasks}>Clear Done Tasks</button>

      {showDone && doneTodos.length > 0 ? (
        <ul>
          {doneTodos.map((todo) => (
            <li key={todo.id}>
              <strong>{todo.title}</strong>: {todo.body}
            </li>
          ))}
        </ul>
      ) : (
        showDone && <p>No tasks marked as done.</p>
      )}
    </div>
  );
}

export default Home;