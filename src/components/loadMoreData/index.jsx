import React, { useEffect } from 'react'
import './styles.css';
import { useState } from 'react';

export default function LoadMoreData() {
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [disable, setDisable] = useState(false);

    async function fetchProducts() {
        try {
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);
            const productsJson = await response.json();
            const productsData = productsJson.products

            if (productsJson && productsData && productsData.length) {
                setProducts((prevalue) => [...prevalue, ...productsData])
                setLoading(false);
                console.log(productsJson);
            }


        } catch (error) {
            console.log(error.message);
            setLoading(true)
        }

    }

    useEffect(() => {
        fetchProducts();
    }, [count])

    useEffect(() => {
        products && products.length === 120 ? setDisable(true) : setDisable(false);
    }, [products])

    if (loading) {
        return <div><h2>Loading Please Wait!</h2></div>
    }

    return <div className="loadMoreConatiner">
        <div className="products">
            {
                products && products.length ?
                    products.map((product, index) => (
                        <div className="product">
                            <img src={product.thumbnail} alt={product.title} />
                            <h2>{product.title}</h2>
                        </div>
                    ))
                    : <h2>No Products Found!</h2>
            }
        </div>
        <button className='loadMoreBtn' disabled={disable} onClick={() => setCount(count + 1)}>{disable ? "You have reached the limit!" : "Click To Load More!"}</button>
    </div>
}
