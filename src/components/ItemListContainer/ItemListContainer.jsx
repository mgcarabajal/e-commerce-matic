import { useState, useEffect } from 'react'
import { getProducts, getProductsByCategory} from '../../asyncMock'
import ItemList from '../ItemList/ItemList'
import {useParams} from 'react-router-dom'

const ItemListContainer = ({greeting}) => {
    // Loader
    const [loading, setLoading] = useState(true)

    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(()=> {
        if(categoryId) document.title = 'Productos filtrados por: ' + categoryId
        return () =>{
            document.title ='Ecommerce Perfumes'
        }
    },[categoryId]);

    useEffect(()=> {

        setLoading(true)

        const asyncFunc = categoryId ? getProductsByCategory : getProducts

        asyncFunc (categoryId)
        .then (response => {
            setProducts(response)
        } )
        .catch(error => {
            console.error(error)
        })
        .finally (() => {
            setLoading(false)
        })
       
},[categoryId])

 if(loading){
    return (
   
        <div id="contenedor">
        <div className="contenedor-loader">
            <div className="rueda"></div>
        </div>
        <div className="cargando">Cargando..</div>
        
        </div>  
    )
 }

    return (
        <div >
            <h1>{greeting + (categoryId ?? '')}</h1>
            <ItemList products={products}/>
        </div>
    )

}
export default ItemListContainer