import './App.css';
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import React, { useState } from 'react';

function App() {

 const [todos, setTodos] = useState([
    { sno: 1, title: "Go to the market", desc: "you need to go to the market" },
    { sno: 2, title: "Go to the mall", desc: "you need to go to the mall" },
    { sno: 3, title: "Go to the garden", desc: "you need to go to the garden" },
  ]);

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => e !== todo));
  };

  const addTodo = (title, desc) => {
    const sno = todos.length === 0 ? 1 : todos[todos.length - 1].sno + 1;
    setTodos([...todos, { sno, title, desc }]);
  };

  return (
    <>
      <Header title="MyTodosList" />
      <AddTodo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
