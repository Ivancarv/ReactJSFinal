import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CategoryListContainer = () => {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchProductsByCategory = async () => {
            try {
                setLoading(true);


                const mockData = [
                    { id: '1', name: 'Producto 1', category: 'A', price: 100 },
                    { id: '2', name: 'Producto 2', category: 'B', price: 200 },
                    { id: '3', name: 'Producto 3', category: 'A', price: 300 },
                    { id: '4', name: 'Producto 4', category: 'C', price: 400 },
                ];


                const filteredProducts = mockData.filter((product) => product.category === categoryId);

                setProducts(filteredProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProductsByCategory();
    }, [categoryId]);

    if (loading) {
        return <p>Cargando productos...</p>;
    }

    if (products.length === 0) {
        return <p>No se encontraron productos para esta categoría.</p>;
    }

    return (
        <div>
            <h2>Productos de la categoría: {categoryId}</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <Link to={`/producto/${product.id}`}>
                            <strong>{product.name}</strong> - ${product.price}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryListContainer;
