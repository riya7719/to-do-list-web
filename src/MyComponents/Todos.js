import React from 'react';
import { TodoItem } from "./TodoItem";

export const Todos = ({ todos, onDelete }) => {
  return (
    <div className="container">
      <h3 className="my-3">Todos List</h3>

      {todos.length === 0
        ? "No Todos to display"
        : todos.map((todo) => (
            <TodoItem
              todo={todo}
              key={todo.sno}
              onDelete={onDelete}
            />
          ))
      }
    </div>
  );
};
