import CartWidget from "../cartWidget/CartWidget"

const  NavBar = () => {
    return (
        <nav>
            <h3>Ecommerce Perfumes</h3>
        <div>
            <button>Novedades</button>
            <button>Perfumes</button>
            <button>Lencería</button>
        </div>
        <CartWidget />
        </nav>
    )
}
export default NavBar