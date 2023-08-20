import { Button } from '../Button'
import './styles.css'

export const LeftContainer = () => {

return(
    <section className='leftSide'>
        <div className='leftContainer'>
            <div>
                <p className="title">GoFinance</p>
                <p className="subtitle">O empréstimo ponto a ponto mais popular do mundo</p>
            </div>
            <Button innerText="Read More"/>
        </div>
    </section>
)

}