
function getFlex (flexCss) {
  if (flexCss) {
    return `flex flex-col w-full h-full ${flexCss}`;
  } else {
    return `flex flex-col justify-center items-center w-full h-full`;
  }
}

export function Col (props) {
  return (
    <div className={getFlex(props.flexCss)}>
      {props.children}
    </div>
  )
}