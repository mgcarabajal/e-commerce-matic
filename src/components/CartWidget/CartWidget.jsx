import cart from './assets/cart.png'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'
const CartWidget = () => {
    const { totalQuantity } = useCart()
    return(
        <div>
             <Link to='/cart'><img className='cart' src={cart} alt="cart-widget" /></Link>
            {totalQuantity}
        </div>  
       
      
    
    )
}
export default CartWidget
