import './input.css';

function getLabel (label) {
  if (label) {
    return label;
  } else {
    return "please set the label attribute"
  }
}

function getHelper (value, helper) {
  let result = "";
  if (helper.includes("notNull")) {
    result += value.length === 0 ? "空值不是合法值;" : "";
  } else {
    result += "please set the helper attribute"
  }
  return result;
}
export function Code (props) {
  return (
    <div className="omrs-input-group">
      <label className="omrs-input-underlined">
        <input type="text" required value={props.value} onChange={props.onChange} />
        <span className="omrs-input-label">{getLabel(props.label)}</span>
        <span className="omrs-input-helper">{getHelper(props.value, props.helperText)}</span>
        <span width="24" height="24" viewBox="0 0 24 24" className='svg' >{props.children}</span>
      </label>
    </div>
  )
}