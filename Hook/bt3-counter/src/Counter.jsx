import React from "react";
import useIncrement from "./useIncrement";

function Counter({ btnName, addAmount }) {
    const [count, increase] = useIncrement(addAmount);
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increase}>{btnName}</button>
        </div>
    );
}

export default Counter;
