export function Center (props) {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <div className="text-center">
        {props.children}
      </div>
    </div>
  )
}