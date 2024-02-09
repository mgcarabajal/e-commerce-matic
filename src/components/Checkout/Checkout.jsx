import { useState } from "react";
import { collection, getDocs, where, query, documentId, writeBatch, addDoc, Timestamp } from "firebase/firestore";
import { useCart } from "../../context/CartContext";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { db } from "../../services/firebase/firebaseConfig";
import { useNotification } from "../../notification/NotificationService";

const Checkout = () => {
    const [loading, setLoading] = useState(false);
    const [orderId, setOrderId] = useState(null);
    const { cart, total, clearCart } = useCart();
    const { showNotification } = useNotification();

    const handleConfirm = async (userData) => {
        setLoading(true);
        try {
            const order = await createOrder(userData);
            if (order) {
                setOrderId(order.id);
                clearCart();
            }
        } catch (error) {
            showNotification('error', 'Hubo un error al crear la orden');
        } finally {
            setLoading(false);
        }
    };

    const createOrder = async (userData) => {
        const objOrder = {
            buyer: { 
                name: userData.name,
                phone: userData.phone,
                email: userData.email
            },
            items: cart,
            total: total, 
            date: Timestamp.fromDate(new Date()) 
        };

        const batch = writeBatch(db);
        const outOfStock = [];

        const ids = cart.map(prod => prod.id);
        const productsCollection = query(collection(db, 'products'), where(documentId(), 'in', ids));

        const querySnapshot = await getDocs(productsCollection);
        const { docs } = querySnapshot;

        docs.forEach(doc => {
            const fields = doc.data();
            const stockDb = fields.stock;

            const productsAddedToCart = cart.find(prod => prod.id === doc.id);
            const prodQuantity = productsAddedToCart.quantity;

            if(stockDb >= prodQuantity) {
                batch.update(doc.ref, { stock: stockDb - prodQuantity});
            } else {
                outOfStock.push({ id: doc.id, ...fields});
            }
        });

        if(outOfStock.length === 0) {
            batch.commit();

            const orderCollection = collection(db, 'orders');
            return await addDoc(orderCollection, objOrder);
        } else {
            showNotification('error', 'Hay productos que no tienen stock disponible');
            return null;
        }
    };

    if(loading) {
        return <h1>Se está generando su orden, espere por favor...</h1>;
    }

    if(orderId) {
        return <h1>El ID de su compra es: {orderId}</h1>;
    }

    return (
        <>
            <h1>CHECKOUT</h1>
            <CheckoutForm onConfirm={handleConfirm}/> 
        </>
    );
};

export default Checkout;