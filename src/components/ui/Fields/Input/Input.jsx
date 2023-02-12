import "./Input.scss";

function Input (props) {
  const {
    name,
    value,
    onChange,
    type = "text",
    placeholder = "",
    labelText,
    className,
  } = props;

  return(
    <div className={`field ${className}`}>
      <label className="field__label" htmlFor={name}>{labelText}</label>
      <input
        id={name}
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        className="field__input"
        onChange={onChange}
      />
    </div>
  )
}

export default Input;
