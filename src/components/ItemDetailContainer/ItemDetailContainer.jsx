import './ItemDetailContainer.css'
import {useState, useEffect} from 'react'
import  {getProductByID} from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const {itemID} = useParams()


    useEffect(() => {
        getProductByID('itemID')
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.error(error)
        })

}, [itemID]) 

   return(
    <div className='ItemDetailContainer'>
        <ItemDetail {...product} />
    </div>
   )

}
export default ItemDetailContainer