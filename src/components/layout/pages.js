export function Page (props) {
  return (
    <div className="w-screen h-screen overflow-y-auto">
      {props.children}
    </div>
  )
}