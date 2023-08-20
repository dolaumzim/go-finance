import './styles.css'

interface InnerText{
    innerText : string
    disabled? : boolean
}

export const Button = ({innerText}: InnerText) => {

return(
    <button className="button">
        {innerText}
    </button>
)
}