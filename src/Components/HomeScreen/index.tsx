import { Link } from 'react-router-dom'
import './styles.css'

export const HomeScreen = () => {

return(
    <section className='leftSideHome'>
            <div>
                <p className="titleHome">Bem Vindo</p>
                <p className="subtitleHome">{localStorage.getItem('Nome')}</p>
            </div>
            <Link className='homeButton' to="/"> Sair </Link>
    </section>
)
}