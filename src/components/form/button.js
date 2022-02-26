


export function Button (props) {
  return (
    <button className="bg-main-gold w-full h-10 text-sm" type='button' onClick={props.onClick} >
      {props.children}
    </button>
  )
}