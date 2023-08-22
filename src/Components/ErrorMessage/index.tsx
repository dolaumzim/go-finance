import './styles.css'
import { ErrorMessageProps } from '../../assets/interfaces'

export type ErrorMessageType = string | false | undefined

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <span className='errorSpan'>{message}</span>
}

export default ErrorMessage
