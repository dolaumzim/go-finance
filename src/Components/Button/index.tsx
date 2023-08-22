import './styles.css'
import { InnerText } from '../../assets/interfaces'

export const Button = ({innerText,disabled}: InnerText) => {

return(
    <button className="button" disabled={disabled}>
        {innerText}
    </button>
)
}