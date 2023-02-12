import "./Button.scss";

function Button (props) {
  const {
    text = "",
    type = "button",
    viewType = "primary",
    isOutlined = false,
    onButtonClick,
  } = props;

  return(
    <button
      type={type}
      className={`btn ${isOutlined ? "btn-outlined" : ""} btn-${viewType}`}
      onClick={onButtonClick}
    >
      {text}
    </button>
  )
}

export default Button;
