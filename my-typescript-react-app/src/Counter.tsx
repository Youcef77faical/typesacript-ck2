import React, { useState } from 'react';

const Counter: React.FC = () => {
    // Type inference helps TypeScript understand the state type
    // Explicitly typed as number for clarity
    const [count, setCount] = useState<number>(0);

    // Arrow function maintains consistent syntax
    const increment = () => {
        // Use functional update to ensure correct state calculation
        setCount(prevCount => prevCount + 1);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
};

export default Counter;