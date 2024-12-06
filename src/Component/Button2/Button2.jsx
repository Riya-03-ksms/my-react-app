import React, { useState } from 'react';
import './Button2.css';
export default function Button2() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };
    return (
        <div>
            <button>click here</button>
        </div>
    );
}