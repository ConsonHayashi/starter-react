

function getFlex (flexCss) {
  if (flexCss) {
    return `flex flex-row w-full ${flexCss}`;
  } else {
    return `flex flex-row justify-center items-center w-full h-full`;
  }
}


export function Row (props) {
  return (
    <div className={getFlex(props.flexCss)}>
      {props.children}
    </div>
  )
}