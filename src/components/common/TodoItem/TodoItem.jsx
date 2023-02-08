import Button from "../../ui/Button";
import Checkbox from "../../ui/Fields/Checkbox";
import './TodoItem.scss';

function TodoItem (props) {
  const {
    todo,
    onEditTodo,
    onRemoveTodo,
    onToggleStatus,
  } = props;

  function onEditButtonClick () {
    onEditTodo(todo);
  }

  function onRemoveButtonClick () {
    onRemoveTodo(todo.id);
  }

  function onCheckboxChange () {
    onToggleStatus(todo);
  }

  return(
    <article className="todo__item">
      <Checkbox
        checked={todo.done}
        onCheckboxChange={onCheckboxChange}
      />
      <span
        className={todo.done ? 'todo__item--done' : ''}
      >
        {todo.title}
      </span>
      <Button
        text="Edit"
        isOutlined
        onButtonClick={onEditButtonClick}
      />
      <Button
        text="Remove"
        viewType="danger"
        isOutlined
        onButtonClick={onRemoveButtonClick}
      />
    </article>
  )
}

export default TodoItem;
