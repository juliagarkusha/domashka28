import { useState, useEffect } from "react";
import TodoApi from "../api/TodoApi";
import todoApi from "../api/TodoApi";

function useTodo () {
  const [ list, setList ] = useState([]);
  const [ editableTodo, setEditableTodo ] = useState(null);

  useEffect(() => {
    TodoApi.getList().then(list => {
      setList(list);
    })
  }, [])

  function onSubmitTodo (todo) {
    if(todo.id) {
      const newList = list.map(item => item.id === todo.id ? todo : item);
      todoApi.update(todo.id, todo).then(() => {
        setList(newList);
        setEditableTodo(null);
      })
    } else {
      todoApi.create(todo).then(newTodo => {
        setList([
          ...list,
          newTodo,
        ])
      })
    }
  }

  function onEditTodo (todo) {
    setEditableTodo(todo);
  }

  function onRemoveTodo (id) {
    const newList = list.filter(item => item.id !== id);

    todoApi.delete(id).then(() => setList(newList));
  }

  function onToggleStatus (todo) {
    const newTodo = {...todo, done: !todo.done};
    const newList = list.map(item => item.id === todo.id ? newTodo : item);
    todoApi.update(todo.id, newTodo).then(() => setList(newList));
  }

  return {
    list,
    editableTodo,
    onSubmitTodo,
    onEditTodo,
    onRemoveTodo,
    onToggleStatus,
  }
}

export default useTodo;
