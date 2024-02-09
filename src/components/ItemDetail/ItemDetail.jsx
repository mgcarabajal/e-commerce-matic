import './ItemDetail.css'
import { useState } from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { useContext } from 'react'
import { useNotification } from '../../notification/NotificationService'

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
    const { addItem, getProductQuantity } = useCart()
    const { showNotification } = useNotification()


    const handleOnAdd = (quantity) => {
        const objProductToAdd = {
            id, name, price, quantity
        }
        addItem(objProductToAdd)
        showNotification('info', `Se agregaron correctamente ${quantity} ${name}`)
       
    }

    const productQuantity = getProductQuantity(id)
    return (
        <article>
            <header>
                <h2>
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} style={{ width: 100}}/>
            </picture>
            <section>
                <p>
                    Categoria: {category}
                </p>
                <p>
                    Descripción: {description}
                </p>
                <p>
                    Precio: {price}
                </p>
            </section>           
            <footer>
                <ItemCount onAdd={handleOnAdd} stock={stock} initial={productQuantity}/>
            </footer>
        </article>
    )
}
export default ItemDetail