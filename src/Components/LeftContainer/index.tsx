import { Link } from 'react-router-dom'
import './styles.css'

export const LeftContainer = () => {

return(
    <section className='leftSide'>
        <div className='leftContainer'>
            <div>
                <p className="title">GoFinance</p>
                <p className="subtitle">O empréstimo ponto a ponto mais popular do mundo</p>
            </div>
            <Link className='readMoreButton' to="/construction"> Leia Mais </Link>
        </div>
    </section>
)

}