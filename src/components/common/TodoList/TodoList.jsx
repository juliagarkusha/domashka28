import TodoItem from "../TodoItem";
import "./TodoList.scss";

function TodoList (props) {
  const {
    todoList,
    onEditTodo,
    onRemoveTodo,
    onToggleStatus,
  } = props;

  return (
    <div className="todo__list">
      {todoList.map(todoItem => (
        <TodoItem
          key={todoItem.id}
          todo={todoItem}
          onEditTodo={onEditTodo}
          onRemoveTodo={onRemoveTodo}
          onToggleStatus={onToggleStatus}
        />
      ))}
    </div>
  )
}

export default TodoList;


