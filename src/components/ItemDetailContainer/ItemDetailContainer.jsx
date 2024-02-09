import './ItemDetailContainer.css'
import {useState, useEffect} from 'react'
import  {getProductByID} from '../../asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import {useParams} from 'react-router-dom'
import { db } from '../../services/firebase/firebaseConfig'
import { getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = () => {
    //Loader
    const [loading, setLoading] = useState(true)
    
    const [product, setProduct] = useState(null)

    const {itemID} = useParams()

    useEffect(()=> {
        if(product) document.title = 'Detalle de ' + product.name
        return () =>{
            document.title ='Ecommerce Perfumes'
        }
    },[product]);


    useEffect(() => {

        setLoading(true)

        const productDocument = doc( db,'products', itemID)

        getDoc(productDocument)
        .then(queryDocumentSnapshot=> {
            const fields = queryDocumentSnapshot.data()
            const productAdapted = { id: queryDocumentSnapshot.id, ...fields}
            setProduct(productAdapted)
        })
        .catch(error => {
                console.error(error)
            })
        .finally (() => {
                setLoading(false)
            })

        
        // getProductByID(itemID)
        // .then(response => {
        //     setProduct(response)
        // })
        // .catch(error => {
        //     console.error(error)
        // })
        // .finally (() => {
        //     setLoading(false)
        // })

}, [itemID]) 

if(loading){
    return (
        
            <div id="contenedor">
    <div className="contenedor-loader">
        <div className="rueda"></div>
    </div>
    <div className="cargando">Cargando producto..</div>
    
    </div>  
        
        )
    }
 

// if(!product) {
//     return <h1>El producto no existe</h1>
// }
   return(
    <div className='ItemDetailContainer'>
        <ItemDetail {...product} />
    </div>
   )
   }

export default ItemDetailContainer