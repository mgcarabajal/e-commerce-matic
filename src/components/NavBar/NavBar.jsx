import './NavBar.css'
import CartWidget from "../cartWidget/CartWidget"
import { NavLink, Link } from 'react-router-dom'

const  NavBar = () => {
    return (
        <nav>
            <Link to={'/'}>
            <h3 className='logos'>Ecommerce Perfumes</h3>
            </Link>
            
        <div className="Categories">
            <NavLink to={`/category/novedad`} className={({ isActive}) => isActive ? 'ActiveOption': 'Option' }>Novedades</NavLink>
            <NavLink to={`/category/perfume`} className={({ isActive}) => isActive ? 'ActiveOption': 'Option' }>Perfumes</NavLink>
            <NavLink to={`/category/lenceria`} className={({ isActive}) => isActive ? 'ActiveOption': 'Option' }>Lencería</NavLink>
        </div>
        <CartWidget />
        </nav>
    )
}
export default NavBar