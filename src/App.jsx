import React, { useEffect } from "react";
import TodoList from "./components/common/TodoList";
import TodoForm from "./components/common/TodoForm";
import useTodo from "./hooks/useTodo";
import './App.scss';

function App() {
  const {
    list,
    editableTodo,
    onSubmitTodo,
    onEditTodo,
    onRemoveTodo,
    onToggleStatus,
  } = useTodo();

  useEffect(() => {
    document.title = 'Domashka28';
  }, []);

  return (
    <main className="app">
      <TodoForm
        editableTodo={editableTodo}
        onFormSubmitHandler={onSubmitTodo}
      />
      <TodoList
        todoList={list}
        onEditTodo={onEditTodo}
        onRemoveTodo={onRemoveTodo}
        onToggleStatus={onToggleStatus}
      />
    </main>
  );
}

export default App;
