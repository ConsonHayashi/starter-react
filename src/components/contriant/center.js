function getFlex (flexCss) {
  if (flexCss) {
    return `flex flex-row w-full ${flexCss}`;
  } else {
    return `flex flex-row justify-center items-center w-full h-full`;
  }
}

export function Center (props) {
  return (
    <div className={getFlex(props.flexCss)}>
      <div className="text-center">
        {props.children}
      </div>
    </div>
  )
}