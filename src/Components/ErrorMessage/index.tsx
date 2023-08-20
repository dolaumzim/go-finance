import './styles.css'

export type ErrorMessageType = string | false | undefined

interface ErrorMessageProps {
  message: ErrorMessageType
}

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <span className='errorSpan'>{message}</span>
}

export default ErrorMessage
