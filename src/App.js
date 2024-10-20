import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import TodoList from './components/TodoList';
import "./App.css"
function App() {
  const [todos, setTodos] = useState([]);
  const [doneTodos, setDoneTodos] = useState([]);

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/todos">Todo List</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home todos={todos} setTodos={setTodos} doneTodos={doneTodos} setDoneTodos={setDoneTodos} />} />
          <Route path="/todos" element={<TodoList todos={todos} setTodos={setTodos} setDoneTodos={setDoneTodos} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;