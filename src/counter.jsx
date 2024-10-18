import { useState } from "react"

export default function Counter() {

    const [count, setCount] = useState(0);

    const increase = () => {
        const newCount = count + 1;
        setCount(newCount);
    }
    const reduce = () => {
        const count2 = count - 1;
        setCount(count2);
    }
    return (
        <div style={{ border: '2px solid yellow' }}>
            <h3>Counter: {count}</h3>
            <button onClick={increase}>Add</button>
            <button onClick={reduce}>Reduce</button>
        </div>
    )
}