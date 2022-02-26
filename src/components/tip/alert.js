export function Alert ({ style, options, message, close }) {
  return (
    <div style={style}>
      {options.type === 'info' && '!'}
      {options.type === 'success' && ':)'}
      {options.type === 'error' && ':('}
      {message}
      <button onClick={close}>X</button>
    </div>
  )
}
