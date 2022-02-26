import './input.css';

import { useState } from 'react';

import { useAlert } from 'react-alert';

import { getVerfication } from '../../requests/authV1';

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

export function Email (props) {
  const [flag, setFlag] = useState(true);
  const [counter, setCounter] = useState(60);
  const alert = useAlert()
  let count = 60;
  let interval;


  const sendEmailEvent = () => {
    setFlag(false);
    setCounter(60);
    interval = setInterval(ticks, 1000)
    getVerfication({ email: props.value }, window).then(res => {
      if (res.status != 200) {
        res.json().then(e => {
          if (e.content) { alert.error(e.content); }
          if (e.error) { alert.error(e.error) }
        })
      } else {
        res.json().then(e => {
          alert.success(e.content);
        })
      }
    })
  }


  const ticks = () => {

    setCounter(--count);
    if (count <= 0) {
      setFlag(true)
      clearInterval(interval)
    }
  }
  return (
    <div className="omrs-input-group">
      <label className="omrs-input-underlined">
        <input type="email" required value={props.value} onChange={props.onChange} />
        <span className="omrs-input-label">{getLabel(props.label)}</span>
        <span className="omrs-input-helper">{getHelper(props.value, props.helperText)}</span>
        <span width="24" height="24" viewBox="0 0 24 24" className='svg' >
          {
            flag ?
              <span className="material-icons" onClick={() => sendEmailEvent()}>
                forward_to_inbox
              </span>
              : counter
          }
        </span>
      </label>
    </div>
  )
}