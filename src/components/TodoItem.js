import React, { useState } from 'react';

function TodoItem({ todo, onToggleDone, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const [editedBody, setEditedBody] = useState(todo.body);

  const handleSaveEdit = () => {
    // Check if the edited title or body is not empty before saving
    if (editedTitle.trim() && editedBody.trim()) {
      onEdit(todo.id, editedTitle, editedBody);
      setIsEditing(false); // Exit edit mode
    }
  };

  return (
    <li>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            placeholder="Edit title"
          />
          <input
            type="text"
            value={editedBody}
            onChange={(e) => setEditedBody(e.target.value)}
            placeholder="Edit body"
          />
          <button onClick={handleSaveEdit}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <strong>{todo.title}</strong>: {todo.body}
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
      <button onClick={() => onToggleDone(todo.id)}>Done</button>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;
