import './checkbox.css';

export function Checkbox (props) {
  return (
    <div className='checkbox'>
      <input className="inp-cbx" id="cbx" type="checkbox" value={props.value} onChange={props.onChange} />
      <label className="cbx" htmlFor="cbx">
        <span><svg width="12px" height="10px" viewBox="0 0 12 10">
          <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
        </svg>
        </span>
        <span className='checkbox-label'>{props.children}</span>
      </label>
    </div >
  )
}