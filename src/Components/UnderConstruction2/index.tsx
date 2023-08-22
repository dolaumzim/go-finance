import { Link } from 'react-router-dom'
import './styles.css'

export const Construction2 = () => {

return(
    <section className='leftSideHome'>
            <div>
                <p className="titleHome">Desculpe o transtorno...</p>
                <p className="subtitleHome">Esta página ainda está em construção</p>
                <img src="src/assets/raccoon2.png" alt="" />
            </div>
            <Link className='homeButton' to="/"> Página Inicial </Link>
    </section>
)
}