import { Row } from '../../components/contriant/row';

const getClass = (type) => {
  if (type === 'info') {
    return 'bg-yellow-300'
  } else if (type === 'success') {
    return 'bg-green-400'
  } else if (type === 'error') {
    return "bg-red-500"
  }
}

const getIcon = (type) => {
  if (type === 'info') {
    return 'info'
  } else if (type === 'success') {
    return 'verified_user'
  } else if (type === 'error') {
    return "report_problem"
  }
}

export function Alert ({ style, options, message, close }) {
  console.log(options.type, message)
  return (
    <Row style={style} flexCss={'w-64 h-12 m-4 pr-4 rounded-md justify-around items-center ' + getClass(options.type)} >
      <Row>
        <span className="material-icons">
          {getIcon(options.type)}
        </span>
        {message}
      </Row>
    </Row >
  )
}
