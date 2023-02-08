import './Checkbox.scss';

function Checkbox (props) {
  const {
    onCheckboxChange,
    checked,
  } = props;

  return(
    <input
      type="checkbox"
      className="checkbox"
      onChange={onCheckboxChange}
      checked={checked}
    />
  )
}

export default Checkbox;
