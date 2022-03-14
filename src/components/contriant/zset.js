

export function ZSet (props) {
  if (props.children.length > 10) throw Error("ZSet only support 10 elements.")
  let index = 0;
  return (
    <div className="relative w-full h-full" >
      {props.children.map(e => <div key={index} className={`absolute z-${index++ * 10}`}>{e}</div>)}
    </div >
  );
}