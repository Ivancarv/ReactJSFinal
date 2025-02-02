import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchItem = async () => {
            try {
                setLoading(true);


                const mockData = [
                    { id: '1', name: 'Producto 1', description: 'Descripción del producto 1', price: 100 },
                    { id: '2', name: 'Producto 2', description: 'Descripción del producto 2', price: 200 },
                    { id: '3', name: 'Producto 3', description: 'Descripción del producto 3', price: 300 },
                ];


                const foundItem = mockData.find((product) => product.id === itemId);

                setItem(foundItem);
            } catch (error) {
                console.error('Error fetching item:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchItem();
    }, [itemId]);
    const handleAddToCart = () => {
        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
        existingCart.push(item);
        localStorage.setItem('cart', JSON.stringify(existingCart));
        alert(`${item.name} ha sido agregado al carrito.`);
    };



    if (loading) {
        return <p>Cargando detalles del producto...</p>;
    }

    if (!item) {
        return <p>Producto no encontrado.</p>;
    }

    return (
        <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Precio: ${item.price}</p>
            <button onClick={handleAddToCart}>Agregar al carrito</button>
        </div>
    );
};

export default ItemDetailContainer;
