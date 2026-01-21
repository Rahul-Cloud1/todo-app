import { useState } from "react";

function ToDoItem({ todo, deleteTodo, toggleComplete, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const saveEdit = () => {
    editTodo(todo.id, text);
    setIsEditing(false);
  };

  return (
    <div className="todo-item">
      <div className="todo-left">
        {/* Mark Done */}
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />

        {isEditing ? (
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        ) : (
          <span className={`todo-text ${todo.completed ? "completed" : ""}`}>
            {todo.text}
          </span>
        )}

        {/* Status */}
        <span
          className={`status ${todo.completed ? "done" : "pending"}`}
        >
          {todo.completed ? "Done" : "Pending"}
        </span>
      </div>

      <div className="todo-actions">
        {isEditing ? (
          <button className="edit-btn" onClick={saveEdit}>
            Save
          </button>
        ) : (
          <button
            className="edit-btn"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        )}
        <button
          className="delete-btn"
          onClick={() => deleteTodo(todo.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;
