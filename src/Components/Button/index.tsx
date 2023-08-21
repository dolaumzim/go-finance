import './styles.css'

interface InnerText{
    innerText : string
    disabled? : boolean
}

export const Button = ({innerText,disabled}: InnerText) => {

return(
    <button className="button" disabled={disabled}>
        {innerText}
    </button>
)
}