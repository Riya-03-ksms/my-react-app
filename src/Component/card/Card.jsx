import React from 'react';
import { useState } from 'react';
import './Card.css';

export default function Card() {

    const [clickCount, setclickCount] = useState(0);
    const [cartCount, setcartCount] = useState(0);
    const addToCart = () => {
        setcartCount(prevClickCount => prevClickCount + 1);

        if(newClickCount %2 == 0){
            setcartCount(cartCount - 1);
        }
        else{
            setcartCount(cartCount + 1);
        }
        }
    }
    return (
        <>
        <div className="card">
            <img src="https://img.freepik.com/free-vector/bokeh-background-luxurious-cosmetics_23-2147673186.jpg?t=st=1733390030~exp=1733393630~hmac=a8ce0dfe8e5de2296f7552757b566f295017aca7ba8cc1a152ac073e284a5dd4&w=740" alt="Placeholder" />
            <div className="card-content">
                <h2>Product 1</h2>
                <p>Luxury Brand</p>
                <p>Price:$99.99</p>
                <button onClick={addToCart}>Add to cart</button>
            </div>
        </div>

        <div className="card">
            <img src="https://img.freepik.com/free-vector/bokeh-background-luxurious-cosmetics_23-2147673186.jpg?t=st=1733390030~exp=1733393630~hmac=a8ce0dfe8e5de2296f7552757b566f295017aca7ba8cc1a152ac073e284a5dd4&w=740" alt="Placeholder" />
            <div className="card-content">
                <h2>Product 1</h2>
                <p>Luxury Brand</p>
                <p>Price:$99.99</p>
                <button onClick={addToCart}>Add to cart</button>
            </div>
        </div>

        <div className="card">
            <img src="https://img.freepik.com/free-vector/bokeh-background-luxurious-cosmetics_23-2147673186.jpg?t=st=1733390030~exp=1733393630~hmac=a8ce0dfe8e5de2296f7552757b566f295017aca7ba8cc1a152ac073e284a5dd4&w=740" alt="Placeholder" />
            <div className="card-content">
                <h2>Product 1</h2>
                <p>Luxury Brand</p>
                <p>Price:$99.99</p>
                <button onClick={addToCart}>Add to cart</button>
            </div>
        </div>
        </>
       
    );