import {useState, useEffect, useDebugValue} from "react";
import Input from "../../ui/Fields/Input";
import "./TodoForm.scss";

function TodoForm (props) {
  const {
    editableTodo,
    onFormSubmitHandler,
  } = props;

  const [ inputValue, setInputValue ] = useState('');
//  console.log('debug editableTodo: ', editableTodo?.title);

  useEffect(() => {
    if(!editableTodo) {
      return;
    }
    setInputValue(editableTodo?.title);
  }, [editableTodo?.title])

  function onInputChange ({ target }) {
    setInputValue(target.value);
  }

  function onTodoFormSubmit (event) {
    event.preventDefault();

    if(!inputValue) {
      return;
    }

    onFormSubmitHandler({...editableTodo, title: inputValue});
    setInputValue('');
  }

  return(
    <form onSubmit={onTodoFormSubmit} className="todoForm">
      <Input
        name="title"
        value={inputValue}
        onChange={onInputChange}
        placeholder="Enter todo"
        labelText="Enter todo"
        className="todoForm__input"
      />
    </form>
  )
}

export default TodoForm;
